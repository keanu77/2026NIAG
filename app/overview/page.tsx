import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { StatCard } from "@/components/stat-card";
import { ChapterNav } from "@/components/chapter-nav";
import { missionPoints, overviewStats, venues } from "@/data/overview";

export const metadata: Metadata = { title: "賽事總覽" };

export default function OverviewPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Overview" title="賽事總覽" desc="掌握賽事規模、場地分布與支援任務。" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewStats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">核心任務</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-700">
              {missionPoints.map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4">{item}</div>
              ))}
            </div>
          </div>
          <div className="card p-6 space-y-5">
            <div>
              <h2 className="text-xl font-bold">桃園場地</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {venues.taoyuan.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold">外縣市場地</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {venues.others.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
