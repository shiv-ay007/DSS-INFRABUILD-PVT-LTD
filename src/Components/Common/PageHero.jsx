import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageHero = ({
  title,
  highlightWord = "",
  subtitle = "",
  breadcrumbs = [],
  bgImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
}) => {
  return (
    <section className="relative min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center justify-center text-center pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 overflow-hidden bg-[#141416]">
      {/* Background Image with Framer Motion Zoom effect */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 0.65 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Cinematic Dark Gradient Overlay for optimal text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/95 via-black/60 to-black/75" />

      {/* Subtle Orange Accent Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#e05609]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Breadcrumb Row */}
        <motion.nav
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-300 mb-4 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm"
        >
          <Link
            to="/"
            className="hover:text-[#e05609] transition-colors flex items-center space-x-1"
          >
            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span className="text-gray-500">/</span>
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="hover:text-[#e05609] transition-colors"
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-[#e05609] font-medium">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans drop-shadow-md"
        >
          {title}{" "}
          {highlightWord && (
            <span className="text-[#e05609]">{highlightWord}</span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-300/90 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
