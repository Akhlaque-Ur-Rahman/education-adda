"use client";

import { useState } from "react";
import { Menu, X, Headphones } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navbarLinks } from "@/data/navbarLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between gap-6 px-4 md:px-[120px] py-6 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <img
          src="/logo/Brand-Logo.png"
          alt="Education Adda Logo"
          className="h-[30px] w-auto"
        />
        <p className="font-bold text-[20px] text-text-primary">
          EDUCATION ADDA
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center mr-auto">
        {navbarLinks.map((link, idx) => {
  const Icon = link.icon; // Assign the icon component dynamically
  return (
    <Link
      key={idx}
      href={link.href}
      className="relative flex items-center gap-1 px-[10px] text-gray-600 hover:text-red-600 text-lg group"
    >
      <Icon size={18} className="text-gray-500 group-hover:text-red-600 transition" />
      {link.label}
      <span className="absolute left-0 -bottom-1/2 w-full h-[4px] bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded"></span>
    </Link>
  );
})}

      </div>
      <Headphones size={24} className="text-[#40566D] ml-auto" />
      <div className=" md:flex items-center gap-6  self-end hidden">
        <Link
          href="/loginSignup"
          className="
    relative 
    group 
    inline-block 
    text-white 
    px-5 
    py-2 
    rounded 
    overflow-hidden
    bg-gradient-to-r from-red-500 via-red-800 to-black
  "
        >
          <span
            className="
      absolute inset-0 
      -translate-x-full 
      transform 
      -skew-x-12 
      bg-gradient-to-r from-transparent via-white/30 to-transparent 
      transition-transform duration-500 
      group-hover:translate-x-full
    "
          ></span>

          <span className="relative">Login | Signup</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", stiffness: 80 }}
            className="absolute top-[100%] right-0 w-3/4 h-screen bg-white shadow-lg z-50 flex flex-col py-6 "
          >
            {navbarLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className="relative flex items-center gap-2 px-[10px] text-gray-600 hover:text-red-600 text-[14px] group"
                >
                  <Icon
                    size={18}
                    className="text-gray-500 group-hover:text-red-600 transition"
                  />
                  {link.label}
                  <span className="absolute left-0 -bottom-1/2 w-full h-[4px] bg-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded"></span>
                </Link>
              );
            })}

            <div className="flex justify-center my-auto">
              <Link
                href="/loginSignup"
                onClick={() => setIsOpen(false)}
                className="text-white text-xl px-5 py-2 font-medium rounded overflow-hidden bg-gradient-to-r from-red-500 via-red-800 to-black text-center"
              >
                Login | Signup
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
