import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DSSLogoImg from "../assets/logo.png";

// --- Custom Inline SVG Icons ---
const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7"></path>
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
  </svg>
);

// Services Icons
const ArchitectureIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 7v10" />
    <path d="M8 15h8" />
  </svg>
);

const ConstructionIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18h20" />
    <path d="M4 18v-5a8 8 0 0 1 16 0v5" />
    <path d="M9 13V8h6v5" />
  </svg>
);

const InteriorDesignIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const FabricationIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="M4 20V10l4 4V10l4 4V10l4 4V4h4v16" />
  </svg>
);

const ConsultancyIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// About Icons
const AboutUsIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 9h6v6H9z" />
    <path d="M9 3v6" />
    <path d="M15 3v6" />
  </svg>
);

const LeadershipIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CareersIcon = ({ className = "w-5 h-5 text-[#e05609]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

// Menu Data Definitions
const navigationData = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    submenu: [
      {
        name: "About Us",
        href: "/about",
        description: "Know our legacy and commitment",
        icon: AboutUsIcon,
      },
      {
        name: "Leadership Team",
        href: "/leadership",
        description: "Visionary leaders guiding our growth",
        icon: LeadershipIcon,
      },
      {
        name: "Careers",
        href: "/careers",
        description: "Join our team of engineering experts",
        icon: CareersIcon,
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenuTitle: "CORE SERVICES",
    submenu: [
      {
        name: "Architectural Planning",
        href: "/services/architectural-planning",
        description: "Modern architectural plans & layouts",
        icon: ArchitectureIcon,
      },
      {
        name: "Construction",
        href: "/services/construction",
        description: "Residential & commercial construction",
        icon: ConstructionIcon,
      },
      {
        name: "Interior Design",
        href: "/services/interior-design",
        description: "Aesthetic & functional modern interiors",
        icon: InteriorDesignIcon,
      },
      {
        name: "Fabrication Works",
        href: "/services/fabrication-works",
        description: "High-grade industrial structural fabrication",
        icon: FabricationIcon,
      },
      {
        name: "Consultancy",
        href: "/services/consultancy",
        description: "Expert engineering & project consultancy",
        icon: ConsultancyIcon,
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Scroll detection for fixed navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop Hover handlers with smooth buffer
  const handleMouseEnter = (name) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === name ? null : name);
  };

  // Scroll to top on navigation link click
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "shadow-md py-1 border-b border-gray-200"
          : "shadow-sm py-1.5 sm:py-2 border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-[80px]">
          
          {/* ========================================================= */}
          {/* 1. LOGO SECTION (Aligned with page content)               */}
          {/* ========================================================= */}
          <div className="flex-shrink-0 flex items-center h-full py-0.5">
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center h-full group focus:outline-none cursor-pointer"
              title="DSS INFRABUILD PVT. LTD."
            >
              <img
                src={DSSLogoImg}
                alt="DSS INFRABUILD PVT. LTD."
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* ========================================================================= */}
          {/* 2. CENTER NAVIGATION LINKS (Large, Bold & Crisp)                          */}
          {/* ========================================================================= */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navigationData.map((item) => {
              const hasSubmenu = Boolean(item.submenu);
              const isOpen = activeDropdown === item.name;

              if (hasSubmenu) {
                return (
                  <div
                    key={item.name}
                    className="relative py-2"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Dropdown Menu Trigger: Clickable Link to main page */}
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center space-x-1.5 text-[15.5px] xl:text-[16.5px] font-medium tracking-wide transition-colors duration-200 focus:outline-none cursor-pointer ${
                        isOpen
                          ? "text-[#e05609]"
                          : "text-gray-700 hover:text-[#e05609]"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180 text-[#e05609]"
                            : "text-gray-500"
                        }`}
                      />
                    </Link>

                    {/* Submenu Dropdown Card */}
                    {isOpen && (
                      <div
                        className="absolute left-0 top-full pt-2.5 w-72 z-50"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100/90 p-3 transition-all duration-200">
                          {/* Submenu Title if present (e.g. CORE SERVICES) */}
                          {item.submenuTitle && (
                            <div className="text-[11px] font-bold tracking-wider text-[#e05609] uppercase px-2.5 pt-1 pb-2 border-b border-gray-100 mb-1">
                              {item.submenuTitle}
                            </div>
                          )}

                          {/* Submenu items list with Icons */}
                          <div className="space-y-0.5">
                            {item.submenu.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  onClick={handleLinkClick}
                                  className="group flex items-center space-x-3 px-2.5 py-2 rounded-md transition-colors duration-150 hover:bg-orange-50/70 cursor-pointer"
                                >
                                  <div className="flex-shrink-0">
                                    <Icon className="w-4 h-4 text-[#e05609]" />
                                  </div>
                                  <span className="text-[13.5px] font-medium text-gray-700 group-hover:text-[#e05609] transition-colors">
                                    {subItem.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="text-[15.5px] xl:text-[16.5px] font-medium tracking-wide text-gray-700 hover:text-[#e05609] transition-colors duration-200 px-1 py-2 cursor-pointer"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* ========================================================================= */}
          {/* 3. RIGHT SECTION (PHONE NUMBER + GET QUOTE CTA BUTTON)                    */}
          {/* ========================================================================= */}
          <div className="hidden sm:flex items-center space-x-6 xl:space-x-8">
            {/* Phone Call Link */}
            <a
              href="tel:+917393056555"
              className="flex items-center space-x-2 text-gray-900 hover:text-[#e05609] transition-colors duration-200 group"
            >
              <div className="text-[#e05609] transition-transform duration-200 group-hover:scale-105">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <span className="text-[15px] xl:text-[16px] font-bold tracking-tight text-gray-900">
                +91 73930 56555
              </span>
            </a>

            {/* Get Quote Orange Button */}
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="inline-flex items-center justify-center space-x-2 bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white px-5 py-2.5 rounded-md text-[14.5px] xl:text-[15px] font-semibold tracking-wide shadow-sm transition-colors duration-150 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* ========================================================================= */}
          {/* 4. MOBILE HAMBURGER BUTTON                                                */}
          {/* ========================================================================= */}
          <div className="flex items-center lg:hidden space-x-3">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="sm:hidden inline-flex items-center justify-center bg-[#e05609] text-white px-3.5 py-2 rounded-lg text-xs font-semibold cursor-pointer"
            >
              Get Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-800 hover:text-[#e05609] hover:bg-gray-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. MOBILE COLLAPSIBLE DRAWER                                              */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-5 pt-4 pb-8 space-y-2 shadow-2xl max-h-[85vh] overflow-y-auto">
          {navigationData.map((item) => {
            const hasSubmenu = Boolean(item.submenu);
            const isOpen = mobileActiveSubmenu === item.name;

            if (hasSubmenu) {
              return (
                <div key={item.name} className="border-b border-gray-100 pb-1">
                  <div className="w-full flex items-center justify-between py-2.5 px-2 text-[16px] font-semibold text-gray-800">
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className="hover:text-[#e05609] flex-grow py-1 cursor-pointer"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="p-2 hover:text-[#e05609] cursor-pointer"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      <ChevronDownIcon
                        className={`w-4 h-4 text-[#e05609] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {isOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 bg-orange-50/40 rounded-xl mb-2">
                      {item.submenuTitle && (
                        <div className="text-[11px] font-bold tracking-wider text-[#e05609] uppercase px-2 py-1">
                          {item.submenuTitle}
                        </div>
                      )}
                      {item.submenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={handleLinkClick}
                            className="flex items-center space-x-3 px-2 py-2.5 rounded-lg text-[14.5px] font-medium text-gray-700 hover:text-[#e05609] hover:bg-orange-100/50 cursor-pointer"
                          >
                            <Icon className="w-5 h-5 text-[#e05609]" />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleLinkClick}
                className="block py-3 px-2 text-[16px] font-semibold text-gray-800 hover:text-[#e05609] border-b border-gray-100 cursor-pointer"
              >
                {item.name}
              </Link>
            );
          })}

          <div className="pt-5 space-y-3">
            <a
              href="tel:+917393056555"
              className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gray-50 text-gray-900 font-bold text-[15px] border border-gray-200"
            >
              <PhoneIcon className="w-5 h-5 text-[#e05609]" />
              <span>+91 73930 56555</span>
            </a>

            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center space-x-2 bg-[#e05609] hover:bg-[#c94905] text-white py-3.5 px-4 rounded-xl font-semibold text-[15px] shadow-md cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;