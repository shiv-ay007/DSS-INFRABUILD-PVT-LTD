import React from "react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 select-none"
    >
      <motion.a
        href="tel:+917393056555"
        whileHover={{ scale: 1.12, rotate: 6 }}
        whileTap={{ scale: 0.92 }}
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#e05609] text-white shadow-2xl hover:bg-[#c94905] transition-colors duration-200"
        title="Call DSS Infrabuild (+91 73930 56555)"
        aria-label="Call DSS Infrabuild"
      >
        {/* Ripple Ping Animation Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#e05609] opacity-40 animate-ping pointer-events-none"></span>

        {/* Vector Phone Call Icon */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 relative z-10"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

export default FloatingCallButton;
