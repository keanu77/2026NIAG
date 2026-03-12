import { NumberedStepCard } from "@/components/numbered-step-card";

export function ReturnToPlayCard({ principles }: { principles: string[] }) {
  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold text-slate-900">返回賽場原則</h2>
      <div className="mt-4">
        <NumberedStepCard items={principles} />
      </div>
    </div>
  );
}
