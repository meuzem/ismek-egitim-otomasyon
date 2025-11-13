import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  { action: "Yeni eğitim eklendi", item: "Drone Fotoğrafçılığı 1", time: "2 saat önce" },
  { action: "Çekim tamamlandı", item: "Temel Resim 101", time: "5 saat önce" },
  { action: "Montaj başladı", item: "Dijital İllustrasyon", time: "1 gün önce" },
  { action: "Yayınlandı", item: "Topraksız Tarım", time: "2 gün önce" },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Son Aktiviteler</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.item}</p>
              </div>
              <span className="text-xs text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
