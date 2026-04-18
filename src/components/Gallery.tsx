import React, { useState, useCallback, useEffect, useRef } from "react";
import { galleryImages } from "../data/gallery";

const Gallery: React.FC = () => {
  const [images] = useState(galleryImages);
  const [current, setCurrent] = useState(0);

  // ── Slider drag state ──────────────────────────────────────
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const movedRef = useRef(false);

  // ── Lightbox state ─────────────────────────────────────────
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // ── Zoom & Pan state ───────────────────────────────────────
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const panStartRef = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const [smoothTransition, setSmoothTransition] = useState(true);

  const MIN_ZOOM = 1;
  const MAX_ZOOM = 5;
  const ZOOM_STEP = 0.5;

  // ── Navigation ─────────────────────────────────────────────
  const prev = useCallback(() => {
    setCurrent((c) => (c > 0 ? c - 1 : images.length - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c < images.length - 1 ? c + 1 : 0));
  }, [images.length]);

  // ── Zoom helpers ───────────────────────────────────────────
  const resetZoom = useCallback(() => {
    setSmoothTransition(true);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setSmoothTransition(true);
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setSmoothTransition(true);
    setZoom((z) => {
      const newZoom = Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2));
      if (newZoom === 1) setPan({ x: 0, y: 0 });
      return newZoom;
    });
  }, []);

  // ── Slider drag (untuk swipe ganti foto) ───────────────────
  const onSliderDragStart = (x: number) => {
    setDragging(true);
    setStartX(x);
    movedRef.current = false;
  };

  const onSliderDragMove = (x: number) => {
    if (!dragging) return;
    if (Math.abs(startX - x) > 5) movedRef.current = true;
  };

  const onSliderDragEnd = (x: number) => {
    if (!dragging) return;
    const diff = startX - x;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setDragging(false);
  };

  const handleSliderClick = () => {
    // hanya buka lightbox kalau bukan hasil drag
    if (!movedRef.current) {
      setLightboxOpen(true);
    }
  };

  // ── Lightbox: navigation reset zoom ────────────────────────
  const lightboxPrev = useCallback(() => {
    resetZoom();
    prev();
  }, [prev, resetZoom]);

  const lightboxNext = useCallback(() => {
    resetZoom();
    next();
  }, [next, resetZoom]);

  // ── Pan / drag di dalam lightbox saat zoomed ──────────────
  const onPanStart = (x: number, y: number) => {
    if (zoom <= 1) return;
    setSmoothTransition(false);
    setIsPanning(true);
    panStartRef.current = { x, y, panX: pan.x, panY: pan.y };
  };

  const onPanMove = (x: number, y: number) => {
    if (!isPanning) return;
    const dx = x - panStartRef.current.x;
    const dy = y - panStartRef.current.y;
    setPan({
      x: panStartRef.current.panX + dx,
      y: panStartRef.current.panY + dy,
    });
  };

  const onPanEnd = () => {
    setIsPanning(false);
  };

  // ── Wheel zoom ────────────────────────────────────────────
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setSmoothTransition(false);
    if (e.deltaY < 0) {
      setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.2).toFixed(2)));
    } else {
      setZoom((z) => {
        const newZoom = Math.max(MIN_ZOOM, +(z - 0.2).toFixed(2));
        if (newZoom === 1) setPan({ x: 0, y: 0 });
        return newZoom;
      });
    }
  };

  // ── Double click zoom toggle ──────────────────────────────
  const handleDoubleClick = () => {
    setSmoothTransition(true);
    if (zoom === 1) {
      setZoom(2.5);
    } else {
      resetZoom();
    }
  };

  // ── Keyboard shortcuts & body scroll lock ─────────────────
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          setLightboxOpen(false);
          break;
        case "ArrowLeft":
          lightboxPrev();
          break;
        case "ArrowRight":
          lightboxNext();
          break;
        case "+":
        case "=":
          zoomIn();
          break;
        case "-":
        case "_":
          zoomOut();
          break;
        case "0":
          resetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, lightboxPrev, lightboxNext, zoomIn, zoomOut, resetZoom]);

  // Reset zoom saat lightbox ditutup
  useEffect(() => {
    if (!lightboxOpen) resetZoom();
  }, [lightboxOpen, resetZoom]);

  // ── Empty state ───────────────────────────────────────────
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

  const currentImage = images[current];

  return (
    <>
      <div className="w-full space-y-4">
        {/* ── Main Slider ─────────────────────────────────────── */}
        <div
          className="relative w-full h-72 md:h-[32rem] rounded-3xl overflow-hidden select-none bg-[#0a1628] cursor-zoom-in"
          onMouseDown={(e) => onSliderDragStart(e.clientX)}
          onMouseMove={(e) => onSliderDragMove(e.clientX)}
          onMouseUp={(e) => {
            onSliderDragEnd(e.clientX);
            handleSliderClick();
          }}
          onMouseLeave={() => setDragging(false)}
          onTouchStart={(e) => onSliderDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onSliderDragMove(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            onSliderDragEnd(e.changedTouches[0].clientX);
            handleSliderClick();
          }}
        >
          <img
            src={currentImage?.src}
            alt={currentImage?.caption}
            className="w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
            draggable={false}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent pointer-events-none" />

          {/* Caption */}
          {currentImage?.caption && (
            <div className="absolute bottom-6 left-6 right-20 pointer-events-none">
              <p className="text-white/90 text-sm font-light tracking-wider leading-relaxed">
                {currentImage.caption}
              </p>
            </div>
          )}

          {/* Counter */}
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 pointer-events-none">
            <span className="text-white/80 text-xs font-mono">
              {current + 1} / {images.length}
            </span>
          </div>

          {/* Hint "Klik untuk perbesar" */}
          <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 pointer-events-none">
            <svg
              className="w-3 h-3 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            <span className="text-white/70 text-[10px] font-mono uppercase tracking-wider">
              Klik untuk perbesar
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
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-all duration-200 z-10"
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
                onMouseDown={(e) => e.stopPropagation()}
                onMouseUp={(e) => e.stopPropagation()}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center transition-all duration-200 z-10"
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

        {/* ── Thumbnail Strip ─────────────────────────────────── */}
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

        {/* ── Dot indicators (mobile) ─────────────────────────── */}
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

      {/* ══════════════════════════════════════════════════════
          LIGHTBOX MODAL
      ══════════════════════════════════════════════════════ */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
          onWheel={handleWheel}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-20"
            aria-label="Tutup"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 z-20 pointer-events-none">
            <span className="text-white/90 text-sm font-mono">
              {current + 1} / {images.length}
            </span>
          </div>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxPrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-20"
              aria-label="Sebelumnya"
            >
              <svg
                className="w-6 h-6 text-white"
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
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                lightboxNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all z-20"
              aria-label="Berikutnya"
            >
              <svg
                className="w-6 h-6 text-white"
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
          )}

          {/* IMAGE CONTAINER */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => {
              e.stopPropagation();
              onPanStart(e.clientX, e.clientY);
            }}
            onMouseMove={(e) => onPanMove(e.clientX, e.clientY)}
            onMouseUp={onPanEnd}
            onMouseLeave={onPanEnd}
            onTouchStart={(e) =>
              onPanStart(e.touches[0].clientX, e.touches[0].clientY)
            }
            onTouchMove={(e) =>
              onPanMove(e.touches[0].clientX, e.touches[0].clientY)
            }
            onTouchEnd={onPanEnd}
            onDoubleClick={handleDoubleClick}
            style={{
              cursor:
                zoom > 1
                  ? isPanning
                    ? "grabbing"
                    : "grab"
                  : "zoom-in",
            }}
          >
            <img
              src={currentImage?.src}
              alt={currentImage?.caption}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg select-none"
              draggable={false}
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${
                  pan.y / zoom
                }px)`,
                transition: smoothTransition
                  ? "transform 0.25s ease-out"
                  : "none",
              }}
            />
          </div>

          {/* Caption */}
          {currentImage?.caption && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 max-w-[80vw] z-20 pointer-events-none">
              <p className="text-white/90 text-sm font-light tracking-wider text-center truncate">
                {currentImage.caption}
              </p>
            </div>
          )}

          {/* ZOOM TOOLBAR */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-2 py-2 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom out"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>

            <div className="px-3 min-w-[60px] text-center">
              <span className="text-white/90 text-xs font-mono">
                {Math.round(zoom * 100)}%
              </span>
            </div>

            <button
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              className="w-9 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Zoom in"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {zoom > 1 && (
              <>
                <div className="w-px h-5 bg-white/20 mx-1" />
                <button
                  onClick={resetZoom}
                  className="px-3 h-9 rounded-full hover:bg-white/15 flex items-center justify-center transition-all"
                  aria-label="Reset zoom"
                >
                  <span className="text-white/90 text-xs font-mono uppercase tracking-wider">
                    Reset
                  </span>
                </button>
              </>
            )}
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-6 right-6 hidden md:block pointer-events-none">
            <p className="text-white/40 text-[10px] font-mono tracking-wider">
              Scroll / +/− zoom · 0 reset · ESC tutup
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
