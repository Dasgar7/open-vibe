"use client";

import { useState } from "react";
import { ModelCard } from "@/components/model-card";
import { models, categoryLabels, type ModelCategory } from "@/lib/models";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const categories: (ModelCategory | "all")[] = ["all", "text", "image", "video", "audio", "code"];

export default function DashboardModelsPage() {
  const [filter, setFilter] = useState<ModelCategory | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = models.filter((m) => {
    const matchCat = filter === "all" || m.category === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      m.name.toLowerCase().includes(q) ||
      m.provider.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Models</h1>
        <p className="text-sm text-[#9ca3af]">All models available via your API key.</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-xl px-3 py-1.5 text-sm font-medium transition-all",
                filter === c
                  ? "bg-[#00ff9d]/15 text-[#00ff9d] shadow-[inset_0_0_0_1px_rgba(0,255,157,0.25)]"
                  : "bg-[#131c14] text-[#9ca3af] hover:text-foreground border border-[#1a2a1c]"
              )}
            >
              {c === "all" ? "All" : categoryLabels[c]}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6b7c6e]" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-[#1a2a1c] bg-[#0f1610] py-2 pl-10 pr-4 text-sm placeholder:text-[#6b7c6e] sm:w-56"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((m) => (
          <ModelCard key={m.id} model={m} />
        ))}
      </div>
    </div>
  );
}
