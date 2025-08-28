"use client";
import React, { useState, useEffect } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { heroSlides } from "@/data/heroSection";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="hero-slider-container w-full h-full flex items-center px-[120] ">
      <div className="slide-left-content-container flex flex-col items-center lg:items-start justify-center space-y-4 lg:space-y-6 text-center lg:text-left w-full lg:w-1/2 mt-6 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF0000] mb-2 lg:mb-4">
                {heroSlides[0].title}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#192839] mb-2 lg:mb-4">
                {heroSlides[0].subtitle}
              </h2>
              <p className="text-base sm:text-lg text-[#40566D] mb-4 lg:mb-6 max-w-md px-2 lg:px-0">
                {heroSlides[0].description}
              </p>
              <div className="cta-container flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                <Link
                  href="/loginSignup"
                  className="cta-button bg-red-600 text-white flex items-center text-sm sm:text-base font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-[15px] gap-2 hover:bg-red-700 transition-colors duration-300"
                >
                  {heroSlides[0].ctaText}
                  <MoveRight className="text-white" size={16} />
                </Link>
                <button className="text-sm sm:text-base text-[#FF0000] hover:text-red-600 transition-colors duration-300">
                  {heroSlides[0].secondaryText}
                </button>
              </div>
      </div>
      <div className="slide-right-content-container h-full w-1/2 ">
      
        <div className="relative h-full w-full flex flex-col items-center justify-center">
          <div className="w-[220px] h-[300px] border-1 ">
            <div>
              <h1></h1>
              <p>POWERS <span>{heroSlides[0].personPower}</span></p>
            </div>
          </div>
          <img src={heroSlides[0].personImage} alt="" className="absolute bottom-[12.5%] -left-[15%] z-0"/>
          <h1 className="text-blue-500 font-caveat text-[48px] absolute bottom-[12.5%] right-[50%] z-10">{heroSlides[0].personName}</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
