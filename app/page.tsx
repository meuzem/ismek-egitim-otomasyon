import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StatusChart } from "@/components/dashboard/status-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          İSMEK Uzaktan Eğitim ve Stüdyo Yönetim Sistemi
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-6 md:grid-cols-2">
        <StatusChart />
        <RecentActivity />
      </div>
    </div>
  )
}
