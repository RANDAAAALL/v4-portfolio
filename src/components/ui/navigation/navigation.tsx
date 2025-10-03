"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation } from "@/lib/values/navigation"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground border-l-2 border-primary pl-4 -ml-4"
              : "text-muted-foreground pl-0",
          )}
        >
          {item.name.toUpperCase()}
        </Link>
      ))}
    </nav>
  )
}
