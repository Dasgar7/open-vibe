import Link from "next/link";
import { Check } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { pricingTiers } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <MarketingNav />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[#9ca3af]">
            Start free. Scale with usage. Upgrade when you need priority and team features.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6 sm:p-8",
                tier.highlighted
                  ? "border-[#00ff9d]/40 bg-[#0f1610] glow-accent"
                  : "border-[#1a2a1c] bg-[#0f1610]"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00ff9d] to-[#10b981] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0a0f0a]">
                  Most popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-sm text-[#6b7c6e]">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-[#9ca3af]">{tier.description}</p>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00ff9d]" />
                    <span className="text-[#c5d0c5]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="block">
                <Button
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-8 text-center">
          <h3 className="text-xl font-semibold">Need a custom plan?</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#9ca3af]">
            High-volume usage, dedicated capacity, or enterprise SSO — we&apos;ll work with you.
          </p>
          <Link href="#" className="mt-5 inline-block">
            <Button variant="secondary">Contact sales</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
