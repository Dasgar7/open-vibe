export const usageStats = {
  creditsRemaining: 847.32,
  creditsUsed: 152.68,
  totalCredits: 1000,
  requestsThisMonth: 1284,
  tokensThisMonth: 4_820_000,
  costThisMonth: 152.68,
};

export const usageByModel = [
  { model: "Claude 3.5 Sonnet", requests: 412, cost: 48.2, tokens: 1_620_000 },
  { model: "GPT-4o", requests: 298, cost: 41.5, tokens: 980_000 },
  { model: "Gemini 2.0 Flash", requests: 256, cost: 12.4, tokens: 1_450_000 },
  { model: "FLUX.1 Pro", requests: 89, cost: 18.9, tokens: 0 },
  { model: "DeepSeek V3", requests: 142, cost: 9.8, tokens: 520_000 },
  { model: "ElevenLabs", requests: 67, cost: 14.3, tokens: 0 },
  { model: "Others", requests: 20, cost: 7.58, tokens: 250_000 },
];

export const dailyUsage = [
  { date: "Jul 1", requests: 42, cost: 5.2 },
  { date: "Jul 2", requests: 38, cost: 4.8 },
  { date: "Jul 3", requests: 55, cost: 7.1 },
  { date: "Jul 4", requests: 31, cost: 3.9 },
  { date: "Jul 5", requests: 67, cost: 9.4 },
  { date: "Jul 6", requests: 48, cost: 6.2 },
  { date: "Jul 7", requests: 72, cost: 11.0 },
  { date: "Jul 8", requests: 59, cost: 8.1 },
  { date: "Jul 9", requests: 44, cost: 5.6 },
  { date: "Jul 10", requests: 81, cost: 12.3 },
  { date: "Jul 11", requests: 63, cost: 9.0 },
  { date: "Jul 12", requests: 52, cost: 7.4 },
  { date: "Jul 13", requests: 70, cost: 10.2 },
  { date: "Jul 14", requests: 91, cost: 14.8 },
];

export const apiKeys = [
  {
    id: "key_1",
    name: "Production",
    key: "ov_live_sk_8f2a9c1e4b7d3f6a0e5c8b2d9a1f4e7c",
    created: "2026-06-12",
    lastUsed: "2 hours ago",
    status: "active" as const,
  },
  {
    id: "key_2",
    name: "Development",
    key: "ov_test_sk_3c7e1b9a5d2f8e4c0a6b9d3f7e1a5c8b",
    created: "2026-07-01",
    lastUsed: "Yesterday",
    status: "active" as const,
  },
  {
    id: "key_3",
    name: "Staging (old)",
    key: "ov_live_sk_1a4f8c2e6b9d3a7e0c5f8b2d6a9e3c7f",
    created: "2026-05-20",
    lastUsed: "3 weeks ago",
    status: "revoked" as const,
  },
];

export const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Explore the platform with free credits",
    features: [
      "$5 free credits on signup",
      "Access to all models",
      "100 requests / day",
      "Community support",
      "API + Dashboard access",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pay as you go",
    price: "Usage",
    period: "based",
    description: "Only pay for what you use. No commitments.",
    features: [
      "No monthly fee",
      "Top-up credits anytime",
      "Unlimited requests",
      "Email support",
      "Usage analytics",
      "Multiple API keys",
    ],
    cta: "Add credits",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/ month",
    description: "For teams and power users who need more.",
    features: [
      "$60 included credits / mo",
      "Priority routing",
      "Higher rate limits",
      "Team seats (5)",
      "Priority support",
      "Custom spend alerts",
      "SSO (coming soon)",
    ],
    cta: "Upgrade to Pro",
    highlighted: false,
  },
];
