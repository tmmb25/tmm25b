import React, { useState, useCallback } from "react";
import { galleryImages } from "../data/gallery";

const Gallery: React.FC = () => {
  const [images] = useState(galleryImages);
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c < images.length - 1 ? c + 1 : 0));
  }, [images.length]);

  const onDragStart = (x: number) => {
    setDragging(true);
    setStartX(x);
  };

  const onDragEnd = (x: number) => {
    if (!dragging) return;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setDragging(false);
  };

  // ── Kosong state ───────────────────────────────────────────────
  if (images.length === 0) {
    return (
      <div className="w-full h-72 md:h-[26rem] rounded-3xl border border-dashed border-[#0a1628]/15 flex flex-col items-center justify-center gap-4 bg-white/60">
        <div className="w-14 h-14 rounded-full bg-[#0a1628]/5 flex items-center justify-center">
          <svg
            className="w-7 h-7 text-[#0a1628]/25"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="text-center space-y-1">
          <p className="text-[#0a1628]/40 text-sm font-light tracking-widest uppercase">
            Foto Kenangan
          </p>
          <p className="text-[#0a1628]/25 text-xs font-mono">
            Belum ada foto — tambahkan di <code>src/data/gallery.ts</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* ── Main Slider ───────────────────────────────────────── */}
      <div
        className="relative w-full h-72 md:h-[32rem] rounded-3xl overflow-hidden select-none bg-[#0a1628] cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
      >
        <img
          src={images[current]?.src}
          alt={images[current]?.caption}
          className="w-full h-full object-cover transition-opacity duration-500"
          draggable={false}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

        {/* Caption */}
        {images[current]?.caption && (
          <div className="absolute bottom-6 left-6 right-20">
            <p className="text-white/90 text-sm font-light tracking-wider leading-relaxed">
              {images[current].caption}
            </p>
          </div>
        )}

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white/80 text-xs font-mono">
            {current + 1} / {images.length}
          </span>
        </div>

        {/* Nav Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnail Strip ───────────────────────────────────── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setCurrent(idx)}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                idx === current
                  ? "border-[#0a1628] opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Dot indicators (mobile) ───────────────────────────── */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 md:hidden">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-200 ${
                idx === current
                  ? "w-6 h-1.5 bg-[#0a1628]"
                  : "w-1.5 h-1.5 bg-[#0a1628]/25"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
