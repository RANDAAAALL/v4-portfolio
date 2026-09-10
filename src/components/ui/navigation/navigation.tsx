"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/values/navigation";

export function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="portfolio-nav">
      {navigation.map(({ name, href }) => {
        const active = href === "/" ? pathname === href : pathname.startsWith(href);
        return <Link key={href} href={href} aria-current={active ? "page" : undefined}>{name.toLowerCase()}</Link>;
      })}
    </nav>
  );
}
