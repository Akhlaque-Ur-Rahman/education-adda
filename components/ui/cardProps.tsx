"use client";
import { useRef, useEffect, useState } from "react";

interface CardProps {
  i: number;
  Component: React.ElementType;
  number: string;
  total: string;
}

const Card = ({ i, Component, number, total }: CardProps) => {
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

  // Sticky offset: complete overlap on mobile, stagger on desktop
  const offset = isMobile ? 0 : i * 25;

  return (
    <div
      ref={container}
      className="h-screen w-full flex items-start justify-center sticky"
      style={{ top: `${offset}px`, zIndex: i + 1 }}
    >
      <div className="bg-white rounded-2xl w-full lg:w-[95%] h-full lg:h-auto border-[0.5px] border-gray-400 shadow-sm">
        <Component number={number} total={total} />
      </div>
    </div>
  );
};

export default Card;