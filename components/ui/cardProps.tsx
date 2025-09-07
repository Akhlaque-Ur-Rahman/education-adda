// Card.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface CardProps {
  i: number;
  Component: React.ElementType;
  number: string;
  total: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ i, Component, number, total, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Prevent scaling for the first card (i === 0)
  const scale = i === 0 
    ? 1 
    : useTransform(
        progress,
        range,
        isMobile ? [1, Math.max(targetScale, 0.95)] : [1, targetScale]
      );

  const mobileOffset = isMobile ? i * 15 : i * 25;

  if (isMobile) {
    return (
      <div
        ref={container}
        className="h-screen flex items-center justify-center sticky top-0"
      >
        <motion.div
          style={{
            scale,
            top: `calc(-2vh + ${mobileOffset}px)`,
          }}
          className="relative w-full flex justify-center"
        >
          <div className="bg-white rounded-xl shadow-lg w-full max-w-sm h-auto">
            <Component number={number} total={total} />
          </div>
        </motion.div>
      </div>
    );
  }

  // Desktop
  return (
    <div
      ref={container}
      className="h-screen flex items-start justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-2vh + ${i * 25}px)`,
        }}
        className="relative w-full flex justify-center"
      >
        <div className="bg-white rounded-2xl shadow-xl w-[90%] lg:w-[95%] h-auto">
          <Component number={number} total={total} />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
