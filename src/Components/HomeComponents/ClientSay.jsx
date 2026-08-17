import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- 6 Curated High-Profile Client Testimonials matching screenshot ---
const testimonialsData = [
  {
    id: 1,
    name: "Rajiv Khanna",
    designation: "MD, Khanna Developers",
    initials: "RK",
    quote:
      "DSS delivered our 4-lakh sq. ft. residential complex three weeks ahead of schedule. Their BIM coordination eliminated every RFI clash. The finishing quality exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Sunita Mehta",
    designation: "Director, Horizon Healthcare",
    initials: "SM",
    quote:
      "What distinguishes DSS is their transparency. Monthly billing with zero surprises, real-time drone updates, and a project manager who answers calls at 10 PM.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anurag Verma",
    designation: "VP Infrastructure, Prime Logistics",
    initials: "AV",
    quote:
      "Their structural steel fabrication capabilities are world-class. From initial PEB design to turnkey erection, DSS executed our 2.5 lakh sq. ft. warehouse seamlessly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Pooja Singhania",
    designation: "Chief Architect, Studio Urbane",
    initials: "PS",
    quote:
      "Collaborating with DSS Infrabuild on complex architectural layouts is effortless. Their technical detailing and adherence to architectural intent is unmatched.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikramaditya Roy",
    designation: "CEO, Apex Hospitality & Resorts",
    initials: "VR",
    quote:
      "We trusted DSS for the complete interior fitout and structural renovation of our luxury hotel. The precision, speed, and finish were genuinely flawless.",
    rating: 5,
  },
  {
    id: 6,
    name: "Col. R. S. Rathore",
    designation: "President, Greens Residents Association",
    initials: "RR",
    quote:
      "Exceptional project governance and quality check protocols. They maintained complete safety and delivered on every promise made during contract signing.",
    rating: 5,
  },
];

const ClientSay = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeBtn, setActiveBtn] = useState(null); // 'prev' | 'next' | null
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive 1 card (mobile) vs 2 cards (desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonialsData.length / cardsPerPage);

  // Reset page index if resizing changes totalPages
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Next Page Handler
  const handleNext = (manual = false) => {
    if (manual) setActiveBtn("next");
    setCurrentPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  // Prev Page Handler
  const handlePrev = (manual = false) => {
    if (manual) setActiveBtn("prev");
    setCurrentPage((prev) => (prev <= 0 ? totalPages - 1 : prev - 1));
  };

  // Auto Slider Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext(false);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0e0e11] text-white overflow-hidden font-sans border-t border-neutral-800">
      
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#e05609]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. TOP ROW: TAG, TITLE, SUBTITLE & INTERACTIVE CONTROLS                   */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4"
        >
          {/* Left Text Box */}
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2.5">
              <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
              <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                TESTIMONIALS
              </span>
            </div>

            <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold tracking-tight text-white leading-tight">
              What Our <span className="text-[#e05609]">Clients Say</span>
            </h2>

            <p className="text-gray-400 text-xs sm:text-sm font-normal">
              Trusted by leading developers, enterprises, and homeowners across India
            </p>
          </div>

          {/* Right: Dynamic Interactive Slider Control Buttons */}
          <div className="flex items-center space-x-2 self-end md:self-auto">
            {/* Prev Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => handlePrev(true)}
              aria-label="Previous testimonial"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                activeBtn === "prev"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "bg-neutral-800 text-gray-300 hover:bg-[#e05609] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => handleNext(true)}
              aria-label="Next testimonial"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer ${
                activeBtn === "next"
                  ? "bg-[#e05609] text-white shadow-sm"
                  : "bg-neutral-800 text-gray-300 hover:bg-[#e05609] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. TESTIMONIALS SLIDER (1 CARD ON MOBILE, 2 CARDS ON DESKTOP)             */}
        {/* ========================================================================= */}
        <div
          className="relative overflow-hidden w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageCards = isMobile
                ? [testimonialsData[pageIdx]].filter(Boolean)
                : [
                    testimonialsData[pageIdx * 2],
                    testimonialsData[pageIdx * 2 + 1],
                  ].filter(Boolean);

              return (
                <div
                  key={pageIdx}
                  className={`w-full min-w-full flex-shrink-0 grid gap-5 sm:gap-6 ${
                    isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {pageCards.map((item) => (
                    <div
                      key={item.id}
                      className="group relative rounded-xl p-6 sm:p-7 bg-[#161619] border border-neutral-800/80 hover:border-[#e05609]/50 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] transition-colors duration-150 cursor-pointer"
                    >
                      {/* Big Orange Quote Icon */}
                      <div className="text-2xl sm:text-3xl text-[#e05609] font-serif font-black leading-none select-none mb-2">
                        <svg className="w-7 h-7 text-[#e05609] fill-current opacity-90" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Quote Text */}
                      <p className="text-gray-300 text-xs sm:text-[14px] leading-relaxed font-normal my-2">
                        {item.quote}
                      </p>

                      {/* Client Details Row */}
                      <div className="pt-4 mt-3 border-t border-neutral-800/70 flex items-center justify-between">
                        {/* Avatar & Designation */}
                        <div className="flex items-center space-x-3">
                          {/* Orange Initials Avatar Badge */}
                          <div className="w-10 h-10 rounded-md bg-[#e05609] text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-sm flex-shrink-0">
                            {item.initials}
                          </div>

                          {/* Name & Title */}
                          <div>
                            <h3 className="text-white font-bold text-xs sm:text-[14.5px] tracking-tight group-hover:text-[#e05609] transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-gray-400 text-[11px] sm:text-xs font-normal">
                              {item.designation}
                            </p>
                          </div>
                        </div>

                        {/* 5-Star Orange Rating */}
                        <div className="flex items-center space-x-1 text-[#e05609] flex-shrink-0">
                          {Array.from({ length: item.rating }).map((_, starIdx) => (
                            <svg
                              key={starIdx}
                              className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;