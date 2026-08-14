import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData";
import {
  FaHardHat,
  FaHome,
  FaBuilding,
  FaIndustry,
  FaCouch,
  FaDraftingCompass,
} from "react-icons/fa";

// Service Icon Component Mapper
const renderServiceIcon = (iconType) => {
  switch (iconType) {
    case "hardhat":
      return <FaHardHat className="text-xl sm:text-2xl text-white" />;
    case "home":
      return <FaHome className="text-xl sm:text-2xl text-white" />;
    case "building":
      return <FaBuilding className="text-xl sm:text-2xl text-white" />;
    case "industry":
      return <FaIndustry className="text-xl sm:text-2xl text-white" />;
    case "interior":
      return <FaCouch className="text-xl sm:text-2xl text-white" />;
    case "consultancy":
    default:
      return <FaDraftingCompass className="text-xl sm:text-2xl text-white" />;
  }
};

const ServicesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 sm:py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9 text-left">
        {servicesData.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            onClick={() => navigate(service.route)}
            className="group bg-white rounded-2xl border border-gray-200/90 hover:border-orange-300 shadow-sm transition-colors duration-200 relative flex flex-col justify-between cursor-pointer"
          >
            {/* Top Image Section with Fully Visible Floating Icon */}
            <div className="relative w-full">
              {/* Image Container with Smooth Hover Zoom */}
              <div className="h-56 sm:h-64 w-full rounded-t-2xl overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  onError={(e) => {
                    if (service.fallback) {
                      e.currentTarget.src = service.fallback;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Fully Visible Floating Circular Orange Icon */}
              <div className="absolute right-5 -bottom-6 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#e05609] text-white flex items-center justify-center shadow-md border-4 border-white z-30">
                {renderServiceIcon(service.iconType)}
              </div>
            </div>

            {/* Card Body Content with Tightened Natural Spacing */}
            <div className="p-6 pt-7 sm:p-7 sm:pt-8 flex-grow flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#e05609] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Link: Learn More */}
              <div className="pt-2">
                <div className="inline-flex items-center space-x-1.5 text-[#e05609] group-hover:text-[#c94905] font-bold text-xs sm:text-sm transition-colors">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
