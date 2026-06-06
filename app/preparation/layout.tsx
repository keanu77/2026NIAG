import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "賽前準備",
  description:
    "全大運賽前準備重點：場地動線勘查、醫材檢核、團隊分工與緊急應變計畫（EAP）建立。",
  path: "/preparation",
});

export default function PreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
