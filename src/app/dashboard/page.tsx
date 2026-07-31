"use client";

import Link from "next/link";
import {
  Key,
  Activity,
  DollarSign,
  Zap,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { usageStats, usageByModel, dailyUsage } from "@/lib/mock-data";
import { models } from "@/lib/models";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const pct = Math.round((usageStats.creditsUsed / usageStats.totalCredits) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-sm text-[#9ca3af]">Welcome back. Here's your usage at a glance.</p>
        </div>
        <Link href="/dashboard/keys">
          <Button size="sm">
            <Key className="h-4 w-4" />
            Manage API keys
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Credits remaining",
            value: `$${usageStats.creditsRemaining.toFixed(2)}`,
            sub: `${pct}% used this period`,
            icon: DollarSign,
            color: "text-[#00ff9d]",
          },
          {
            label: "Requests this month",
            value: usageStats.requestsThisMonth.toLocaleString(),
            sub: "+18% vs last month",
            icon: Activity,
            color: "text-sky-400",
          },
          {
            label: "Tokens processed",
            value: `${(usageStats.tokensThisMonth / 1_000_000).toFixed(1)}M`,
            sub: "Across all models",
            icon: Zap,
            color: "text-amber-400",
          },
          {
            label: "Spend this month",
            value: `$${usageStats.costThisMonth.toFixed(2)}`,
            sub: "Of $1,000 budget",
            icon: TrendingUp,
            color: "text-violet-400",
          },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-[#6b7c6e]">{s.label}</span>
              <s.icon className={`h-4 w-4 ${s.color}`} />
            </div>
            <p className="text-2xl font-bold tracking-tight">{s.value}</p>
            <p className="mt-1 text-xs text-[#6b7c6e]">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5 lg:col-span-3">
          <h2 className="mb-4 text-sm font-semibold">Daily requests</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyUsage}>
                <defs>
                  <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ff9d" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00ff9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2a1c" />
                <XAxis
                  dataKey="date"
                  tick={{ fill: "#6b7c6e", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#6b7c6e", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#0f1610",
                    border: "1px solid #1a2a1c",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="requests"
                  stroke="#00ff9d"
                  fill="url(#colorReq)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold">Top models by cost</h2>
            <Link href="/dashboard/usage" className="text-xs text-[#00ff9d] hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {usageByModel.slice(0, 5).map((m, i) => (
              <div key={m.model} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#131c14] text-[10px] font-bold text-[#6b7c6e]">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{m.model}</p>
                  <p className="text-[11px] text-[#6b7c6e]">{m.requests} requests</p>
                </div>
                <span className="text-sm font-semibold text-[#00ff9d]">
                  ${m.cost.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            href: "/dashboard/models",
            title: "Browse models",
            desc: `${models.length} models available`,
          },
          {
            href: "/playground",
            title: "Open playground",
            desc: "Test models in-browser",
          },
          {
            href: "/docs",
            title: "Read the docs",
            desc: "API reference & guides",
          },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="card-lift group flex items-center justify-between rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5"
          >
            <div>
              <p className="font-semibold group-hover:text-[#00ff9d] transition-colors">
                {l.title}
              </p>
              <p className="mt-0.5 text-xs text-[#6b7c6e]">{l.desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-[#6b7c6e] group-hover:text-[#00ff9d] transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
