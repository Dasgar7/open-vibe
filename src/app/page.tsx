import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Key,
  Layers,
  BarChart3,
  Shield,
  Sparkles,
  MessageSquare,
  Image,
  Video,
  Mic,
  Code2,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { models } from "@/lib/models";
import { ModelCard } from "@/components/model-card";

const features = [
  {
    icon: Key,
    title: "One API key",
    description:
      "Generate a single key and call GPT-4o, Claude, FLUX, Runway, ElevenLabs, and dozens more without switching providers.",
  },
  {
    icon: Layers,
    title: "Unified interface",
    description:
      "Consistent request/response shapes across modalities. Swap models with a single parameter change.",
  },
  {
    icon: BarChart3,
    title: "Transparent usage",
    description:
      "Real-time cost tracking, per-model breakdowns, and spend alerts so you never get surprised by a bill.",
  },
  {
    icon: Zap,
    title: "Production ready",
    description:
      "Low latency routing, automatic retries, and high availability. Built for apps that ship to real users.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    description:
      "Keys are hashed, never logged in plaintext. Fine-grained scopes and instant revocation.",
  },
  {
    icon: Sparkles,
    title: "Playground included",
    description:
      "Test any model in the browser before writing a line of code. Perfect for prototyping and demos.",
  },
];

const categories = [
  { icon: MessageSquare, label: "Text / Chat", count: "12+" },
  { icon: Image, label: "Image", count: "8+" },
  { icon: Video, label: "Video", count: "5+" },
  { icon: Mic, label: "Audio", count: "6+" },
  { icon: Code2, label: "Code", count: "4+" },
];

export default function HomePage() {
  const featured = models.filter((m) => m.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#00ff9d]/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-[#10b981]/[0.05] blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 text-center sm:px-6 sm:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00ff9d]/20 bg-[#00ff9d]/5 px-4 py-1.5 text-xs font-medium text-[#00ff9d] animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" />
            Now with 30+ models across 5 modalities
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            One API key,{" "}
            <span className="gradient-text">every AI model</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#9ca3af] sm:text-lg animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Open Vibe is the AI API marketplace. Access the best LLMs, image, video, and
            voice models through a single unified API and beautiful dashboard.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/signup">
              <Button size="lg" className="min-w-[180px]">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" size="lg" className="min-w-[180px]">
                View docs
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-[#6b7c6e] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            $5 free credits · No credit card required
          </p>
        </div>
      </section>

      {/* Categories strip */}
      <section className="border-y border-[#1a2a1c] bg-[#0d1310]/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 py-8 sm:gap-10 sm:px-6">
          {categories.map((c) => (
            <div key={c.label} className="flex items-center gap-2.5 text-sm text-[#9ca3af]">
              <c.icon className="h-4 w-4 text-[#00ff9d]" />
              <span>{c.label}</span>
              <span className="rounded bg-[#00ff9d]/10 px-1.5 py-0.5 text-[10px] font-semibold text-[#00ff9d]">
                {c.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to ship AI
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[#9ca3af]">
            Designed for developers who want the best models without the integration headache.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-lift rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-6 animate-fade-in-up opacity-0"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00ff9d]/10 text-[#00ff9d]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-[#9ca3af]">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured models */}
      <section className="border-t border-[#1a2a1c] bg-[#0d1310]/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured models</h2>
              <p className="mt-2 text-[#9ca3af]">Top models available through Open Vibe right now.</p>
            </div>
            <Link href="/models">
              <Button variant="outline" size="sm">
                View all models
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m) => (
              <ModelCard key={m.id} model={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Code snippet */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              One request format.{" "}
              <span className="gradient-text">Any model.</span>
            </h2>
            <p className="mt-4 text-[#9ca3af] leading-relaxed">
              Change the model name and you&apos;re talking to a different provider. Same auth,
              same structure, same billing.
            </p>
            <Link href="/docs" className="mt-6 inline-block">
              <Button variant="outline">
                Read the docs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#1a2a1c] bg-[#0c120c] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[#1a2a1c] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs text-[#6b7c6e]">request.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed">
              <code className="text-[#9ca3af]">
                <span className="text-[#6b7c6e]">{"// Open Vibe unified API"}</span>
                {"\n"}
                <span className="text-sky-400">const</span> res = <span className="text-sky-400">await</span> fetch(
                {"\n"}
                {"  "}
                <span className="text-emerald-400">&quot;https://api.openvibe.ai/v1/chat&quot;</span>,
                {"\n"}
                {"  "}
                {"{"}
                {"\n"}
                {"    "}
                method: <span className="text-emerald-400">&quot;POST&quot;</span>,
                {"\n"}
                {"    "}
                headers: {"{"}
                {"\n"}
                {"      "}
                Authorization: <span className="text-emerald-400">&quot;Bearer ov_live_…&quot;</span>,
                {"\n"}
                {"      "}
                <span className="text-emerald-400">&quot;Content-Type&quot;</span>: <span className="text-emerald-400">&quot;application/json&quot;</span>,
                {"\n"}
                {"    "}
                {"}"},
                {"\n"}
                {"    "}
                body: JSON.stringify({"{"}
                {"\n"}
                {"      "}
                model: <span className="text-emerald-400">&quot;claude-3-5-sonnet&quot;</span>,
                {"\n"}
                {"      "}
                messages: [{"{"} role: <span className="text-emerald-400">&quot;user&quot;</span>, content: <span className="text-emerald-400">&quot;Hello!&quot;</span> {"}"}],
                {"\n"}
                {"    "}
                {"}"}),
                {"\n"}
                {"  "}
                {"}"}
                {"\n"}
                );
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#1a2a1c]">
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-96 rounded-full bg-[#00ff9d]/[0.06] blur-[80px]" />
          </div>
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-[#9ca3af]">
            Create an account, grab your API key, and start calling models in under a minute.
          </p>
          <div className="relative mt-8">
            <Link href="/signup">
              <Button size="lg">
                Get $5 free credits
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
