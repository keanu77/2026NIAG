"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export function ScenarioQuiz({ questions }: { questions: Question[] }) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((sum, q, i) => sum + (selected[i] === q.answer ? 1 : 0), 0);

  const handleRetry = () => {
    setSelected({});
    setSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <div key={q.question} className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Q{i + 1}. {q.question}</h3>
          <div className="mt-4 space-y-3">
            {q.options.map((option, idx) => {
              const picked = selected[i] === idx;
              const correct = submitted && q.answer === idx;
              const wrong = submitted && picked && q.answer !== idx;
              return (
                <button
                  key={option}
                  disabled={submitted}
                  onClick={() => setSelected((prev) => ({ ...prev, [i]: idx }))}
                  className={cn(
                    "w-full rounded-2xl border p-4 text-left text-sm transition",
                    picked ? "border-teal-500 bg-teal-50" : "border-slate-200 bg-white hover:bg-slate-50",
                    correct && "border-emerald-500 bg-emerald-50",
                    wrong && "border-rose-500 bg-rose-50",
                    submitted && "cursor-default",
                  )}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {submitted ? (
            <p className="mt-4 text-sm text-slate-700"><span className="font-semibold">解析：</span>{q.explanation}</p>
          ) : null}
        </div>
      ))}

      <div className="flex flex-wrap items-center gap-3">
        {!submitted ? (
          <button onClick={() => setSubmitted(true)} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
            送出測驗
          </button>
        ) : (
          <>
            <div className="text-sm text-slate-700">得分：{score} / {questions.length}</div>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4" />
              重新測驗
            </button>
          </>
        )}
      </div>
    </div>
  );
}
