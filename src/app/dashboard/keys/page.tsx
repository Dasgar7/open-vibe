"use client";

import { useState } from "react";
import { Copy, Check, Plus, Trash2, Eye, EyeOff } from "lucide-react";
import { apiKeys as initialKeys } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ApiKeysPage() {
  const [keys, setKeys] = useState(initialKeys);
  const [copied, setCopied] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");

  const mask = (key: string) => key.slice(0, 12) + "•".repeat(20) + key.slice(-4);

  const copy = async (id: string, key: string) => {
    await navigator.clipboard.writeText(key);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const createKey = () => {
    if (!newName.trim()) return;
    const id = `key_${Date.now()}`;
    const key = `ov_live_sk_${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`;
    setKeys([
      {
        id,
        name: newName.trim(),
        key,
        created: new Date().toISOString().slice(0, 10),
        lastUsed: "Just now",
        status: "active",
      },
      ...keys,
    ]);
    setNewName("");
    setShowCreate(false);
  };

  const revoke = (id: string) => {
    setKeys(keys.map((k) => (k.id === id ? { ...k, status: "revoked" as const } : k)));
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">API Keys</h1>
          <p className="text-sm text-[#9ca3af]">
            Generate and manage keys for the Open Vibe API.
          </p>
        </div>
        <Button size="sm" onClick={() => setShowCreate(true)}>
          <Plus className="h-4 w-4" />
          Create key
        </Button>
      </div>

      {showCreate && (
        <div className="rounded-2xl border border-[#00ff9d]/30 bg-[#0f1610] p-5 glow-accent-sm">
          <h3 className="mb-3 text-sm font-semibold">New API key</h3>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Key name (e.g. Production)"
              className="flex-1 rounded-xl border border-[#1a2a1c] bg-[#0a0f0a] px-4 py-2.5 text-sm placeholder:text-[#6b7c6e]"
            />
            <div className="flex gap-2">
              <Button size="sm" onClick={createKey}>
                Generate
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setShowCreate(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-[#1a2a1c]">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-[#1a2a1c] bg-[#0d1310] text-xs text-[#6b7c6e]">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="hidden px-5 py-3 font-medium sm:table-cell">Key</th>
              <th className="hidden px-5 py-3 font-medium md:table-cell">Created</th>
              <th className="hidden px-5 py-3 font-medium lg:table-cell">Last used</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {keys.map((k) => (
              <tr
                key={k.id}
                className="border-b border-[#1a2a1c] last:border-0 hover:bg-white/[0.02]"
              >
                <td className="px-5 py-4 font-medium">{k.name}</td>
                <td className="hidden px-5 py-4 font-mono text-xs text-[#9ca3af] sm:table-cell">
                  <div className="flex items-center gap-2">
                    <span>{revealed[k.id] ? k.key : mask(k.key)}</span>
                    <button
                      onClick={() =>
                        setRevealed((r) => ({ ...r, [k.id]: !r[k.id] }))
                      }
                      className="text-[#6b7c6e] hover:text-foreground"
                    >
                      {revealed[k.id] ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </td>
                <td className="hidden px-5 py-4 text-[#6b7c6e] md:table-cell">{k.created}</td>
                <td className="hidden px-5 py-4 text-[#6b7c6e] lg:table-cell">{k.lastUsed}</td>
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      "inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
                      k.status === "active"
                        ? "bg-[#00ff9d]/10 text-[#00ff9d]"
                        : "bg-red-500/10 text-red-400"
                    )}
                  >
                    {k.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center justify-end gap-1">
                    <button
                      onClick={() => copy(k.id, k.key)}
                      className="rounded-lg p-2 text-[#6b7c6e] hover:bg-white/5 hover:text-foreground"
                      title="Copy"
                    >
                      {copied === k.id ? (
                        <Check className="h-4 w-4 text-[#00ff9d]" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                    {k.status === "active" && (
                      <button
                        onClick={() => revoke(k.id)}
                        className="rounded-lg p-2 text-[#6b7c6e] hover:bg-red-500/10 hover:text-red-400"
                        title="Revoke"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5">
        <h3 className="mb-2 text-sm font-semibold">Using your key</h3>
        <pre className="overflow-x-auto rounded-xl bg-[#0a0f0a] p-4 text-xs text-[#9ca3af]">
          <code>
            curl https://api.openvibe.ai/v1/chat \
            {"  "}-H "Authorization: Bearer YOUR_API_KEY" \
            {"  "}-H "Content-Type: application/json" \
            {"  "}-d '{`{"model":"gpt-4o","messages":[{"role":"user","content":"Hi"}]}`}'
          </code>
        </pre>
      </div>
    </div>
  );
}
