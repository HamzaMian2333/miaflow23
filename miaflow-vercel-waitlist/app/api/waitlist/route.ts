import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function getSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase environment variables.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    const { error } = await supabase.from("waitlist").insert({
      email,
      source: "miaflow_landing_page",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          message: "You are already on the waitlist. We will be in touch soon.",
        });
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Could not save your email right now. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "You are on the waitlist. We will be in touch soon.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Could not save your email right now. Please try again." },
      { status: 500 }
    );
  }
}
