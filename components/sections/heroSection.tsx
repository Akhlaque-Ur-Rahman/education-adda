"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides, GetRecomData } from "@/data/heroSection";
import { Caveat } from "next/font/google";
import BrandoCarousel from "./brandCarousel";

const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat',
});

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 🚀 start at 1 (because of prepended clone)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  // Clone first and last slides
  const extendedSlides = [
    heroSlides[heroSlides.length - 1], // last slide clone at start
    ...heroSlides,
    heroSlides[0], // first slide clone at end
  ];

  const showNextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const showPrevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Handle the "jump" when reaching clones
  useEffect(() => {
    if (!isTransitioning) return;

    const handleTransitionEnd = () => {
      if (currentIndex === extendedSlides.length - 1) {
        setIsTransitioning(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setIsTransitioning(false);
        setCurrentIndex(heroSlides.length);
      }
    };

    const slider = slideRef.current;
    slider?.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      slider?.removeEventListener("transitionend", handleTransitionEnd);
  }, [currentIndex, extendedSlides.length, isTransitioning]);

  return (
    <section className="relative overflow-hidden">
      {/* Slides wrapper */}
      <div
        ref={slideRef}
        className={`flex transition-transform duration-700 ease-in-out ${
          !isTransitioning ? "transition-none" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row w-full flex-shrink-0 px-4 sm:px-8 lg:px-[60px] 2xl:px-[120px] py-8 sm:py-10 lg:py-0 lg:items-center"
          >
            {/* Left content */}
            <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 w-full lg:w-1/2 text-center lg:text-left">
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
                  <ArrowRight size={16} />
                </Link>
                <button className="text-[#FF0000] hover:text-red-600 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]">
                  {slide.secondaryText}
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="relative flex justify-center items-center w-full lg:w-1/2 mt-6 lg:mt-0">
              {/* SVG Background */}
              <Image
                src="/svg/geometric-patter-1.svg"
                alt="Background pattern"
                fill
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Person + Product card wrapper */}
              <div className="relative flex items-end -space-x-8">
                {/* Person Image */}
                <div className="flex flex-col items-center">
                  <Image
                    src={slide.personImage}
                    alt={slide.personName}
                    width={400}
                    height={400}
                    className="relative z-10 w-[clamp(9rem,22vw,16rem)] object-contain"
                  />
                  <p className={`${caveat.className} absolute bottom-0 right-0 mt-2 font-medium text-gray-700 z-20 text-[clamp(1rem,4vw,2.5rem)]`}>
                    {slide.personName}
                  </p>
                </div>

                {/* Product Card */}
                <div className="relative w-[clamp(8rem,20vw,14rem)] aspect-[4/5]  rounded-md overflow-hidden shadow-lg flex flex-col justify-between z-1 self-center">
                  <div className="px-2 sm:px-3 py-2 bg-gray-700">
                    <h1 className="text-white font-bold text-center text-[clamp(0.6rem,1.4vw,1.1rem)]">
                      {slide.personProdText}
                    </h1>
                    <p className="text-white text-[clamp(0.4rem,1vw,0.9rem)]">
                      POWERS{" "}
                      <span className="font-medium">{slide.personPower}</span>
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
      <div className="overlap-container 2xl:px-30 lg:px-[60px] hidden xl:block ">
        <div className="get-recommendation flex items-center bg-white lg:px-6 lg:py-4 rounded-[6px]">
            {GetRecomData.map((item, index) => (
              <div key={index} className={`flex items-center  ${index === 0 ? ' gap-[10px] mr-[60px]' : 'gap-[5px] rounded-[50px] bg-[#FFEEEE]  '}`}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={20}
                  height={20}
                  className={` ${index === 0 ? 'size-5' : 'size-3 '}`}
                />
                <p className={` font-medium ${index === 0 ? 'text-[#192839] font-bold text-[14px]' : 'text-[#FF0000] text-[clamp(0.85rem,2vw,.75rem)] px-2'}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>

      </div>
      <BrandoCarousel/>

      {/* Navigation buttons */}
      <button
        onClick={showPrevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000]" />
      </button>
      <button
        onClick={showNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000]" />
      </button>
    </section>
  );
};

export default HeroSection;
