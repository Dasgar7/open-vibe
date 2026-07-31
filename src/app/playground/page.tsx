"use client";

import { useState } from "react";
import { MarketingNav } from "@/components/marketing-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { models } from "@/lib/models";
import { Send, Loader2, Sparkles } from "lucide-react";

const textModels = models.filter((m) => m.category === "text" || m.category === "code");

const mockResponses: Record<string, string> = {
  default:
    "This is a simulated response from the Open Vibe playground. In production, this would stream tokens from the selected model via the unified API.\n\nOpen Vibe routes your request to the underlying provider, normalizes the response, and bills you based on actual usage — all through a single API key.",
};

export default function PlaygroundPage() {
  const [model, setModel] = useState(textModels[0]?.id ?? "gpt-4o");
  const [prompt, setPrompt] = useState("Explain how transformers work in simple terms.");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResponse("");
    const text = mockResponses.default;
    let i = 0;
    const interval = setInterval(() => {
      i += 3;
      setResponse(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setLoading(false);
      }
    }, 20);
  };

  return (
    <div className="min-h-screen">
      <MarketingNav />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#00ff9d]/20 bg-[#00ff9d]/5 px-3 py-1 text-xs font-medium text-[#00ff9d]">
            <Sparkles className="h-3 w-3" />
            Interactive playground
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Playground</h1>
          <p className="mt-1 text-[#9ca3af]">
            Test any text model before integrating the API. Responses are simulated for demo.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-[#9ca3af]">Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-xl border border-[#1a2a1c] bg-[#0f1610] px-4 py-2.5 text-sm"
              >
                {textModels.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.name} ({m.provider})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-[#9ca3af]">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={8}
                className="w-full resize-none rounded-xl border border-[#1a2a1c] bg-[#0f1610] px-4 py-3 text-sm leading-relaxed placeholder:text-[#6b7c6e]"
                placeholder="Enter your prompt..."
              />
            </div>
            <Button onClick={run} disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Run
                </>
              )}
            </Button>
          </div>

          <div className="lg:col-span-3">
            <div className="flex h-full min-h-[320px] flex-col rounded-2xl border border-[#1a2a1c] bg-[#0c120c]">
              <div className="flex items-center gap-2 border-b border-[#1a2a1c] px-4 py-3">
                <div className="h-2 w-2 rounded-full bg-[#00ff9d]" />
                <span className="text-xs text-[#6b7c6e]">
                  Response · {textModels.find((m) => m.id === model)?.name}
                </span>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                {response ? (
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-[#c5d0c5]">
                    {response}
                    {loading && <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-[#00ff9d]" />}
                  </p>
                ) : (
                  <p className="text-sm text-[#6b7c6e]">
                    Response will appear here after you run a prompt.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
