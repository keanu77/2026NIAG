import type { Metadata } from "next";
import { PageShell } from "@/components/ui/page-shell";
import { SectionTitle } from "@/components/section-title";
import { ChapterNav } from "@/components/chapter-nav";
import { contacts } from "@/data/contacts";

export const metadata: Metadata = { title: "重要窗口" };

export default function ContactsPage() {
  return (
    <PageShell>
      <div className="page-wrap">
        <SectionTitle eyebrow="Contacts" title="重要窗口" desc="現場協調、醫療後送與防護調度的快速聯絡清單。" />
        <div className="card overflow-x-auto p-2 md:p-4">
          <table className="w-full min-w-[720px] text-left text-sm">
            <caption className="sr-only">全大運醫護支援重要聯絡窗口清單</caption>
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="px-4 py-3">窗口</th>
                <th className="px-4 py-3">電話</th>
                <th className="px-4 py-3">聯絡時機</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((row) => (
                <tr key={row[0]} className="border-b border-slate-100">
                  <td className="px-4 py-4 font-medium text-slate-900">{row[0]}</td>
                  <td className="px-4 py-4 text-slate-700">{row[1]}</td>
                  <td className="px-4 py-4 text-slate-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ChapterNav />
      </div>
    </PageShell>
  );
}
