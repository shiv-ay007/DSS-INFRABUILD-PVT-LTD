import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- Custom Inline SVG Icons (Zero Extra NPM Dependencies) ---
const ArchitectureIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 19H3L12 2zm0 6v5m-3 3h6" />
  </svg>
);

const ConstructionHelmetIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3a9 9 0 0 0-9 9v1h18v-1a9 9 0 0 0-9-9zm-8 12v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2H4zm8-10.5c.83 0 1.5.67 1.5 1.5v3h-3v-3c0-.83.67-1.5 1.5-1.5z" />
  </svg>
);

const InteriorDesignIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.71a1 1 0 0 0-1.42 0l-9.05 9.05 1.42 1.42 9.05-9.05a1 1 0 0 0 0-1.42zM17.66 3.05l-1.41 1.41 1.41 1.41 1.41-1.41-1.41-1.41z" />
  </svg>
);

const FactoryIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 19h16v2H4v-2zm18-7l-4-4V4h-3v4l-4-4V4H8v4L4 4v13h18v-5z" />
  </svg>
);

const HandshakeIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21.71 8.71l-3.42-3.42a2.008 2.008 0 0 0-2.83 0l-2.46 2.46-1.41-1.41a2.008 2.008 0 0 0-2.83 0L6.29 8.81a2 2 0 0 0 0 2.83l3.54 3.54a2 2 0 0 0 2.83 0l6.36-6.36 2.69 2.69a1 1 0 0 0 1.41-1.41l-1.41-1.39zm-9.19 5.66l-3.54-3.54 2.47-2.47 3.54 3.54-2.47 2.47zM3 13h2v7H3v-7zm4 3h2v4H7v-4z" />
  </svg>
);

// Services Data with exact paths matching Navbar submenu & reliable HD image URLs
const servicesList = [
  {
    id: "architectural-planning",
    title: "Architectural Planning",
    href: "/services/architectural-planning",
    description:
      "Conceptual design, 3D visualization, structural planning, and building approval drawings with BIM integration.",
    icon: ArchitectureIcon,
    bgImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "construction",
    title: "Construction",
    href: "/services/construction",
    description:
      "Residential, commercial, and institutional construction with quality materials and timely delivery.",
    icon: ConstructionHelmetIcon,
    bgImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    fallback:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    href: "/services/interior-design",
    description:
      "Modern interiors, modular kitchens, false ceilings, and custom furniture design for residential & commercial spaces.",
    icon: InteriorDesignIcon,
    bgImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    fallback:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fabrication-works",
    title: "Fabrication Works",
    href: "/services/fabrication-works",
    description:
      "Structural steel fabrication, PEB structures, gates, railings, and heavy metal fabrication solutions.",
    icon: FactoryIcon,
    bgImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    fallback:
      "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "consultancy",
    title: "Consultancy",
    href: "/services/consultancy",
    description:
      "Project estimation, site supervision, material testing, and value engineering consultancy services.",
    icon: HandshakeIcon,
    bgImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    fallback:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#111113] overflow-hidden font-sans border-t border-neutral-800/80">
      {/* Background radial accent glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#e05609]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION (TAGLINE, TITLE, SUBTITLE)                              */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-3 mb-8 sm:mb-10"
        >
          {/* Top Tag */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2.5px] bg-[#e05609] rounded-full"></span>
            <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
              PRECISION IN EVERY DETAIL
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-[1.3rem] sm:text-[2.2rem] font-bold tracking-tight text-white leading-tight">
            Our <span className="text-[#e05609]">Core Services</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl font-normal">
            Five integrated disciplines. One trusted partner.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. SERVICES GRID WITH FRAMER MOTION STAGGER                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Link
                  to={service.href}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative rounded-xl p-6 sm:p-7 min-h-[250px] sm:min-h-[270px] flex flex-col justify-between overflow-hidden cursor-pointer block text-inherit no-underline transition-colors duration-200 ${
                    isActive
                      ? "border border-[#e05609] bg-[#1a1716]"
                      : "border border-neutral-800/90 bg-[#141417] hover:border-neutral-700"
                  }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      onError={(e) => {
                        if (service.fallback && e.currentTarget.src !== service.fallback) {
                          e.currentTarget.src = service.fallback;
                        }
                      }}
                      className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle Gradient for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />
                  </div>

                  {/* --- Top: Icon Badge & Arrow Link --- */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                        isActive
                          ? "bg-[#e05609] text-white shadow-md shadow-orange-500/20"
                          : "bg-[#221a16] border border-orange-900/30 text-[#e05609] group-hover:border-[#e05609]/50"
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                    </div>

                    {/* Corner Arrow Indicator */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-opacity duration-150 ${
                        isActive
                          ? "bg-[#e05609] text-white opacity-100"
                          : "text-gray-500 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* --- Bottom: Title & Description --- */}
                  <div className="relative z-10 space-y-2 mt-5">
                    <h3
                      className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-150 ${
                        isActive ? "text-[#e05609]" : "text-white group-hover:text-[#e05609]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed line-clamp-2 font-normal">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;