import React from "react";
import { Link } from "react-router-dom";
import DSSLogoImg from "../assets/logo.png";
import CodeCrafterLogo from "../assets/CodeCrafterlogo.png";

// --- Social Icons (Zero NPM Dependencies) ---
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XTwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.8 5H18V0h-3.8C10.6 0 9 1.6 9 4.667V8z" />
  </svg>
);

// --- Header Vector Icons ---
const LinkIcon = ({ className = "w-4 h-4 text-[#e05609]" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const ContactCardIcon = ({ className = "w-4 h-4 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0-3h2v2H6zm0 6h2v2H6zm4-6h8v2h-8zm0 3h8v2h-8zm0 3h5v2h-5z" />
  </svg>
);

const MapMarkerIcon = ({ className = "w-4 h-4 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

const MailIcon = ({ className = "w-4 h-4 text-[#e05609]" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-3.5 h-3.5 text-[#e05609]" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-300 pt-12 sm:pt-14 pb-4 sm:pb-6 border-t border-neutral-800 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================================= */}
        {/* 1. TOP 4 COLUMNS GRID                                                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-6 sm:pb-8">
          
          {/* --- COLUMN 1: LOGO CARD & SOCIAL (3 Cols) --- */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3">
            {/* White Logo Card */}
            <div className="bg-white rounded-lg p-2.5 inline-block w-full max-w-[200px] shadow-sm">
              <img
                src={DSSLogoImg}
                alt="DSS INFRABUILD PVT. LTD."
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-xs">
              Engineering infrastructure that outlasts timelines and exceeds expectations. 18 years. 9 cities. Zero compromise.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700/60 bg-[#242424] text-gray-400 hover:text-white hover:border-[#e05609] hover:bg-[#e05609]/10 transition-all duration-200"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter X"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700/60 bg-[#242424] text-gray-400 hover:text-white hover:border-[#e05609] hover:bg-[#e05609]/10 transition-all duration-200"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700/60 bg-[#242424] text-gray-400 hover:text-white hover:border-[#e05609] hover:bg-[#e05609]/10 transition-all duration-200"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700/60 bg-[#242424] text-gray-400 hover:text-white hover:border-[#e05609] hover:bg-[#e05609]/10 transition-all duration-200"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-700/60 bg-[#242424] text-gray-400 hover:text-white hover:border-[#e05609] hover:bg-[#e05609]/10 transition-all duration-200"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* --- COLUMN 2: QUICK LINKS (2 Cols) --- */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-3">
            <div className="flex items-center space-x-2 text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
              <LinkIcon className="w-4 h-4" />
              <span>QUICK LINKS</span>
            </div>

            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Leadership Team", href: "/leadership" },
                { name: "Our Projects", href: "/projects" },
                { name: "Gallery", href: "/gallery" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                    className="group inline-flex items-center space-x-2 text-[13.5px] text-gray-300 hover:text-[#e05609] transition-colors duration-150 cursor-pointer"
                  >
                    <ChevronRightIcon className="w-3 h-3 text-[#e05609] transition-transform duration-150 group-hover:translate-x-0.5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: CONTACT INFO (4 Cols) --- */}
          <div className="lg:col-span-3 xl:col-span-4 space-y-3">
            <div className="flex items-center space-x-2 text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
              <ContactCardIcon className="w-4 h-4" />
              <span>CONTACT INFO</span>
            </div>

            <div className="space-y-3 text-[13px]">
              {/* Phone Numbers */}
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <PhoneIcon className="w-3.5 h-3.5 text-[#e05609]" />
                  <span>Contact Numbers</span>
                </div>
                <p className="pl-5.5 text-[#e05609] font-medium text-[13px]">
                  <a href="tel:+917393056555" className="hover:underline">+91 73930 56555</a>
                  <span className="text-gray-500 mx-1.5">|</span>
                  <a href="tel:+916386901011" className="hover:underline">+91 63869 01011</a>
                </p>
              </div>

              {/* Email */}
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <MailIcon className="w-3.5 h-3.5 text-[#e05609]" />
                  <span>Email</span>
                </div>
                <p className="pl-5.5">
                  <a
                    href="mailto:dssfabinteriors@gmail.com"
                    className="text-[#e05609] font-medium hover:underline"
                  >
                    dssfabinteriors@gmail.com
                  </a>
                </p>
              </div>

              {/* Head Office Address */}
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2 text-white font-semibold">
                  <MapMarkerIcon className="w-3.5 h-3.5 text-[#e05609]" />
                  <span>Head Office</span>
                </div>
                <p className="pl-5.5 text-gray-400 leading-relaxed text-[12.5px]">
                  149/148, near crystal view apartment, Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow, Uttar Pradesh 226028
                </p>
              </div>
            </div>
          </div>

          {/* --- COLUMN 4: FIND US (GOOGLE MAP EMBED) (3 Cols) --- */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-3">
            <div className="flex items-center space-x-2 text-[#e05609] font-bold text-xs sm:text-sm tracking-wider uppercase">
              <MapMarkerIcon className="w-4 h-4" />
              <span>FIND US</span>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="relative w-full h-[190px] rounded-xl overflow-hidden shadow-lg border border-neutral-700/60 bg-neutral-900 group">
              <iframe
                title="DSS Infrabuild Location Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14235.59547390907!2d81.024602!3d26.874954000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be303baeb6379%3A0x7cafaa0c2a0bc9b1!2sDSS%20Infrabuild%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1786687293220!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.05] brightness-95"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

              {/* Top Left 'Maps ↗' Floating Badge */}
              <a
                href="https://maps.app.goo.gl/rpf2WcT18jLFP9fY6"
                target="_blank"
                rel="noreferrer"
                className="absolute top-2.5 left-2.5 bg-white/95 text-blue-600 hover:text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded shadow flex items-center space-x-1 backdrop-blur-sm z-10"
              >
                <span>Maps</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. BOTTOM COPYRIGHT ROW                                                   */}
        {/* ========================================================================= */}
        <div className="border-t border-neutral-800/80 pt-4 pb-2 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] sm:text-[12.5px] text-gray-400">
          
          {/* Copyright text */}
          <div>
            © 2026 DSS Infrabuild Pvt. Ltd. All rights reserved.
          </div>

          {/* Center Developer Credit Badge with CodeCrafter Logo and Link */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-400">
            <span className="text-[#e05609] font-bold font-mono text-sm">&lt;/&gt;</span>
            <span>Precision Crafted with Digital Intelligence by</span>
            <a
              href="https://codecrafter.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:opacity-90 hover:scale-105 transition-all duration-200"
              title="Visit CodeCrafter"
            >
              <img
                src={CodeCrafterLogo}
                alt="CodeCrafter"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain inline-block filter brightness-105 drop-shadow-sm"
              />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;