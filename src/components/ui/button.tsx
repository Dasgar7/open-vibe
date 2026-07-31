import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
          {
            "btn-primary px-5 py-2.5 text-sm": variant === "primary" && size === "md",
            "btn-primary px-4 py-2 text-xs": variant === "primary" && size === "sm",
            "btn-primary px-6 py-3 text-base": variant === "primary" && size === "lg",
            "bg-[#131c14] text-foreground border border-[#1a2a1c] hover:border-[#00ff9d]/40 hover:bg-[#162018] px-5 py-2.5 text-sm":
              variant === "secondary" && size === "md",
            "bg-[#131c14] text-foreground border border-[#1a2a1c] hover:border-[#00ff9d]/40 hover:bg-[#162018] px-4 py-2 text-xs":
              variant === "secondary" && size === "sm",
            "bg-transparent text-muted hover:text-foreground hover:bg-white/5 px-4 py-2 text-sm":
              variant === "ghost",
            "bg-transparent border border-[#1a2a1c] text-foreground hover:border-[#00ff9d]/50 hover:bg-[#00ff9d]/5 px-5 py-2.5 text-sm":
              variant === "outline",
            "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 px-4 py-2 text-sm":
              variant === "danger",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
