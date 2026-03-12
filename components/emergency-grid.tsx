export function EmergencyGrid({
  items,
}: {
  items: { title: string; items: { name: string; history: string[]; exam: string[]; action: string[] }[] }[];
}) {
  return (
    <div className="space-y-8">
      {items.map((group) => (
        <section key={group.title} className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">{group.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {group.items.map((item) => (
              <div key={item.name} className="card p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">病史 / 情境</div>
                    <ul className="list-disc space-y-1 pl-5">
                      {item.history.map((row) => <li key={row}>{row}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">體檢要點</div>
                    <ul className="list-disc space-y-1 pl-5">
                      {item.exam.map((row) => <li key={row}>{row}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-slate-900">場邊處置</div>
                    <ul className="list-disc space-y-1 pl-5">
                      {item.action.map((row) => <li key={row}>{row}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
