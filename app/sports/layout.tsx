import type { Metadata } from "next";

export const metadata: Metadata = { title: "單項競賽規則" };

export default function SportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
