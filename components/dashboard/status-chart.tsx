import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatusChart() {
  const statuses = [
    { name: "Çekim Bekliyor", count: 23, color: "bg-blue-500" },
    { name: "Montaj Sırasında", count: 15, color: "bg-purple-500" },
    { name: "İçerik Hazırlanıyor", count: 31, color: "bg-orange-500" },
    { name: "Tamamlandı", count: 89, color: "bg-green-500" },
  ]

  const total = statuses.reduce((sum, s) => sum + s.count, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Durum Dağılımı</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {statuses.map((status) => (
            <div key={status.name}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{status.name}</span>
                <span className="text-sm text-muted-foreground">{status.count}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${status.color}`}
                  style={{ width: `${(status.count / total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
