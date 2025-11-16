"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { JournalModalProps } from "@/lib/interface/journal-modal-props";

export default function JournalModal({
  open,
  posts,
  currentIndex,
  onClose,
}: JournalModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(selectedIndex);
  }, [emblaApi, selectedIndex]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Carousel */}
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Prev */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="col-span-1 text-4xl font-light text-white opacity-70 hover:opacity-100 transition"
          >
            ‹
          </button>

          {/* Images */}
          <div className="col-span-10">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {posts.map((post) => (
                  <div key={post.src} className="embla__slide flex justify-center">
                    <div className="relative w-full h-[450px]">
                      <Image src={post.src} alt={post.alt} fill className="object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="col-span-1 text-4xl font-light text-white opacity-70 hover:opacity-100 transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {posts.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === selectedIndex ? "bg-primary" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
