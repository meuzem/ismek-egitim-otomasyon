import { Calendar } from "@/components/studyo-takvimi/calendar"

export default function StudyoTakvimiPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Stüdyo Çekim Takvimi</h1>
        <p className="text-muted-foreground">
          Çekim programlarını görüntüleyin ve planlayın
        </p>
      </div>

      <Calendar />
    </div>
  )
}
