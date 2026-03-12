"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";

const STORAGE_KEY = "prep-checklist";

const prepChecklist = [
  "賽前 30 分鐘到場，參加裁判長講解。",
  "熟悉緊急醫療應變計畫（EAP）。",
  "取得平面圖並預演後送路線。",
  "確認 AED 位置與功能。",
  "確認救護站位置、電梯、出入口與救護車停放點。",
  "全員配戴識別證，醫護人員配戴執業執照。",
  "完成簽到與點檢醫材。",
];

export default function PreparationPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    }
  }, [checked, loaded]);

  const progress = useMemo(
    () => Math.round((prepChecklist.filter((item) => checked[item]).length / prepChecklist.length) * 100),
    [checked],
  );

  const handleReset = useCallback(() => {
    setChecked({});
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Preparation" title="賽前準備" desc="先處理到場前最容易漏掉的細節。" />
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card p-6">
            <h2 className="text-xl font-bold">進場前檢核表</h2>
            <div className="mt-4 space-y-3">
              {prepChecklist.map((item) => (
                <label key={item} className="flex cursor-pointer gap-3 rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={!!checked[item]}
                    onChange={() => setChecked((prev) => ({ ...prev, [item]: !prev[item] }))}
                    className="mt-1"
                  />
                  <span className={checked[item] ? "line-through opacity-60" : ""}>{item}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">完成度</h2>
                {progress > 0 && (
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                  >
                    <RotateCcw className="h-3 w-3" />
                    重設
                  </button>
                )}
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full rounded-full bg-teal-700 transition-all" style={{ width: `${progress}%` }} />
              </div>
              <p className="mt-3 text-sm text-slate-700">{progress}% 已完成</p>
            </div>
            <div className="card p-6">
              <h2 className="text-xl font-bold">每日閉館前</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>清點醫療資源並回報需求。</li>
                <li>彙整醫療紀錄與建議事項。</li>
                <li>確認已無選手仍在比賽或練習。</li>
                <li>確實簽退。</li>
              </ul>
            </div>
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
