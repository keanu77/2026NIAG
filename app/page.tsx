import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, HeartPulse, ListChecks, ShieldAlert, Smartphone } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { StatCard } from "@/components/stat-card";
import { NumberedStepCard } from "@/components/numbered-step-card";
import { ChapterNav } from "@/components/chapter-nav";
import { overviewStats, missionPoints } from "@/data/overview";

export const metadata: Metadata = { title: "首頁" };

const learningOrder = [
  "賽事總覽",
  "角色分工",
  "賽前準備",
  "紀錄與回報",
  "後送與應變",
  "單項規則",
  "場邊急症處理",
  "重要窗口",
];

export default function HomePage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <section className="rounded-[28px] bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-700 p-8 text-white md:p-10">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">
            <div className="space-y-5">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-medium">115 全大運 × 醫療救護教育訓練</div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">全大運賽事醫護支援需知 v1.1</h1>
              <p className="max-w-3xl text-sm leading-7 text-white/85 md:text-base">
                這是一個給賽事支援醫護人員、護理師、EMT、AT/PT 與場邊防護員使用的互動課程網站，整合賽事總覽、角色分工、賽前準備、後送應變、單項競賽規則與場邊急症處理。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/overview" className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">
                  開始學習 <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/emergency" className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold text-white">
                  進入場邊急症模組
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                { title: "新增手機版快速查詢", icon: Smartphone },
                { title: "新增高風險 decision tree", icon: ShieldAlert },
                { title: "新增頭部創傷分流", icon: HeartPulse },
                { title: "新增更多情境題", icon: ListChecks },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <Icon className="h-5 w-5" />
                    <div className="mt-3 text-sm font-semibold">{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <SectionTitle eyebrow="Overview" title="課程快速總覽" desc="先用數字與任務概觀，建立整體感。" />
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewStats.map((item) => <StatCard key={item.label} {...item} />)}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">本網站你會學到什麼</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {missionPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-slate-50 p-4">{point}</div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">建議學習順序</h2>
            <div className="mt-4">
              <NumberedStepCard items={learningOrder} bgColor="bg-teal-700" />
            </div>
          </div>
        </section>

        <ChapterNav />
      </div>
    </PageShell>
  );
}
