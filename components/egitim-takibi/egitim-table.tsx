'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { statusColors } from "@/types"

const mockData = [
  {
    id: "1",
    dal: "Güzel Sanatlar",
    alan: "Sanat ve Tasarím",
    bolum: "Fotoğraf",
    egitim: "Drone Fotoğrafçılığı 1",
    egitmen: "Bülent Eren",
    durum: "Montaj Sırasında",
    icerikBaslamaTarihi: "02.10.2025",
    notlar: "Toplantı yapıldı"
  },
  {
    id: "2",
    dal: "El Sanatları",
    alan: "Kuyumculuk",
    bolum: "Takı Tasarımı",
    egitim: "Peyote Tenniği",
    egitmen: "Nihal Men",
    durum: "ID Bekliyor",
    icerikBaslamaTarihi: "07.04.2025",
    notlar: "Eğitmen bekleniyor"
  },
]

export function EgitimTable() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Ara..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtrele
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dal</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Eğitim</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">EƟitmen</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Durum</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tarih</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 text-sm">{item.dal}</td>
                  <td className="px-4 py-3 text-sm">{item.alan}</td>
                  <td className="px-4 py-3 text-sm font-medium">{item.egitim}</td>
                  <td className="px-4 py-3 text-sm">{item.egitmen}</td>
                  <td className="px-4 py-3">
                    <span className={"px-2 py-1 text-xs font-medium rounded-full " + (statusColors[item.durum as keyof typeof statusColors] || "")}>
                      {item.durum}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{item.icerikBaslamaTarihi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
