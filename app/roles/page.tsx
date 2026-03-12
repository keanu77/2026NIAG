import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import { collaborationNotes, roleCards } from "@/data/roles";

export const metadata: Metadata = { title: "角色分工" };

export default function RolesPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Roles" title="角色分工" desc="釐清大會醫護、防護組與隨隊人員的權責邊界。" />
        <div className="grid gap-5 xl:grid-cols-2">
          {roleCards.map((role) => (
            <div key={role.title} className="card p-6">
              <h2 className="text-xl font-bold text-slate-900">{role.title}</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {role.duties.map((duty) => <li key={duty}>{duty}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold">合作模式</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {collaborationNotes.map((note) => (
              <div key={note} className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">{note}</div>
            ))}
          </div>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
