"use client"
import { useEffect, useState, useCallback } from "react";

interface PhotoGalleryProps {
  images: string[];
  alt?: string;
}

const PhotoGallery = ({ images, alt = "Foto" }: PhotoGalleryProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const goNext = useCallback(() => {
    setOpenIndex((prev) => {
      if (prev === null) {
        return prev;
      }
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, goPrev, goNext]);

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Ver ${alt} ${i + 1} en grande`}
            className="shrink-0 snap-start rounded-lg overflow-hidden shadow hover:shadow-lg transition-transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              className="h-32 w-32 md:h-40 md:w-40 object-cover block"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={close}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
              >
                ›
              </button>
            </>
          )}

          <img
            src={images[openIndex]}
            alt={`${alt} ${openIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded shadow-2xl"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {openIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
