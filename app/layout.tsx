import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "全大運賽事醫護支援需知",
    template: "%s | 全大運醫護支援",
  },
  description:
    "115 全大運賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員互動課程網站",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "全大運賽事醫護支援需知",
    description:
      "115 全大運賽事支援醫護人員與場邊防護員互動課程網站，涵蓋賽事總覽、角色分工、賽前準備、後送應變、單項競賽規則與場邊急症處理。",
    siteName: "全大運醫護支援課程",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
