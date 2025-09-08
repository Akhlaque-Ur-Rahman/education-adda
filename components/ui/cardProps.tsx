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

  // Different sticky offset
  const mobileOffset = isMobile ? i * 15 : i * 25;

  return (
    <div
      ref={container}
      className="h-screen w-full flex items-start justify-center sticky"
      style={{ top: `calc(${isMobile ? "0px" : "0px"} + ${mobileOffset}px)` }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-[90%] lg:w-[95%] h-auto border-[0.5px] border-gray-400">
        <Component number={number} total={total} />
      </div>
    </div>
  );
};

export default Card;
