"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Brain,
  HeartPulse,
  Thermometer,
  TriangleAlert,
} from "lucide-react";

type Tree = {
  id: string;
  title: string;
  icon: LucideIcon;
  steps: string[];
  tone: string;
};

export function EmergencyDecisionTree({ trees }: { trees: Tree[] }) {
  const [active, setActive] = useState(trees[0]?.id ?? "");
  const current = trees.find((tree) => tree.id === active) ?? trees[0];

  return (
    <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="card p-4">
        <div className="mb-3 text-sm font-semibold text-slate-500">
          Decision Tree
        </div>
        <div className="space-y-2">
          {trees.map((tree) => {
            const Icon = tree.icon;
            const selected = tree.id === active;
            return (
              <button
                key={tree.id}
                onClick={() => setActive(tree.id)}
                aria-label={`查看${tree.title}處置流程`}
                aria-pressed={selected}
                className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${selected ? tree.tone : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
              >
                <Icon className="h-4 w-4" />
                {tree.title}
              </button>
            );
          })}
        </div>
      </div>
      <div className="card p-6">
        {current ? (
          <>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500">
              快速處置流程
            </div>
            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              {current.title}
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {current.steps.map((step, idx) => (
                <div
                  key={step}
                  className="relative rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-xs font-semibold text-slate-500">
                    STEP {idx + 1}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-slate-800">
                    {step}
                  </div>
                  {idx < current.steps.length - 1 ? (
                    <ArrowRight className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-slate-400 xl:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export const defaultTrees = [
  {
    id: "cardio",
    title: "胸口撞擊 / 心因性猝死",
    icon: HeartPulse,
    tone: "border-amber-200 bg-amber-50 text-amber-900",
    steps: ["啟動 EAP", "立即 CPR", "使用 AED", "轉送急診"],
  },
  {
    id: "heat",
    title: "熱中暑 / 神經症狀",
    icon: Thermometer,
    tone: "border-rose-200 bg-rose-50 text-rose-900",
    steps: ["辨識意識改變", "迅速降溫", "冰水浴或持續冷卻", "安排轉送"],
  },
  {
    id: "head",
    title: "頭部創傷 / LOC",
    icon: Brain,
    tone: "border-violet-200 bg-violet-50 text-violet-900",
    steps: [
      "ABCDE + 頸椎保護",
      "GCS / 神經學評估",
      "當天不可回場",
      "必要時立即後送",
    ],
  },
  {
    id: "resp",
    title: "張力性氣胸",
    icon: TriangleAlert,
    tone: "border-cyan-200 bg-cyan-50 text-cyan-900",
    steps: ["辨識紅旗徵象", "必要時給氧", "極端情況針刺減壓", "立即轉送急診"],
  },
];
