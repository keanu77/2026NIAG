export function SectionTitle({
  eyebrow,
  title,
  desc,
  as: Heading = "h1",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold tracking-wide text-teal-700">{eyebrow}</p>
      <Heading className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{title}</Heading>
      {desc ? <p className="max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{desc}</p> : null}
    </div>
  );
}
