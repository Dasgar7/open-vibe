"use client";

import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-sm text-[#9ca3af]">Manage your account preferences.</p>
      </div>

      <section className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-6">
        <h2 className="mb-4 text-sm font-semibold">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs text-[#9ca3af]">Display name</label>
            <input
              defaultValue="Alex Rivera"
              className="w-full rounded-xl border border-[#1a2a1c] bg-[#0a0f0a] px-4 py-2.5 text-sm"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs text-[#9ca3af]">Email</label>
            <input
              defaultValue="alex@company.com"
              type="email"
              className="w-full rounded-xl border border-[#1a2a1c] bg-[#0a0f0a] px-4 py-2.5 text-sm"
            />
          </div>
          <Button size="sm">Save changes</Button>
        </div>
      </section>

      <section className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-6">
        <h2 className="mb-4 text-sm font-semibold">Notifications</h2>
        <div className="space-y-3">
          {[
            { label: "Usage alerts (80% of credits)", checked: true },
            { label: "Weekly usage summary", checked: true },
            { label: "New model announcements", checked: false },
            { label: "Product updates", checked: true },
          ].map((n) => (
            <label key={n.label} className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                defaultChecked={n.checked}
                className="h-4 w-4 rounded border-[#1a2a1c] accent-[#00ff9d]"
              />
              <span className="text-[#c5d0c5]">{n.label}</span>
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="mb-2 text-sm font-semibold text-red-400">Danger zone</h2>
        <p className="mb-4 text-sm text-[#9ca3af]">
          Permanently delete your account and all associated data.
        </p>
        <Button variant="danger" size="sm">
          Delete account
        </Button>
      </section>
    </div>
  );
}
