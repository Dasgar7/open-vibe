"use client";

import { usageStats, usageByModel, dailyUsage } from "@/lib/mock-data";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function UsagePage() {
  const pct = Math.round((usageStats.creditsUsed / usageStats.totalCredits) * 100);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Usage & Billing</h1>
        <p className="text-sm text-[#9ca3af]">Track credits, requests, and per-model costs.</p>
      </div>

      <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-6">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-[#9ca3af]">Credits remaining</p>
            <p className="text-3xl font-bold tracking-tight text-[#00ff9d]">
              ${usageStats.creditsRemaining.toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#6b7c6e]">Used this period</p>
            <p className="text-xl font-semibold">${usageStats.creditsUsed.toFixed(2)}</p>
          </div>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-[#1a2a1c]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00ff9d] to-[#10b981] transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-[#6b7c6e]">
          {pct}% of ${usageStats.totalCredits} total credits used
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5">
          <h2 className="mb-4 text-sm font-semibold">Daily spend ($)</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyUsage}>
                <defs>
                  <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2a1c" />
                <XAxis dataKey="date" tick={{ fill: "#6b7c6e", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7c6e", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#0f1610",
                    border: "1px solid #1a2a1c",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="cost" stroke="#10b981" fill="url(#colorCost)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5">
          <h2 className="mb-4 text-sm font-semibold">Requests by day</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyUsage}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2a1c" />
                <XAxis dataKey="date" tick={{ fill: "#6b7c6e", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7c6e", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#0f1610",
                    border: "1px solid #1a2a1c",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="requests" fill="#00ff9d" radius={[4, 4, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#1a2a1c]">
        <div className="border-b border-[#1a2a1c] bg-[#0d1310] px-5 py-3">
          <h2 className="text-sm font-semibold">Cost breakdown by model</h2>
        </div>
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#1a2a1c] text-xs text-[#6b7c6e]">
              <th className="px-5 py-3 font-medium">Model</th>
              <th className="px-5 py-3 font-medium text-right">Requests</th>
              <th className="hidden px-5 py-3 font-medium text-right sm:table-cell">Tokens</th>
              <th className="px-5 py-3 font-medium text-right">Cost</th>
            </tr>
          </thead>
          <tbody>
            {usageByModel.map((m) => (
              <tr key={m.model} className="border-b border-[#1a2a1c] last:border-0 hover:bg-white/[0.02]">
                <td className="px-5 py-3.5 font-medium">{m.model}</td>
                <td className="px-5 py-3.5 text-right text-[#9ca3af]">{m.requests.toLocaleString()}</td>
                <td className="hidden px-5 py-3.5 text-right text-[#9ca3af] sm:table-cell">
                  {m.tokens > 0 ? `${(m.tokens / 1000).toFixed(0)}K` : "—"}
                </td>
                <td className="px-5 py-3.5 text-right font-semibold text-[#00ff9d]">
                  ${m.cost.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="bg-[#0d1310]">
              <td className="px-5 py-3.5 font-semibold">Total</td>
              <td className="px-5 py-3.5 text-right font-semibold">
                {usageByModel.reduce((a, m) => a + m.requests, 0).toLocaleString()}
              </td>
              <td className="hidden px-5 py-3.5 text-right font-semibold sm:table-cell">
                {(usageByModel.reduce((a, m) => a + m.tokens, 0) / 1_000_000).toFixed(1)}M
              </td>
              <td className="px-5 py-3.5 text-right font-bold text-[#00ff9d]">
                ${usageByModel.reduce((a, m) => a + m.cost, 0).toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
