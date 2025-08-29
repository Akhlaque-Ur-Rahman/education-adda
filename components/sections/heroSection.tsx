"use client";
import React, { useState, useEffect } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/data/heroSection";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Next function (loops forward)
  const showNextSlide = () => {
    setCurrentIndex((index) =>
      index === heroSlides.length - 1 ? 0 : index + 1
    );
  };

  // ✅ Prev function (loops backward)
  const showPrevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? heroSlides.length - 1 : index - 1
    );
  };

  // // ✅ Auto slide every 5s
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentIndex((index) =>
  //       index === heroSlides.length - 1 ? 0 : index + 1
  //     );
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex w-full h-full items-center transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col justify-center lg:flex-row w-full flex-shrink-0 px-4 sm:px-8 lg:px-32 py-8 sm:py-10 lg:py-16 lg:items-center h-full"
          >
            {/* Left content */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-4 lg:space-y-6 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-xl sm:text-xl lg:text-5xl font-bold text-[#FF0000] text-[clamp(1.5rem,4vw,2.25rem)]">
                {slide.title}
              </h1>
              <h2 className="text-lg  lg:text-3xl text-[#192839]">
                {slide.subtitle}
              </h2>
              <p className="text-sm  lg:text-lg text-[#40566D] max-w-md">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                <Link
                  href="/loginSignup"
                  className="bg-red-600 text-white flex items-center text-sm sm:text-base font-semibold px-4 py-2 sm:px-4 sm:py-2 xl:px-6 xl:py-3 rounded-[15px] gap-2 hover:bg-red-700 transition-colors duration-300"
                >
                  {slide.ctaText}
                  <MoveRight className="text-white" size={16} />
                </Link>
                <button className="text-sm sm:text-base text-[#FF0000] hover:text-red-600 transition-colors duration-300">
                  {slide.secondaryText}
                </button>
              </div>
            </div>

            {/* Right content */}
            {/* Right Content */}
{/* Right content (shrunk, responsive) */}
<div className="slide-right-content-container relative w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 overflow-visible">

  {/* --- Mobile: stacked overlap --- */}
  <div className="relative flex sm:hidden w-full items-center justify-center">
    {/* SVG */}
    <img
      src="/svg/geometric-patter-1.svg"
      alt="Background pattern"
      className="absolute inset-0 w-full h-full object-contain"
    />

    {/* Card (smaller) */}
    <div className="relative z-10 w-[clamp(9rem,45vw,12rem)] aspect-[4/5]">
      <div className="bg-gray-700 flex flex-col items-center h-full rounded-md overflow-hidden shadow-lg">
        <div className="px-3 py-1.5">
          <h1 className="text-sm text-white font-bold text-center">{slide.personProdText}</h1>
          <p className="text-[10px] text-white">
            POWERS <span className="font-medium">{slide.personPower}</span>
          </p>
        </div>
        <div className="bg-white flex-1 flex justify-center items-center w-full">
          <h1 className="text-xs">Product</h1>
        </div>
      </div>
    </div>

    {/* Person */}
    <img
      src={slide.personImage}
      alt={slide.personName}
      className="absolute bottom-0 translate-y-3 z-20 w-[clamp(7rem,40vw,11rem)] object-contain"
    />
  </div>

  {/* --- ≥ sm: side-by-side, scaled down --- */}
  {/* --- ≥ sm: side-by-side, scaled down --- */}
<div className="hidden sm:flex flex-row gap-4 md:gap-6 items-end justify-center relative">
  {/* Person (kept above card) */}
  <img
    src={slide.personImage}
    alt={slide.personName}
    className="relative z-10 w-[clamp(9rem,22vw,16rem)] md:w-[clamp(10rem,24vw,18rem)] lg:w-[360px] object-contain -left-[40%] translate-x-[40%]"
  />

  {/* Card (sent behind person) */}
  <div className="relative z-0 w-[clamp(9rem,21vw,16rem)] lg:w-64 aspect-[4/5] self-center -left-[50%] translate-x-[50%]">
    <div className="bg-gray-700 flex flex-col items-center h-full rounded-md overflow-hidden">
      <div className="px-3 md:px-4 py-1.5 md:py-2">
        <h1 className="text-sm md:text-base text-white font-bold text-center">
          {slide.personProdText}
        </h1>
        <p className="text-[10px] md:text-xs text-white">
          POWERS <span className="font-medium">{slide.personPower}</span>
        </p>
      </div>
      <div className="bg-white flex-1 flex justify-center items-center w-full">
        <h1 className="text-xs md:text-sm">Product</h1>
      </div>
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

      {/* Dots indicator */}
      {/* <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              index === currentIndex ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroSection;
