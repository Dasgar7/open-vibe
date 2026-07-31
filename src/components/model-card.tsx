import { AIModel, categoryLabels } from "@/lib/models";
import { cn } from "@/lib/utils";
import { Zap, Sparkles, Clock } from "lucide-react";

const speedConfig = {
  fast: { label: "Fast", color: "text-emerald-400 bg-emerald-400/10" },
  medium: { label: "Medium", color: "text-amber-400 bg-amber-400/10" },
  slow: { label: "Slow", color: "text-orange-400 bg-orange-400/10" },
};

const qualityConfig = {
  standard: { label: "Standard", color: "text-slate-400 bg-slate-400/10" },
  high: { label: "High", color: "text-sky-400 bg-sky-400/10" },
  premium: { label: "Premium", color: "text-[#00ff9d] bg-[#00ff9d]/10" },
};

export function ModelCard({ model }: { model: AIModel }) {
  return (
    <div className="card-lift group relative flex flex-col rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5">
      {model.featured && (
        <div className="absolute -top-2.5 right-4 flex items-center gap-1 rounded-full bg-[#00ff9d]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#00ff9d]">
          <Sparkles className="h-3 w-3" />
          Featured
        </div>
      )}
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-[#00ff9d] transition-colors">
            {model.name}
          </h3>
          <p className="mt-0.5 text-xs text-[#6b7c6e]">{model.provider}</p>
        </div>
        <span className="rounded-lg bg-[#131c14] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[#9ca3af]">
          {categoryLabels[model.category]}
        </span>
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-[#9ca3af] line-clamp-2">
        {model.description}
      </p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium",
            speedConfig[model.speed].color
          )}
        >
          <Zap className="h-3 w-3" />
          {speedConfig[model.speed].label}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium",
            qualityConfig[model.quality].color
          )}
        >
          {qualityConfig[model.quality].label}
        </span>
        {model.context && (
          <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-medium text-[#9ca3af]">
            <Clock className="h-3 w-3" />
            {model.context}
          </span>
        )}
      </div>
      <div className="flex items-baseline justify-between border-t border-[#1a2a1c] pt-3">
        <div>
          <span className="text-base font-semibold text-[#00ff9d]">{model.pricing}</span>
          <span className="ml-1 text-xs text-[#6b7c6e]">{model.pricingUnit}</span>
        </div>
      </div>
    </div>
  );
}
