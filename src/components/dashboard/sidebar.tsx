"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Key,
  BarChart3,
  Box,
  BookOpen,
  Play,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Logo } from "../logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/models", label: "Models", icon: Box },
  { href: "/dashboard/keys", label: "API Keys", icon: Key },
  { href: "/dashboard/usage", label: "Usage & Billing", icon: BarChart3 },
  { href: "/playground", label: "Playground", icon: Play },
  { href: "/docs", label: "Docs", icon: BookOpen },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavContent = () => (
    <>
      <div className="flex h-16 items-center border-b border-[#1a2a1c] px-5">
        <Logo size="sm" />
      </div>
      <nav className="flex-1 space-y-1 p-3">
        {nav.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-[#00ff9d]/10 text-[#00ff9d] shadow-[inset_0_0_0_1px_rgba(0,255,157,0.2)]"
                  : "text-[#9ca3af] hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon className={cn("h-4.5 w-4.5", active && "text-[#00ff9d]")} />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-[#1a2a1c] p-3 space-y-1">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#9ca3af] hover:bg-white/5 hover:text-foreground"
        >
          <Settings className="h-4.5 w-4.5" />
          Settings
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#9ca3af] hover:bg-white/5 hover:text-foreground"
        >
          <LogOut className="h-4.5 w-4.5" />
          Sign out
        </Link>
      </div>
    </>
  );

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex h-14 items-center justify-between border-b border-[#1a2a1c] bg-[#0a0f0a]/95 px-4 backdrop-blur lg:hidden">
        <Logo size="sm" />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-muted hover:bg-white/5"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 flex h-full w-64 flex-col border-r border-[#1a2a1c] bg-[#0d1310]">
            <NavContent />
          </aside>
        </div>
      )}

      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-60 flex-col border-r border-[#1a2a1c] bg-[#0d1310] lg:flex">
        <NavContent />
      </aside>
    </>
  );
}
