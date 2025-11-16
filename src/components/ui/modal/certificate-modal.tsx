"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { CertificatesProps } from "@/lib/interface/certificate-props";

export function CertificateModal({ certificates }: { certificates: CertificatesProps[] }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(currentIndex);
  }, [emblaApi, currentIndex]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {certificates.map((cert, i) => (
          <div key={i} onClick={() => openModal(i)} className="cursor-pointer group">
            <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden border border-border">
              <Image
                src={cert.img}
                alt={cert.title}
                fill
                className="object-contain p-4 transition duration-200 group-hover:scale-102"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CUSTOM OVERLAY MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setOpen(false)} // click outside closes
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            {/* Prev/Next + Carousel */}
            <div className="grid grid-cols-12 gap-4 items-center">

              {/* prev Button */}
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="col-span-1 text-4xl font-light text-white opacity-70 hover:opacity-100 transition"
              >
                ‹
              </button>

              {/* Carousel */}
              <div className="col-span-10">
                <div className="embla__viewport" ref={emblaRef}>
                  <div className="embla__container">
                    {certificates.map((cert, i) => (
                      <div key={i} className="embla__slide flex justify-center">
                        <div className="relative w-full h-[450px]">
                          <Image src={cert.img} alt={cert.title} fill className="object-contain" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* next button */}
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="col-span-1 text-4xl font-light text-white opacity-70 hover:opacity-100 transition"
              >
                ›
              </button>
            </div>

            {/* dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === currentIndex
                      ? "bg-primary"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            {/* close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
