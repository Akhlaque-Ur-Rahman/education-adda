"use client";

import { useState } from "react";
import { Menu, X, Headphones, MoveRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navbarLinks } from "@/data/navbarLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-[120px] py-4 sm:py-5 bg-white  fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="logo flex items-center gap-2 flex-shrink-0">
        <Image
          src="/logo/Brand-Logo.png"
          alt="Education Adda Logo"
          width={120}
          height={32}
          className="h-7 sm:h-8 w-auto"
          priority
        />
        <p className="font-bold text-lg sm:text-xl text-text-primary hidden sm:block">EDUCATION ADDA</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden xl:flex items-center flex-1 justify-center">
        <div className="flex items-center space-x-1 xl:space-x-2 mr-auto">
          {navbarLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="relative px-3 py-2 text-gray-600 hover:text-red-600 text-sm xl:text-base group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-full"></span>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="hidden xl:flex items-center gap-4 xl:gap-3">
        <Headphones size={24} className="text-[#40566D] hidden xl:block" />
        <Link
          href="/loginSignup"
          className=" text-[#FF0000] font-semibold text-[14px] px-4 py-2 text-sm xl:px-[25px] xl:py-[8.5px] rounded-[15px] border-1 border-[#FF0000]">
            Login
        </Link>
        <Link
          href="/loginSignup"
          className=" text-white flex items-center text-[14px] font-semibold px-4 py-2 text-sm xl:px-[20px]  xl:py-[8.5px] rounded-[15px] bg-[#FF0000] gap-[5px]">
            Signup
            <span>
              <MoveRight size={16} />
            </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex items-center gap-3">
        <Headphones size={20} className="text-[#40566D]" />
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="absolute top-full right-0 w-full max-w-xs h-[calc(100vh-100%)] bg-[#192839] shadow-xl z-50 flex flex-col"
          >
            <div className="flex-1 overflow-y-auto py-4">
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
            
            <div className="p-6 border-t border-gray-700/50 flex items-center justify-between gap-4 w-full">
              <Link
          href="/loginSignup"
          className=" text-white text-center flex-1 font-semibold text-[14px] px-4 py-2 text-sm xl:px-[25px] xl:py-[8.5px] rounded-[15px] bg-[#FF0000]">
            Login
        </Link>
        <Link
          href="/loginSignup"
          className=" text-white flex flex-1 items-center justify-center text-[14px] font-semibold px-4 py-2 text-sm xl:px-[20px] xl:py-[8.5px] rounded-[15px] bg-[#FF0000] gap-[5px]">
            Signup
            <span>
              <MoveRight size={16} />
            </span>
        </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
