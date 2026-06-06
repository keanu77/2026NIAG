import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "單項競賽規則",
  description:
    "19 項全大運競賽的進場時機、常見運動傷害、場邊處置建議與轉送標準的單項醫護手冊。",
  path: "/sports",
});

export default function SportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
