"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  trackProgressData,
  trackProgressHeading,
} from "@/data/trackProgressData";
import { WhyChoosUsProps } from "@/types/whyChoosUsProps";
import Image from "next/image";

const TrackProgress: React.FC<WhyChoosUsProps> = ({ number }) => {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="lg:px-[60px] lg:py-10 py-0 bg-white rounded-[5px] border-1 border-gray-300">
      <div className="bg-[#203553] lg:bg-white flex justify-between items-center">
  <div className="lg:bg-white lg:py-2.5 lg:px-0 pt-8 pb-8 pr-5 pl-0 flex flex-col justify-between gap-2.5 mb-2">
    {number && (
      <span className="text-gray-400 lg:hidden block font-sans">{number}</span>
    )}
    <h2 className="text-[32px] font-bold text-white lg:text-[#192839] text-left">
      {trackProgressHeading.heading}
    </h2>
  </div>

  <div className="relative lg:hidden block h-full w-auto">
    <Image
      src="/svg/abstract2-white.svg"
      alt="Decorative Image"
      fill
      className="object-contain"
      priority
    />
  </div>
</div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 
          min-[360px]:grid-cols-2 
          md:grid-cols-3 
          xl:grid-cols-4 
          lg:gap-6 gap-0  overflow-hidden"
      >
        {trackProgressData.map((card, idx) => {
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
              <div
                className={
                  "joine-courses-text-container h-full absolute top-3/4 left-0 bg-[#FFF6F6] p-2 xl:px-[20px] xl:py-[15px] xl:gap-2.5 w-full transition-all duration-500 -translate-y-1/5 xl:translate-y-0 xl:group-hover:-translate-y-1/6"
                  
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
                  className=
                    "py-[10px] w-full flex justify-between items-center transition-all duration-500 ease-in-out ">
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
    </section>
  );
};

export default TrackProgress;
