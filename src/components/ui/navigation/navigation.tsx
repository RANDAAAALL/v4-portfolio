"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "@/lib/values/navigation"

export function Navigation() {
  const pathname = usePathname()

  // mobile screen: split first 2 and rest
  const topItems = navigation.slice(0, 2)
  const bottomItems = navigation.slice(2)

  return (
    <nav className="space-y-1 md:space-y-0">
      {/* top row */}
      <div className="flex justify-center md:justify-start  md:ml-0 space-x-2 md:flex-col md:space-y-1">
        {topItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
                ? `text-foreground md:border-l-2 border-primary md:pl-4 md:-ml-4`
                : "text-muted-foreground pl-0"
            )}
          >
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* bottom row */}
      <div className="flex justify-center md:justify-start space-x-2 md:flex-col md:space-y-1">
        {bottomItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === item.href
              ? `text-foreground md:border-l-2 border-primary md:pl-4 md:-ml-4`
                : "text-muted-foreground pl-0"
            )}
          >
            {item.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  )
}
