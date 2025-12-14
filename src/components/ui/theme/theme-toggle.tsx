"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

export function ThemeToggle({style, iconStyle} : ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <div
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx(style, `cursor-pointer`)}
    >
      {theme === "dark" ? <Sun className={clsx(iconStyle, "transition-all")} /> : <Moon className={clsx(iconStyle, "transition-all")} />}
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}
