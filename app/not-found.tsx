// app/not-found.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 text-center overflow-hidden">
      {/* Floating Illustration (SVG shape) */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 0.15 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 left-1/4 w-64 h-64"
      >
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full fill-[#FF0000]"
        >
          <path d="M39.6,-67.2C52.6,-59.7,66.6,-52.1,72.7,-40.5C78.8,-28.9,76.9,-14.5,73.3,-1.7C69.6,11.1,64.2,22.3,57.1,33.8C49.9,45.3,41,57.1,29.1,63.8C17.2,70.5,2.4,72.1,-11.8,73.4C-26,74.8,-39.7,76,-52.6,70.4C-65.5,64.9,-77.7,52.6,-79.7,38.4C-81.7,24.2,-73.5,8.1,-69.3,-8.7C-65.2,-25.6,-65.1,-43.1,-55.4,-54.3C-45.7,-65.6,-26.3,-70.5,-9.4,-68.7C7.5,-66.9,15.1,-58.4,39.6,-67.2Z" />
        </svg>
      </motion.div>

      {/* Animated 404 */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-8xl font-extrabold text-[#FF0000] drop-shadow-md relative z-10"
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg text-gray-600 relative z-10"
      >
        Oops! The page you are looking for doesn’t exist.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#FF0000] px-6 py-3 text-white shadow-lg transition hover:bg-red-600"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
