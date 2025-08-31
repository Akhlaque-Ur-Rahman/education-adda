"use client";

import { useState } from "react";
import { Menu, X, Headphones, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/data/navbarLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between gap-4 xl:gap-6 px-4 sm:px-6  xl:px-16 xl:py-6 2xl:px-[120px] py-4 sm:py-5 z-50">
      {/* Logo */}
      <div className="logo flex items-center gap-2 flex-shrink-0">
        <Image
          src="/logo/Brand-Logo.png"
          alt="Education Adda Logo"
          width={32}
          height={32}
          className="h-7 sm:h-8 w-auto"
          priority
        />
        <p className="font-extrabold text-lg sm:text-xl text-[#192839] italic hidden sm:block">EDUCATION ADDA</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center flex-1 justify-center">
        <div className="flex items-center space-x-1 xl:space-x-2 mr-auto">
          {navbarLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative px-3 py-2 text-gray-600 hover:text-red-600 text-sm  group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-full"></span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="hidden xl:flex items-center gap-4 xl:gap-6">
        <Headphones size={24} className="text-[#40566D] hidden xl:block" />
        <Link
          href="/loginSignup"
          className=" text-[#FF0000] font-semibold text-[14px] px-4 py-2 text-sm xl:px-[24px] xl:py-[12px] rounded-[16px] border-1 border-[#FF0000]">
            Login
        </Link>
        <Link
          href="/loginSignup"
          className=" text-white flex items-center text-[14px] font-semibold px-4 py-2 text-sm xl:px-[24px] xl:py-[12px] rounded-[16px] bg-[#FF0000] gap-[8px]">
            Signup
            <span>
              <ArrowRight size={16} />
            </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center gap-3">
        <Headphones size={20} className="text-[#40566D]" />
        <button
  onClick={() => setIsOpen(true)}
  className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
  aria-label="Open menu"
>
  <Menu size={24} />
</button>

      </div>

      {/* Mobile Drawer */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 right-0 h-screen w-full max-w-xs bg-[#192839] shadow-xl z-[9999] flex flex-col"
    >
      {/* Close button inside drawer */}
      <div className="flex justify-end px-4 py-4">
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="text-white" />
        </button>
      </div>

      {/* Nav links */}
      <div className="overflow-y-auto">
        {navbarLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block text-white text-lg hover:bg-blue-600/20 transition-colors px-6 py-3 font-medium border-b border-gray-700/50 last:border-b-0"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Bottom buttons */}
      <div className="p-6 border-t border-gray-700/50 flex items-center justify-between gap-4 ">
        <Link
          href="/loginSignup"
          className="text-white text-center flex-1 font-semibold text-[14px] px-4 py-2 rounded-[15px] bg-[#FF0000]"
        >
          Login
        </Link>
        <Link
          href="/loginSignup"
          className="text-white flex flex-1 items-center justify-center text-[14px] font-semibold px-4 py-2 rounded-[15px] bg-[#FF0000] gap-[5px]"
        >
          Signup
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
}
