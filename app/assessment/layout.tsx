import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "評估工具",
  description:
    "場邊常用評估工具彙整：急救評估、SCAT 腦震盪、熱傷害、骨折判定與返場決策快速參考。",
  path: "/assessment",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
