"use client"
import { useEffect, useState, useCallback, useRef } from "react";

interface PhotoGalleryProps {
  images: string[];
  alt?: string;
  autoPlayMs?: number;
}

const SWIPE_THRESHOLD_PX = 50;

const PhotoGallery = ({ images, alt = "Foto", autoPlayMs = 5000 }: PhotoGalleryProps) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number>(null);
  const touchDeltaX = useRef(0);

  const total = images.length;

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % total) + total) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || lightboxOpen || total < 2 || autoPlayMs <= 0) {
      return;
    }
    const id = window.setInterval(goNext, autoPlayMs);
    return () => window.clearInterval(id);
  }, [isPaused, lightboxOpen, total, autoPlayMs, goNext]);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxOpen(false);
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
  }, [lightboxOpen, goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD_PX) {
      if (touchDeltaX.current < 0) {
        goNext();
      } else {
        goPrev();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <>
      <div
        className="relative w-full max-w-sm mx-auto select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 aspect-[4/3]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={`Ampliar ${alt} ${i + 1}`}
                className="shrink-0 w-full h-full block cursor-zoom-in"
                tabIndex={i === current ? 0 : -1}
              >
                <img
                  src={src}
                  alt={`${alt} ${i + 1}`}
                  className="w-full h-full object-cover block pointer-events-none"
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
              </button>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Foto anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 cursor-pointer"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Foto siguiente"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 cursor-pointer"
              >
                ›
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir a foto ${i + 1}`}
                aria-current={i === current}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  i === current ? "w-6 bg-green-700" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
            aria-label="Cerrar"
            className="absolute top-4 right-4 text-white text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 cursor-pointer"
          >
            ×
          </button>

          {total > 1 && (
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
            src={images[current]}
            alt={`${alt} ${current + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded shadow-2xl"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {current + 1} / {total}
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
