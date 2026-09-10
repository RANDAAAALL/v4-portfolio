"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function isPastHeader() {
  return window.scrollY > 200;
}

function serverSnapshot() {
  return false;
}

export function ScrollToTopButton() {
  const pathname = usePathname();
  const isScrolled = useSyncExternalStore(subscribeToScroll, isPastHeader, serverSnapshot);
  const isSupportedPage = ["/projects", "/certificates", "/journal", "/tech-stack"].includes(pathname)
    || pathname.startsWith("/journal/");

  if (!isSupportedPage || !isScrolled) return null;

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={() => {
        document.getElementById("portfolio-name")?.focus({ preventScroll: true });
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }}
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
