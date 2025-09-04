"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coursesData } from "@/data/joinCoursesData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

const JoinCourses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);


  return (
    <section className="px-2 lg:px-[60px] py-10">
      <h2 className="text-3xl font-bold mb-6 text-left lg:text-left">
        Join Courses
      </h2>

      {/* Mobile Dropdown */}
      <div className="sm:hidden relative mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border rounded-lg px-4 py-2 text-sm bg-white shadow-sm"
        >
          <span className="font-medium text-gray-700">
            {coursesData[activeTab].name}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto"
          >
            {coursesData.map((tab, index) => (
              <li key={tab.name}>
                <button
                  onClick={() => {
                    setActiveTab(index);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    activeTab === index
                      ? "bg-green-50 text-green-600 font-medium"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </div>

      {/* Tabs Swiper for larger screens */}
      <div className="hidden sm:block">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          freeMode={true}
          grabCursor={true}
          mousewheel={true}
          slidesPerView={"auto"}
          spaceBetween={12}
          className="border-b pb-2"
        >
          {coursesData.map((tab, index) => (
            <SwiperSlide
              key={tab.name}
              style={{ width: "auto" }}
              className="!w-auto"
            >
              <button
                onClick={() => setActiveTab(index)}
                className={`pb-2 whitespace-nowrap inline-block text-sm sm:text-base ${
                  activeTab === index
                    ? "border-b-2 border-green-600 font-semibold text-black"
                    : "text-gray-500"
                }`}
              >
                {tab.name}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards */}
      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 
    min-[360px]:grid-cols-2 
    md:grid-cols-3 
    xl:grid-cols-4 
    lg:gap-6 gap-0 mt-6"
        >
          {coursesData[activeTab].cards.map((card, idx) => (
            <motion.div
  key={idx}
  className="relative group bg-gray-100 rounded-[5px] flex items-end justify-center border border-gray-200 shadow-sm hover:shadow-lg min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px] w-full"
  style={{
    backgroundImage: `url(${card.image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
  onClick={() => {
    if (window.innerWidth < 640) {
      // toggle only for mobile
      setOpenCard(openCard === idx ? null : idx);
    }
  }}
>
  {/* Text + CTA */}
  <div className="joine-courses-text-container bg-[#FFF6F6] px-3 py-2 xl:px-[20px] xl:py-[15px] xl:gap-2.5 w-full transition-all duration-500">
    <div>
      <h2
        className="font-semibold text-[#192839] text-nowrap"
        style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
      >
        {card.title}
      </h2>
      <p
        className="text-[#222222]"
        style={{ fontSize: "clamp(11px, 1.5vw, 12px)" }}
      >
        {card.description}
      </p>
    </div>

    {/* CTA Section */}
    <div
      className={`py-[10px] gap-[20px] sm:gap-[30px] w-full flex justify-between items-center transition-all duration-500 ease-in-out 
      opacity-0 translate-y-2 max-h-0 overflow-hidden 
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40 
      ${openCard === idx ? "opacity-100 translate-y-0 max-h-40" : ""}`}
    >
      <button
        className="bg-red-600 text-[#FFF6F6] font-bold rounded-[10px] hover:cursor-pointer"
        style={{
          fontSize: "clamp(10px, 1.8vw, 14px)",
          padding: "clamp(4px, 1vw, 10px) clamp(10px, 2vw, 14px)",
        }}
      >
        {card.ctaPrimary}
      </button>
      <Link
        className="underline text-[#FF0000] shrink-0 hover:cursor-pointer"
        style={{ fontSize: "clamp(8px, 1.8vw, 14px)" }}
        href={"#"}
      >
        {card.ctaSecondary}
      </Link>
    </div>
  </div>
</motion.div>

          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default JoinCourses;
