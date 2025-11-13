'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Calendar() {
  const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Kasım 2025</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">Bugün</Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {days.map((day) => (
            <div key={day} className="text-center font-medium text-sm text-gray-500">
              {day}
            </div>
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
            >
              <div className="text-sm font-medium">{i + 1}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
