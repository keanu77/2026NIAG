import type { Metadata } from "next";
import { SITE_NAME } from "@/data/site";

// 各章節頁面共用的 metadata 產生器：統一補上 description、canonical 與完整 openGraph。
// 注意：Next.js 對 openGraph 是「整體取代」而非深層合併，因此每頁的 openGraph
// 必須自帶 images，否則會掉失 root 設定的 og:image。
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url: path,
      title,
      description,
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
  };
}
