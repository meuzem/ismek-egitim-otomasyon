'use client'

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

const mockData = [
  {
    id: "1",
    egitimAdi: "Kültürel Mirasımız: Adana",
    videoAdi: "Adana Kebap",
    cekimTarihi: "01.10.2025",
    onCekim: true,
    izlence: true,
    isik: true,
    fotografCekimleri: true,
    kontroller: true,
    tasnif: true,
    dipSesTemizligi: true,
    cekimTamamlandi: false,
    synologyKaydedildi: false,
  },
]

export function CekimTable() {
  const calculateProgress = (item: typeof mockData[0]) => {
    const checks = [
      item.onCekim,
      item.izlence,
      item.isik,
      item.fotografCekimleri,
      item.kontroller,
      item.tasnif,
      item.dipSesTemizligi,
      item.cekimTamamlandi,
      item.synologyKaydedildi,
    ]
    const completed = checks.filter(Boolean).length
    return Math.round((completed / checks.length) * 100)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          {mockData.map((item) => {
            const progress = calculateProgress(item)
            return (
              <div key={item.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{item.egitimAdi}</h3>
                    <p className="text-sm text-muted-foreground">{item.videoAdi}</p>
                    <p className="text-xs text-muted-foreground mt-1">Çekim: {item.cekimTarihi}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{progress}%</div>
                    <div className="text-xs text-muted-foreground">Tamamlandı</div>
                  </div>
                </div>

                <div className="h-2 bg-gray-200 rounded-full mb-4">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: \`\${progress}%\` }}
                  />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[
                    { label: "Ön Çekim", checked: item.onCekim },
                    { label: "İzlence", checked: item.izlence },
                    { label: "Işık", checked: item.isik },
                    { label: "Fotoğraf", checked: item.fotografCekimleri },
                    { label: "Kontroller", checked: item.kontroller },
                    { label: "Tasnif", checked: item.tasnif },
                    { label: "Dip Ses", checked: item.dipSesTemizligi },
                    { label: "Tamamlandı", checked: item.cekimTamamlandi },
                    { label: "Synology", checked: item.synologyKaydedildi },
                  ].map((check, i) => (
                    <div key={i} className="flex items-center gap-2">
                      {check.checked ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Circle className="h-4 w-4 text-gray-300" />
                      )}
                      <span className="text-xs">{check.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
