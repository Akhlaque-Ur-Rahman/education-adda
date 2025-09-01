"use client";

import { useState, useRef, useEffect } from "react";

const brands = [
  "/svg/brands/brand1.svg",
  "/svg/brands/brand2.svg",
  "/svg/brands/brand3.svg",
  "/svg/brands/jmi.svg",
  "/svg/brands/brand4.svg",
  "/svg/brands/amu.svg",
  "/svg/brands/brand6.svg",
];

export default function BrandCarousel() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // ✅ Auto-scroll only
  useEffect(() => {
    if (paused) return;

    const track = trackRef.current;
    if (!track) return;

    const scrollStep = 1; // speed
    const interval = setInterval(() => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0; // seamless loop
      } else {
        track.scrollLeft += scrollStep;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <div
      className="relative w-full overflow-hidden p-6 sm:p-10 md:p-[60px] "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Left Fade + Shadow */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 md:w-32 
        z-10"></div>

      {/* Right Fade + Shadow */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 md:w-32 
         z-10"></div>

      {/* Track */}
      <div ref={trackRef} className="flex items-center gap-6 sm:gap-8 overflow-hidden select-none">
        {[...brands, ...brands].map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-20 sm:w-28 md:w-40 lg:w-56 flex items-center justify-center transition-transform duration-300"
          >
            <img
              src={src}
              alt={`brand-${idx}`}
              className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 object-contain hover:cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
