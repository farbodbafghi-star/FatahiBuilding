"use client";

import { useState } from "react";

interface ArticleViewProps {
  summary: React.ReactNode;
  children: React.ReactNode;
}

export default function ArticleView({ summary, children }: ArticleViewProps) {
  const [view, setView] = useState<"summary" | "full">("summary");

  return (
    <>
      <div className="max-w-3xl mx-auto px-8 md:px-16 mb-12">
        <div className="inline-flex gap-8">
          <button
            onClick={() => setView("summary")}
            className={`pb-2 text-[13px] font-light tracking-[0.1em] transition-all duration-300 border-b ${
              view === "summary"
                ? "text-beige border-beige"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setView("full")}
            className={`pb-2 text-[13px] font-light tracking-[0.1em] transition-all duration-300 border-b ${
              view === "full"
                ? "text-beige border-beige"
                : "text-white/40 border-transparent hover:text-white/60"
            }`}
          >
            Full Article
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 md:px-16">
        <div className="prose-custom">
          {view === "summary" ? summary : children}
        </div>
      </div>
    </>
  );
}
