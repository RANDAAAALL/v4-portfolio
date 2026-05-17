import { CarouselKeyboardNavigationProps } from "@/lib/interface/carousel-keyboard-navigation-props";
import { useEffect } from "react";

export function useCarouselKeyboardNavigation(
  emblaApi: CarouselKeyboardNavigationProps | undefined | null,
  isOpen: boolean
) {
  useEffect(() => {
    if (!isOpen || !emblaApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, isOpen]);
}
