import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "全大運賽事醫護支援需知",
    template: "%s | 全大運醫護支援",
  },
  description:
    "115 全大運賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員互動課程網站",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "/",
    title: "全大運賽事醫護支援需知",
    description:
      "115 全大運賽事支援醫護人員與場邊防護員互動課程網站，涵蓋賽事總覽、角色分工、賽前準備、後送應變、單項競賽規則與場邊急症處理。",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "全大運賽事醫護支援課程",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "全大運賽事醫護支援需知",
    description:
      "115 全大運賽事支援醫護人員與場邊防護員互動課程網站",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className="font-sans">{children}</body>
    </html>
  );
}
