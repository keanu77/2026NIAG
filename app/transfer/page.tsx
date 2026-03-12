import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { NumberedStepCard } from "@/components/numbered-step-card";
import { ChapterNav } from "@/components/chapter-nav";

export const metadata: Metadata = { title: "後送與應變" };

const urgentTransferFlags = [
  "大量出血的傷害",
  "意識喪失且生命徵象微弱",
  "急性心肌梗塞、心血管疾病或中風",
  "急性呼吸困難，給氧後仍生命徵象微弱",
  "疑似熱衰竭或多重器官衰竭",
  "軀幹、頭部、肱骨與股骨骨折",
];

const transferSteps = [
  "由駐場醫療救護人員先採取必要緊急處置。",
  "通知醫護中心／醫護組。",
  "護理師第一時間聯繫救護車與管控中心。",
  "依情況送醫，並同步回報執行秘書或負責窗口。",
  "執行秘書指派人員後續慰問與追蹤。",
];

export default function TransferPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Transfer & Response" title="後送與應變" desc="需不需要後送，由醫師統一診斷與決策。" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card p-6">
            <h2 className="text-xl font-bold">建議緊急後送情況</h2>
            <div className="mt-4 space-y-3">
              {urgentTransferFlags.map((item) => (
                <div key={item} className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-950">{item}</div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h2 className="text-xl font-bold">後送流程</h2>
            <div className="mt-4">
              <NumberedStepCard items={transferSteps} />
            </div>
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
