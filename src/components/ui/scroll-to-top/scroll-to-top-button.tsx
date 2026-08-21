"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ScrollToTopButtonProps {
  /**
   * Additional CSS classes to merge with the outer container
   */
  className?: string;
  /**
   * Scroll distance in pixels before the button appears. Default is 250.
   */
  threshold?: number;
}

export function ScrollToTopButton({
  className,
  threshold = 250,
}: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      // Throttle scroll events to browser animation frames for 60/120fps smoothness
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        const shouldBeVisible = window.scrollY > threshold;
        setIsVisible((prev) => (prev !== shouldBeVisible ? shouldBeVisible : prev));
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  const scrollToTop = React.useCallback(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      aria-hidden={!isVisible}
      className={cn(
        "fixed bottom-10 right-10 z-50 hidden md:flex items-center justify-center",
        "transform-gpu will-change-transform transition-all duration-300 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none",
        className
      )}
    >
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={scrollToTop}
        tabIndex={isVisible ? 0 : -1}
        aria-label="Scroll to top"
        className="size-10 rounded-full shadow-md bg-background/85 backdrop-blur-md border-border hover:bg-accent hover:text-accent-foreground cursor-pointer transition-all duration-200"
      >
        <ArrowUp className="size-5" />
      </Button>
    </div>
  );
}

export default ScrollToTopButton;
