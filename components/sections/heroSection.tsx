"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides, GetRecomData } from "@/data/heroSection";
import { Caveat } from "next/font/google";
import BrandoCarousel from "../layout/brandCarousel";

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

const transitionDuration = 700; // must match "duration-700" in Tailwind (ms)

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // start at real first (with cloned edges)
  const [isAnimating, setIsAnimating] = useState(false); // true while a slide animation is running
  const [disableTransition, setDisableTransition] = useState(true); // used for instantaneous clone-jump and initial mount
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef<HTMLDivElement | null>(null);

  // extended slides for infinite effect
  const extendedSlides = [
    heroSlides[heroSlides.length - 1],
    ...heroSlides,
    heroSlides[0],
  ];

  // enable transitions after mount (avoid initial animated jump)
  useEffect(() => {
    const t = setTimeout(() => setDisableTransition(false), 20);
    return () => clearTimeout(t);
  }, []);

  const showNextSlide = () => {
    if (isAnimating) return; // prevent triggering while already animating
    setIsAnimating(true);
    setDisableTransition(false); // ensure transitions enabled for normal slide movement
    setCurrentIndex((p) => p + 1);
  };

  const showPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDisableTransition(false);
    setCurrentIndex((p) => p - 1);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDisableTransition(false);
    setCurrentIndex(index + 1); // +1 due to cloned first element
  };

  // autoplay: only move when not animating and not paused
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      if (!isAnimating && !isPaused) showNextSlide();
    }, 4000);
    return () => clearInterval(id);
  }, [isAnimating, isPaused]);

  // robust transitionend handler + fallback (handles backgrounded tabs)
  useEffect(() => {
    const slider = slideRef.current;
    if (!slider) return;

    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const onTransitionEnd = (ev?: TransitionEvent) => {
      // if we weren't animating, ignore (protective)
      if (!isAnimating) return;

      // If we landed on cloned slide, instantly jump to the real one without animation
      if (currentIndex === extendedSlides.length - 1) {
        // jumped to the final cloned slide (clone of first)
        setDisableTransition(true);
        setCurrentIndex(1); // real first
      } else if (currentIndex === 0) {
        // jumped to the starting cloned slide (clone of last)
        setDisableTransition(true);
        setCurrentIndex(heroSlides.length); // real last
      }

      // finalize animation state after tiny delay so DOM updates settle
      setTimeout(() => {
        setIsAnimating(false);
        // re-enable transitions for subsequent interactions
        setDisableTransition(false);
      }, 20);

      if (fallbackTimer) {
        clearTimeout(fallbackTimer);
        fallbackTimer = null;
      }
    };

    // Listen for transitionend
    slider.addEventListener("transitionend", onTransitionEnd);

    // Fallback: if transitionend never fires (tab hidden/throttled), call handler anyway
    fallbackTimer = setTimeout(() => {
      onTransitionEnd();
    }, transitionDuration + 250);

    return () => {
      slider.removeEventListener("transitionend", onTransitionEnd);
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [currentIndex, extendedSlides.length, isAnimating]);

  // Pause autoplay when tab hidden (optional, avoids throttling problems)
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const getActualSlideIndex = () => {
    if (currentIndex === 0) return heroSlides.length - 1;
    if (currentIndex === extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides wrapper */}
      <div
        ref={slideRef}
        className={`flex ${disableTransition ? "transition-none" : "transition-transform duration-700 ease-in-out"}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={idx}
            className="relative flex flex-col lg:flex-row w-full flex-shrink-0 px-4 sm:px-8 lg:px-[60px] 2xl:px-[120px] py-8 sm:py-10 lg:py-0 lg:items-center"
          >
            {/* Arrow buttons - hidden on mobile, visible on desktop */}
            <button
              onClick={showPrevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-2 2xl:left-16 sm:left-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white hover:shadow-md transition duration-200 ease-in-out hidden lg:flex"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000]" />
            </button>
            <button
              onClick={showNextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-2 2xl:right-16 sm:right-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white hover:shadow-md transition duration-200 ease-in-out hidden lg:flex"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000]" />
            </button>

            {/* Left content */}
            <div className="flex flex-col items-center justify-center lg:items-start gap-2 lg:gap-2.5 w-full lg:w-1/2">
              <div className="w-full">
                <h1 className="font-bold text-[#FF0000] text-[clamp(1.5rem,4vw,2.5rem)]">
                  {slide.title}
                </h1>
                <h2 className="text-[#192839] text-[clamp(1rem,2.5vw,2rem)]">
                  {slide.subtitle}
                </h2>
                <p className="text-[#40566D] max-w-md text-[clamp(0.85rem,2vw,1.125rem)]">
                  {slide.description}
                </p>
              </div>
              <div className="flex justify-start  items-center gap-3 lg:gap-4 w-full">
                <Link
                  href="/loginSignup"
                  className="bg-red-600 text-white flex items-center font-semibold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] gap-2 hover:bg-red-700 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]"
                >
                  {slide.ctaText}
                  <ArrowRight size={16} />
                </Link>
                <button className="text-[#FF0000] hover:text-red-600 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]">
                  {slide.secondaryText}
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="relative flex justify-center lg:justify-start items-center w-full lg:w-1/2 mt-6 lg:mt-0">
              <Image
                src="/svg/geometric-patter-1.svg"
                alt="Background pattern"
                fill
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none "
              />

              <div className="relative flex flex-row-reverse lg:flex-row items-end -space-x-8">
                <div className="">
                  <Image
                    src={slide.personImage}
                    alt={slide.personName}
                    width={400}
                    height={400}
                    className="relative z-10 w-[clamp(14.5rem,22vw,21rem)] object-contain"
                  />
                  <p
                    className={`${caveat.className} absolute bottom-0 left-0 lg:left-1/2 0 mt-2 font-medium text-gray-700 z-20 text-[clamp(2rem,4vw,2.5rem)]`}
                  >
                    {slide.personName}
                  </p>
                </div>

                <div className="relative w-[clamp(11rem,20vw,18rem)] aspect-[4/5] rounded-sm  overflow-hidden shadow-lg flex flex-col justify-between z-1 lg:self-center self-center left-1/6 lg:left-0">
                  <div className="px-2 sm:px-3 py-2 bg-gray-700">
                    <h1 className="text-white font-bold text-center text-[clamp(0.8rem,1.4vw,1.1rem)]">
                      {slide.personProdText}
                    </h1>
                    <p className="text-white text-[clamp(0.6rem,1vw,0.9rem)]">
                      POWERS <span className="font-medium">{slide.personPower}</span>
                    </p>
                  </div>
                  <div className="bg-white flex-1 flex justify-center items-center">
                    <Image
                      src="/svg/image-placeholder.svg"
                      alt="placeholder"
                      width={200}
                      height={200}
                      className="w-2/3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots - visible only on mobile */}
      <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              getActualSlideIndex() === index
                ? "bg-[#FF0000] w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="overlap-container 2xl:px-30 lg:px-[60px] hidden xl:block ">
        <div className="get-recommendation flex items-center justify-around bg-white lg:px-6 lg:py-4 rounded-[6px] gap-[12px]">
          {GetRecomData.map((item, index) => (
            <div
              key={index}
              className={`flex items-center  ${
                index === 0
                  ? " gap-[10px] mr-[20px]"
                  : "gap-[5px] rounded-[50px] px-[8px] py-1.5 bg-[#FFEEEE] flex-nowrap "
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
                className={` ${index === 0 ? "size-5" : "size-4 "}`}
              />
              <p
                className={` font-medium ${
                  index === 0
                    ? "text-[#192839] font-bold text-[14px]"
                    : "text-[#FF0000] text-[clamp(0.63rem,2vw,.75rem)] px-2"
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BrandoCarousel />
    </section>
  );
};

export default HeroSection;
