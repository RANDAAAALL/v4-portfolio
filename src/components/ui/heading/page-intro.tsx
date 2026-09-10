"use client";

import { usePathname } from "next/navigation";

export function PageIntro({ pages }: { pages: Record<string, { title: string; description: string }> }) {
  const pathname = usePathname();
  const page = pages[pathname];
  if (!page) return null;

  return (
    <div className="page-intro">
      <h2 id="page-title" className="sr-only">{page.title}</h2>
      <p>{page.description}</p>
    </div>
  );
}
