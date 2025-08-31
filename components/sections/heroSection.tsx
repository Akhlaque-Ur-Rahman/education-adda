"use client";
import React, { useState } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/data/heroSection";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextSlide = () => {
    setCurrentIndex((i) => (i === heroSlides.length - 1 ? 0 : i + 1));
  };

  const showPrevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? heroSlides.length - 1 : i - 1));
  };

  return (
    <section className="relative overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col lg:flex-row w-full flex-shrink-0 px-4 sm:px-8 lg:px-[60px] 2xl:px-[120px] py-8 sm:py-10 lg:py-0 lg:items-center"
          >
            {/* Left content */}
            <div className="flex flex-col items-center lg:items-start justify-start gap-2 lg:gap-6 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="font-bold text-[#FF0000] text-[clamp(1.5rem,4vw,2.5rem)]">
                {slide.title}
              </h1>
              <h2 className="text-[#192839] text-[clamp(1rem,2.5vw,2rem)]">
                {slide.subtitle}
              </h2>
              <p className="text-[#40566D] max-w-md text-[clamp(0.85rem,2vw,1.125rem)]">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                <Link
                  href="/loginSignup"
                  className="bg-red-600 text-white flex items-center font-semibold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] gap-2 hover:bg-red-700 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]"
                >
                  {slide.ctaText}
                  <MoveRight className="text-white" size={16} />
                </Link>
                <button className="text-[#FF0000] hover:text-red-600 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]">
                  {slide.secondaryText}
                </button>
              </div>
            </div>

            {/* Right content (flex always) */}
            <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-6 lg:mt-0">
              {/* SVG Background */}
              <img
                src="/svg/geometric-patter-1.svg"
                alt="Background pattern"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Person + Product card wrapper */}
              <div className="relative flex items-end gap-4">
                {/* Person Image */}
                <img
                  src={slide.personImage}
                  alt={slide.personName}
                  className="relative z-10 w-[clamp(9rem,22vw,16rem)] object-contain"
                />

                {/* Product Card */}
                <div className="relative z-20 w-[clamp(8rem,20vw,14rem)] aspect-[4/5] bg-gray-700 rounded-md overflow-hidden shadow-lg flex flex-col justify-between">
                  <div className="px-2 sm:px-3 py-2">
                    <h1 className="text-white font-bold text-center text-[clamp(0.6rem,1.4vw,1.1rem)]">
                      {slide.personProdText}
                    </h1>
                    <p className="text-white text-[clamp(0.4rem,1vw,0.9rem)]">
                      POWERS <span className="font-medium">{slide.personPower}</span>
                    </p>
                  </div>
                  <div className="bg-white flex-1 flex justify-center items-center">
                    <img
                      src="/svg/image-placeholder.svg"
                      alt="placeholder"
                      className="w-2/3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={showPrevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      </button>
      <button
        onClick={showNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      </button>
    </section>
  );
};

export default HeroSection;
