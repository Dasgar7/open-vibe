import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="lg:pl-60">
        <div className="px-4 pb-12 pt-16 lg:px-8 lg:pt-8">{children}</div>
      </main>
    </div>
  );
}
