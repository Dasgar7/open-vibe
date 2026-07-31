import { MarketingNav } from "@/components/marketing-nav";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <MarketingNav />
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">Documentation</h1>
        <p className="mb-10 text-[#9ca3af]">
          Everything you need to integrate Open Vibe into your application.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          <Link
            href="/playground"
            className="card-lift rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5"
          >
            <h3 className="font-semibold text-[#00ff9d]">Playground</h3>
            <p className="mt-1 text-sm text-[#9ca3af]">
              Test any model interactively in the browser.
            </p>
          </Link>
          <a
            href="#quickstart"
            className="card-lift rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-5"
          >
            <h3 className="font-semibold">Quickstart</h3>
            <p className="mt-1 text-sm text-[#9ca3af]">Make your first API call in under a minute.</p>
          </a>
        </div>

        <article className="prose-invert space-y-10">
          <section id="quickstart">
            <h2 className="mb-3 text-xl font-semibold">Quickstart</h2>
            <p className="mb-4 text-sm leading-relaxed text-[#9ca3af]">
              After signing up, create an API key from the dashboard. Then send a request:
            </p>
            <pre className="overflow-x-auto rounded-2xl border border-[#1a2a1c] bg-[#0c120c] p-5 text-[13px] leading-relaxed text-[#9ca3af]">
              <code>{`curl https://api.openvibe.ai/v1/chat \\
  -H "Authorization: Bearer ov_live_sk_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-3-5-sonnet",
    "messages": [
      {"role": "user", "content": "Explain quantum computing in one sentence."}
    ]
  }'`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Authentication</h2>
            <p className="text-sm leading-relaxed text-[#9ca3af]">
              All requests require a Bearer token in the Authorization header. Keys start with{" "}
              <code className="rounded bg-[#131c14] px-1.5 py-0.5 text-[#00ff9d]">ov_live_</code>{" "}
              for production or{" "}
              <code className="rounded bg-[#131c14] px-1.5 py-0.5 text-[#00ff9d]">ov_test_</code> for
              development.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Chat completions</h2>
            <p className="mb-3 text-sm text-[#9ca3af]">
              <code className="text-[#00ff9d]">POST /v1/chat</code>
            </p>
            <pre className="overflow-x-auto rounded-2xl border border-[#1a2a1c] bg-[#0c120c] p-5 text-[13px] text-[#9ca3af]">
              <code>{`{
  "model": "gpt-4o",
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  "temperature": 0.7,
  "max_tokens": 1024
}`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Image generation</h2>
            <p className="mb-3 text-sm text-[#9ca3af]">
              <code className="text-[#00ff9d]">POST /v1/images</code>
            </p>
            <pre className="overflow-x-auto rounded-2xl border border-[#1a2a1c] bg-[#0c120c] p-5 text-[13px] text-[#9ca3af]">
              <code>{`{
  "model": "flux-pro",
  "prompt": "A serene mountain lake at dawn, cinematic lighting",
  "size": "1024x1024",
  "n": 1
}`}</code>
            </pre>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Available models</h2>
            <p className="mb-4 text-sm text-[#9ca3af]">
              Pass the model <code className="text-[#00ff9d]">id</code> from the catalog. Full list
              available on the Models page and via{" "}
              <code className="text-[#00ff9d]">GET /v1/models</code>.
            </p>
            <Link href="/models">
              <Button variant="outline" size="sm">
                Browse model catalog
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold">Rate limits & errors</h2>
            <p className="text-sm leading-relaxed text-[#9ca3af]">
              Free tier: 100 requests/day. Paid: higher limits based on plan. Errors follow standard
              HTTP status codes with a JSON body containing{" "}
              <code className="text-[#00ff9d]">error.message</code> and{" "}
              <code className="text-[#00ff9d]">error.type</code>.
            </p>
          </section>
        </article>
      </div>
      <Footer />
    </div>
  );
}
