import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../Common/PageHero";
import AboutCTA from "../AboutComponents/AboutCTA";
import { servicesData } from "../../data/servicesData";
import ServiceQuoteModal from "./ServiceQuoteModal";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiAward,
  FiClock,
  FiShield,
} from "react-icons/fi";
import {
  FaPencilAlt,
  FaCheck,
  FaCube,
  FaRulerCombined,
  FaBolt,
  FaWater,
  FaTree,
  FaFileAlt,
  FaBuilding,
  FaCouch,
  FaLayerGroup,
  FaCompass,
  FaHome,
  FaIndustry,
  FaClipboardCheck,
  FaHammer,
  FaTasks,
  FaDraftingCompass,
  FaHardHat,
  FaFire,
  FaBars,
  FaCogs,
  FaBorderAll,
} from "react-icons/fa";

// Sub-Service Icon Component Mapper
const renderSubIcon = (iconName) => {
  switch (iconName) {
    case "pencil":
      return <FaPencilAlt className="text-base" />;
    case "check":
      return <FaCheck className="text-base" />;
    case "structure":
      return <FaCube className="text-base" />;
    case "ruler":
      return <FaRulerCombined className="text-base" />;
    case "electrical":
      return <FaBolt className="text-base" />;
    case "plumbing":
      return <FaWater className="text-base" />;
    case "landscape":
      return <FaTree className="text-base" />;
    case "submission":
      return <FaFileAlt className="text-base" />;
    case "exterior":
      return <FaBuilding className="text-base" />;
    case "interior":
      return <FaCouch className="text-base" />;
    case "elevation":
      return <FaLayerGroup className="text-base" />;
    case "compass":
      return <FaCompass className="text-base" />;
    case "home":
      return <FaHome className="text-base" />;
    case "building":
      return <FaBuilding className="text-base" />;
    case "industry":
      return <FaIndustry className="text-base" />;
    case "clipboard":
      return <FaClipboardCheck className="text-base" />;
    case "hammer":
      return <FaHammer className="text-base" />;
    case "tasks":
      return <FaTasks className="text-base" />;
    case "drafting":
      return <FaDraftingCompass className="text-base" />;
    case "hardhat":
      return <FaHardHat className="text-base" />;
    case "fire":
      return <FaFire className="text-base" />;
    case "bars":
      return <FaBars className="text-base" />;
    case "cogs":
      return <FaCogs className="text-base" />;
    case "border":
      return <FaBorderAll className="text-base" />;
    default:
      return <FaCube className="text-base" />;
  }
};

