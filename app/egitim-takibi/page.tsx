import { EgitimTable } from "@/components/egitim-takibi/egitim-table"

export default function EgitimTakibiPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eğitim Takibi</h1>
        <p className="text-muted-foreground">
          Tüm eğitimleri görüntüleyin ve yönetin
        </p>
      </div>

      <EgitimTable />
    </div>
  )
}
