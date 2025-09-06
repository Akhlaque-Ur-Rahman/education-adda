"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { coursesData, joinCourseHeading } from "@/data/joinCoursesData";
import { WhyChoosUsProps } from "@/types/whyChoosUsProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import Image from "next/image";

const JoinCourses: React.FC<WhyChoosUsProps> = ({ number }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  type Props = { number: string };

  return (
    <section className=" lg:px-[60px] py-10 bg-white rounded-[5px]">
      <div className="bg-[#203553] lg:bg-white flex justify-between items-center">
        <div className="lg:bg-white pt-8 pb-8 pr-5 pl-0 flex flex-col justify-between gap-2.5 mb-2">
          {number && (
          <span className="text-gray-400 lg:hidden block font-sans">{number}</span>
        )}
        <h2 className="text-[32px] font-bold text-white lg:text-[#192839] text-left">
          {joinCourseHeading.heading}
        </h2>
        </div>
        <img
          src="/svg/abstract2-white.svg"
          alt="Decorative Image"
          className="lg:hidden block h-full w-auto"
        />
      </div>

      {/* Mobile Dropdown */}
      <div className="sm:hidden relative mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between border-[.5px] border-gray-400 rounded-sm px-2 py-2 text-sm bg-white shadow-sm"
        >
          <span className="font-medium text-gray-700">
            {coursesData[activeTab].name}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform text-gray-500 ${
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
                      : "hover:bg-gray-50 text-[#192839]"
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
                    ? "border-b-2 border-[#009E5C] font-semibold text-[#192839]"
                    : "font-normal"
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
    lg:gap-6 gap-0 mt-6 overflow-hidden"
        >
          {coursesData[activeTab].cards.map((card, idx) => {
            const isExpanded = openCard === idx;
            return (
            <motion.div
              key={idx}
              onClick={() => {
                if (isMobile) {
                  setOpenCard(isExpanded ? null : idx); // toggle expand on tap
                }
              }}
              className="relative group bg-gray-100 rounded-[5px] flex items-end justify-center shadow-sm border-1 border-gray-300 hover:shadow-lg min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px] w-full transition-shadow duration-300 overflow-hidden"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Heading & Description + CTA */}
              <div
                className={
                  "joine-courses-text-container h-full absolute top-3/4 left-0 bg-[#FFF6F6] p-2 xl:px-[20px] xl:py-[15px] xl:gap-2.5 w-full transition-all duration-500 " +
                  (isMobile
                    ? isExpanded
                      ? "-translate-y-1/6" // show on tap
                      : "translate-y-0" // default collapsed
                    : "group-hover:-translate-y-1/6") // desktop hover
                }
              >
                <div className="lg:mb-5 mb-4">
                  <h2
                    className="font-semibold text-[#192839] cursor-default"
                    style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
                  >
                    {card.title}
                  </h2>
                  <p
                    className="text-[#222222] cursor-default"
                    style={{ fontSize: "clamp(8px, 1.5vw, 12px)" }}
                  >
                    {card.description}
                  </p>
                </div>

                <div
                  className={
                    "py-[10px] w-full flex justify-between items-center transition-all duration-500 ease-in-out " +
                    (isMobile
                      ? isExpanded
                        ? "opacity-100"
                        : "opacity-0"
                      : "opacity-0 group-hover:opacity-100")
                  }
                >
                  <button
                    className="bg-[#ff0000] text-[#FFF6F6] font-semibold rounded-[10px] cursor-pointer"
                    style={{
                      fontSize: "clamp(10px, 1.8vw, 14px)",
                      padding: "clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px)",
                    }}
                  >
                    {card.ctaPrimary}
                  </button>
                  <Link
                    className="underline text-[#FF0000] shrink-0 cursor-pointer"
                    style={{ fontSize: "clamp(10px, 1.8vw, 14px)" }}
                    href={"#"}
                  >
                    {card.ctaSecondary}
                  </Link>
                </div>
              </div>
            </motion.div>
          );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default JoinCourses;
