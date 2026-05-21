import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MiaFlow | AI operations assistant for small businesses",
  description:
    "MiaFlow helps small businesses manage sales insights, restock recommendations, phone-order drafts, and owner approvals.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
