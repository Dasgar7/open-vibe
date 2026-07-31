import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#00ff9d] to-[#10b981] shadow-lg glow-accent-sm transition-transform group-hover:scale-105",
          size === "sm" && "h-7 w-7",
          size === "md" && "h-8 w-8",
          size === "lg" && "h-10 w-10"
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={cn(
            "text-[#0a0f0a]",
            size === "sm" && "h-4 w-4",
            size === "md" && "h-4.5 w-4.5",
            size === "lg" && "h-5 w-5"
          )}
        >
          <path
            d="M12 3L4 7.5V16.5L12 21L20 16.5V7.5L12 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M12 12L4 7.5M12 12L20 7.5M12 12V21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span
        className={cn(
          "font-semibold tracking-tight text-foreground",
          size === "sm" && "text-base",
          size === "md" && "text-lg",
          size === "lg" && "text-xl"
        )}
      >
        Open<span className="text-[#00ff9d]">Vibe</span>
      </span>
    </Link>
  );
}
