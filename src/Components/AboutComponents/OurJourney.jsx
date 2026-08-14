import React from "react";
import { motion } from "framer-motion";

const OurJourney = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Subheading with Orange Dash */}
          <div className="flex items-center space-x-2 text-[#e05609] text-xs sm:text-sm font-bold tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-[#e05609] inline-block"></span>
            <span>OUR JOURNEY</span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-gray-950 tracking-tight leading-tight">
            From Humble <span className="text-[#e05609]">Beginnings</span> to Industry Leadership
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Founded in 2006, DSS Infrabuild started as a small construction firm with a big vision. Today, we stand as one of India's most trusted construction companies, having delivered over 1.2 million square feet of built space across 9 cities.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our growth is driven by unwavering commitment to quality, innovation, and client satisfaction. Every project receives the same level of dedication and engineering excellence.
          </p>
        </motion.div>

        {/* Right Column: Dual Images Side-by-Side with strict grid constraint */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 w-full"
        >
          <div className="grid grid-cols-12 gap-3 sm:gap-4 items-center w-full">
            {/* Main Large Image */}
            <div className="col-span-8 h-[280px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85"
                alt="Rebar Construction Work"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Secondary Small Image (Right) */}
            <div className="col-span-4 h-[180px] sm:h-[220px] lg:h-[240px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=600&q=85"
                alt="Engineers on Site Deck"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80";
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurJourney;
