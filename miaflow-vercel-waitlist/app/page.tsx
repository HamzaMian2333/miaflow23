"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  LineChart,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const features = [
  {
    icon: LineChart,
    title: "Sales insights",
    description:
      "See what is selling, what is slowing down, and where revenue is changing day by day.",
  },
  {
    icon: ClipboardCheck,
    title: "Restock recommendations",
    description:
      "Get clear suggestions on what to restock, what to prep, and what to reduce before waste happens.",
  },
  {
    icon: PhoneCall,
    title: "Phone order drafts",
    description:
      "Let the AI collect order details and send drafts to the owner dashboard for approval.",
  },
  {
    icon: ShieldCheck,
    title: "Owner approval built in",
    description:
      "The AI recommends and drafts actions, but the owner stays in control of important decisions.",
  },
];

const steps = [
  "Connect sales or upload a CSV",
  "MiaFlow analyzes trends and inventory",
  "AI agents recommend daily actions",
  "Owner approves, edits, or rejects",
];

const dashboardItems = [
  {
    label: "Today’s revenue",
    value: "$1,248",
    note: "+14% from last Tuesday",
  },
  {
    label: "Top product",
    value: "Chocolate Cupcakes",
    note: "Trending up for Friday demand",
  },
  {
    label: "Restock alert",
    value: "Oat Milk",
    note: "Low stock, expected high demand",
  },
];

export default function MiaFlowLandingPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleWaitlistSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
     
        const response = await fetch("https://formspree.io/f/meedayyg", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    email,
    source: "MiaFlow waitlist",
  }),
});

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.error || "Could not save your email right now. Please try again."
        );
      }

      setStatus("success");
      setMessage("You are on the waitlist. We will be in touch soon.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not save your email right now. Please try again."
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.25),_transparent_30%)]" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-semibold tracking-tight">MiaFlow</span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#safety" className="hover:text-white">Safety</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Join waitlist
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-32 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <Bot className="h-4 w-4" />
              AI operations assistant for small businesses
            </div>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Run your small business with smarter daily decisions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              MiaFlow helps business owners understand sales, predict restock needs, draft phone orders, and approve AI-recommended actions from one simple dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                Get early access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
              >
                See features
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Restock recommendations</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Phone order drafts</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-400" /> Owner approval controls</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-slate-900 p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">MiaFlow Dashboard</p>
                  <h2 className="text-2xl font-semibold">Today’s action plan</h2>
                </div>
                <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
                  Safe mode on
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {dashboardItems.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-blue-500 p-2">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">AI recommendation</p>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Prepare 25 extra cupcakes for Friday. Reduce croissant batch by 15%. Review 2 phone order drafts before 4 PM.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white/[0.06] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-semibold">Pending approval</p>
                  <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs text-amber-300">Needs owner review</span>
                </div>
                <p className="text-sm text-slate-300">
                  Customer order draft: 24 cupcakes for Saturday pickup at 3:00 PM.
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950">Approve</button>
                  <button className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">Edit</button>
                  <button className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white">Reject</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Features</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Everything owners need to see, decide, and approve.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            MiaFlow turns business data into clear next steps, so owners can spend less time guessing and more time running the business.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="how" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">How it works</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">From data to daily action plan.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Start with simple uploads, then grow into integrations with sales, inventory, and phone systems as the business scales.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="safety" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Safety-first AI for real businesses.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                MiaFlow is designed around owner control. The AI can recommend, summarize, and draft actions, but important decisions stay in the approval queue.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "No automatic payments at launch",
                "No inventory changes without approval",
                "No customer messages without review",
                "No risky order confirmations by default",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                  <span className="text-sm leading-6 text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 md:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500">
            <Store className="h-7 w-7" />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">Join the early access list.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            We are building for bakeries, cafés, dessert shops, restaurants, salons, and local retailers that want smarter daily operations without complicated software.
          </p>
          <form onSubmit={handleWaitlistSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-slate-950 px-5 text-white outline-none placeholder:text-slate-500 focus:border-blue-400"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="min-h-12 rounded-full bg-blue-500 px-6 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Request access"}
            </button>
          </form>
          {message && (
            <p
              className={`mx-auto mt-4 max-w-xl text-sm ${
                status === "error" ? "text-red-300" : "text-emerald-300"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
