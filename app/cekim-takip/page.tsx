import { CekimTable } from "@/components/cekim-takip/cekim-table"

export default function CekimTakipPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Çekim Takip</h1>
        <p className="text-muted-foreground">
          Çekim süreçlerini detaylı takip edin
        </p>
      </div>

      <CekimTable />
    </div>
  )
}
