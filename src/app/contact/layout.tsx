import type { Metadata } from "next";
import { social } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Contact | Fatahi Building",
  description:
    "Start with a conversation. Tell us about your lot, your home or your plans, and we'll tell you whether a custom home, a transformation or an addition makes sense.",
  alternates: { canonical: "/contact" },
  ...social({ path: "/contact" }),
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
