import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "相關案例",
  description:
    "22 件國際運動賽場經典醫療事件回顧，從成功救援與遺憾案例中歸納場邊醫療最佳實務。",
  path: "/cases",
});

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
