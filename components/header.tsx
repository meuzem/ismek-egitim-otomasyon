"use client"

import { Bell, RefreshCw, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const handleSync = () => {
    // Will be connected to Google Sheets API
    console.log("Syncing with Google Sheets...")
  }

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={handleSync}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Senkronize Et
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
