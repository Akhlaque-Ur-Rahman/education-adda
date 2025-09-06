// Card.tsx
"use client";
import { useRef, useEffect, useState } from "react";
import { motion,useTransform, motionValue, MotionValue } from "framer-motion";

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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scale based on scroll progress - adjusted for mobile
  const scale = useTransform(
    progress, 
    range, 
    isMobile ? [1, Math.max(targetScale, 0.95)] : [1, targetScale]
  );

  // For mobile, we'll use a simpler stacking approach
  const mobileOffset = isMobile ? i * 15 : i * 25;

  if (isMobile) {
    // Mobile version with simplified animation
    return (
      <div
        ref={container}
        className="h-screen flex items-center justify-center sticky top-0"
      >
        <motion.div
          style={{
            scale,
            top: `calc(-2vh + ${mobileOffset}px)`, // Reduced offset for mobile
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

  // Desktop version (original)
  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative w-full flex justify-center"
      >
        <div className="bg-white rounded-2xl shadow-xl w-[90%] lg:w-[85%] h-auto">
          <Component number={number} total={total} />
        </div>
      </motion.div>
    </div>
  );
};

export default Card;