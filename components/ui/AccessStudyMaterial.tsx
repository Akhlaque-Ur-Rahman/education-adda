"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { accessStudyMaterialData, accessStudyMaterialHeading } from "@/data/accessStudyMaterialData"; // 👉 import dataset

const AccessStudyMaterial = () => {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <section className="px-2 lg:px-[60px] py-10 bg-white rounded-[5px]">
      <h2 className="text-[32px] font-bold text-[#192839] mb-[15px] text-left">
        {accessStudyMaterialHeading.heading}
      </h2>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 
          min-[360px]:grid-cols-2 
          md:grid-cols-3 
          xl:grid-cols-4 
          lg:gap-6 gap-0 mt-6"
      >
        {accessStudyMaterialData.map((card, idx) => {
          const isExpanded = openCard === idx;

          return (
            <motion.div
              key={idx}
              onClick={() => {
                if (isMobile) {
                  setOpenCard(isExpanded ? null : idx);
                }
              }}
              className="relative group bg-gray-100 rounded-[5px] flex items-end justify-center border border-gray-200 shadow-sm hover:shadow-lg min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] xl:min-h-[400px] w-full cursor-pointer"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "contain",
                backgroundPosition: "top",
              }}
            >
              {/* Text + CTA */}
              <div className="joine-courses-text-container bg-[#FFF6F6] px-3 py-2 xl:px-[20px] xl:py-[15px] xl:gap-2.5 w-full transition-all duration-500">
                <div>
                  <h2
                    className="font-semibold text-[#192839]"
                    style={{
                      fontSize: "clamp(14px, 2vw, 18px)",
                    }}
                  >
                    {card.title}
                  </h2>
                  <p
                    className="text-[#222222]"
                    style={{
                      fontSize: "clamp(11px, 1.5vw, 12px)",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* CTA Section */}
                <div
                  className={
                    "py-[10px] w-full flex justify-between items-center transition-all duration-500 ease-in-out " +
                    "opacity-0 translate-y-2 max-h-0 overflow-hidden " +
                    (isMobile
                      ? isExpanded
                        ? "opacity-100 translate-y-0 max-h-40"
                        : ""
                      : "group-hover:opacity-100 group-hover:translate-y-0 group-hover:max-h-40")
                  }
                >
                  <button
                    className="bg-[#ff0000] text-[#FFF6F6] font-semibold rounded-[10px]"
                    style={{
                      fontSize: "clamp(10px, 1.8vw, 14px)",
                      padding: "clamp(4px, 1vw, 10px) clamp(10px, 2vw, 14px)",
                    }}
                  >
                    {card.ctaPrimary}
                  </button>
                  <Link
                    className="underline text-[#FF0000] shrink-0"
                    style={{
                      fontSize: "clamp(10px, 1.8vw, 14px)",
                    }}
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

export default AccessStudyMaterial;
