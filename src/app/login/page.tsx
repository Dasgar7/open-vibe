"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-64 w-96 -translate-x-1/2 rounded-full bg-[#00ff9d]/[0.06] blur-[100px]" />
      </div>
      <div className="relative w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo size="lg" />
        </div>
        <div className="rounded-2xl border border-[#1a2a1c] bg-[#0f1610] p-8 shadow-2xl">
          <h1 className="mb-1 text-center text-2xl font-bold">Welcome back</h1>
          <p className="mb-6 text-center text-sm text-[#9ca3af]">
            Sign in to your Open Vibe account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-[#9ca3af]">Email</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-[#1a2a1c] bg-[#0a0f0a] px-4 py-2.5 text-sm placeholder:text-[#6b7c6e]"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-[#9ca3af]">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#1a2a1c] bg-[#0a0f0a] px-4 py-2.5 text-sm placeholder:text-[#6b7c6e]"
              />
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#9ca3af]">
                <input type="checkbox" className="rounded border-[#1a2a1c]" />
                Remember me
              </label>
              <Link href="#" className="text-[#00ff9d] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#1a2a1c]" />
            <span className="text-xs text-[#6b7c6e]">or continue with</span>
            <div className="h-px flex-1 bg-[#1a2a1c]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="secondary"
              type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full"
            >
              Google
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full"
            >
              GitHub
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-[#6b7c6e]">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-[#00ff9d] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