const ServiceDetailView = () => {
  const { slug } = useParams();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubService, setSelectedSubService] = useState("");

  const path = location.pathname.toLowerCase();

  // Robust matching for any service route or slug
  const currentService =
    servicesData.find((s) => {
      if (slug && s.id.toLowerCase() === slug.toLowerCase()) return true;
      if (s.route.toLowerCase() === path) return true;
      if (s.routes?.some((r) => r.toLowerCase() === path)) return true;
      if (path.includes(s.id.toLowerCase())) return true;
      return false;
    }) || servicesData[0];

  const handleOpenQuote = (subTitle) => {
    setSelectedSubService(subTitle || "");
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* 1. Top Page Hero Section */}
      <PageHero
        title={currentService.title}
        highlightWord="Services"
        subtitle={currentService.shortDesc}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: currentService.title },
        ]}
        bgImage={currentService.image}
      />

      {/* 2. Main Content & Sidebar Section */}
      <section className="py-14 sm:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* ========================================================= */}
          {/* LEFT MAIN CONTENT (8 COLS)                                */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-8 space-y-10"
          >
            {/* Service Overview Heading & Paragraphs */}
            <div className="space-y-4 text-left">
              <h2 className="text-[1.3rem] sm:text-[2.2rem] font-extrabold text-gray-950 tracking-tight">
                Service Overview
              </h2>
              <div className="w-16 h-1 bg-[#e05609] rounded-full mb-4" />

              <div className="space-y-3.5 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                {currentService.overviewParagraphs ? (
                  currentService.overviewParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <>
                    <p>
                      We provide end-to-end {currentService.title.toLowerCase()}{" "}
                      solutions from concept to execution. Our expert engineering
                      team uses state-of-the-art methodology to create designs and
                      structures that are both aesthetically pleasing and
                      structurally sound.
                    </p>
                    <p>
                      At DSS Infrabuild, we understand that every project is
                      unique. Our team works closely with clients to understand
                      requirements and deliver solutions that exceed expectations.
                      With 18+ years of experience, we bring expertise and
                      reliability to every project.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Our Services Sub-Cards Section */}
            <div className="space-y-6 text-left pt-2">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight">
                  Our {currentService.title.replace(/\s*Services$/i, "")} Services
                </h3>
                <div className="w-20 h-1 bg-[#e05609] rounded-full mt-2" />
              </div>

              {/* Sub-Service Cards Grid (Exact Card Design Kept Intact) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentService.subServices?.map((sub, idx) => (
                  <div
                    key={sub.id || idx}
                    onClick={() => handleOpenQuote(sub.title)}
                    className="bg-white rounded-2xl border border-gray-200/90 shadow-xs hover:border-[#e05609] transition-colors duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top Blueprint/Card Image with Smooth Hover Zoom */}
                    <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-gray-100">
                      <img
                        src={sub.image || currentService.image}
                        alt={sub.title}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src =
                            "/assets/projects_media/project_media_49.jpg";
                        }}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>

                    {/* Center Overlapping Floating Icon Badge */}
                    <div className="relative -mt-6 flex justify-center z-10">
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-100 shadow-md group-hover:border-[#e05609] group-hover:shadow-lg flex items-center justify-center text-[#e05609] group-hover:bg-[#e05609] group-hover:text-white transition-all duration-300">
                        {renderSubIcon(sub.icon)}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 pt-2 pb-4 text-center flex flex-col items-center">
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm sm:text-[15px] text-gray-900 group-hover:text-[#e05609] transition-colors leading-tight">
                          {sub.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-normal">
                          {sub.desc}
                        </p>
                      </div>

                      {/* Action Link: Get Quote */}
                      <div className="mt-2.5">
                        <span className="text-xs font-bold text-[#e05609] group-hover:underline inline-flex items-center justify-center gap-1 group-hover:gap-1.5 transition-all">
                          <span>Get Quote</span>
                          <span>→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT SIDEBAR (4 COLS - MATCHING REFERENCE)               */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 space-y-6 text-left"
          >
            {/* 1. GET IN TOUCH CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-950 border-b border-gray-100 pb-3">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Call Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiPhone className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Call Us
                    </span>
                    <a
                      href="tel:+917393056555"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#e05609] transition-colors"
                    >
                      +91 73930 56555
                    </a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMail className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Email Us
                    </span>
                    <a
                      href="mailto:dssfabinteriors@gmail.com"
                      className="text-xs sm:text-sm text-gray-600 hover:text-[#e05609] transition-colors break-all"
                    >
                      dssfabinteriors@gmail.com
                    </a>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiMapPin className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block">
                      Visit Us
                    </span>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. WHY CHOOSE US? CARD */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-gray-950 border-b border-gray-100 pb-3">
                Why Choose Us?
              </h3>

              <div className="space-y-4">
                {/* 18+ Years Experience */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiAward className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      18+ Years Experience
                    </span>
                    <p className="text-xs text-gray-500">
                      Trusted by 100+ clients
                    </p>
                  </div>
                </div>

                {/* 98% On-Time Delivery */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiClock className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      98% On-Time Delivery
                    </span>
                    <p className="text-xs text-gray-500">
                      Projects delivered as promised
                    </p>
                  </div>
                </div>

                {/* Quality Guaranteed */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FiShield className="text-base" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-gray-900 block">
                      Quality Guaranteed
                    </span>
                    <p className="text-xs text-gray-500">
                      Premium materials & workmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom AboutUs CTA Banner */}
      <AboutCTA />

      {/* 4. Interactive Quote Request Modal */}
      <ServiceQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={currentService.title}
        subServiceTitle={selectedSubService}
      />
    </div>
  );
};

export default ServiceDetailView;
