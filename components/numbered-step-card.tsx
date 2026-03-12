export function NumberedStepCard({
  items,
  bgColor = "bg-slate-900",
}: {
  items: string[];
  bgColor?: string;
}) {
  return (
    <div className="space-y-3 text-sm text-slate-700">
      {items.map((item, idx) => (
        <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
          <div
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${bgColor} text-xs font-bold text-white`}
          >
            {idx + 1}
          </div>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
