import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";

const ContactInfoCards = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-between h-full space-y-7 text-left pr-0 lg:pr-4"
    >
      {/* Top Header */}
      <div className="space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
          Let's discuss your <span className="text-[#e05609]">next project</span>
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-lg">
          Whether you have a question about our services, need a quote, or want
          to discuss a potential project — our team is ready to help.
        </p>
      </div>

      {/* Contact Details List (Matching Reference Screenshot) */}
      <div className="space-y-5">
        {/* 1. Head Office */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/90 text-[#e05609] border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <FiMapPin className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-900 tracking-wider">
              Head Office
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-snug">
              149/148, near crystal view apartment, Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow, Uttar Pradesh 226028
            </p>
          </div>
        </div>

        {/* 2. Phone Numbers */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/90 text-[#e05609] border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <FiPhone className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-900 tracking-wider">
              Phone Numbers
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 space-x-2 font-medium">
              <a
                href="tel:+917393056555"
                className="hover:text-[#e05609] transition-colors"
              >
                +91 73930 56555
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="tel:+916386901011"
                className="hover:text-[#e05609] transition-colors"
              >
                +91 63869 01011
              </a>
            </p>
          </div>
        </div>

        {/* 3. Email Us */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/90 text-[#e05609] border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <FiMail className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-900 tracking-wider">
              Email Us
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              <a
                href="mailto:dssfabinteriors@gmail.com"
                className="hover:text-[#e05609] transition-colors font-medium"
              >
                dssfabinteriors@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* 4. Working Hours */}
        <div className="flex items-start space-x-4">
          <div className="w-11 h-11 rounded-xl bg-orange-50/90 text-[#e05609] border border-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
            <FiClock className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs uppercase font-bold text-gray-900 tracking-wider">
              Working Hours
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-xs text-gray-500">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Social Media Icons (Directly Aligned at Bottom of Left Column) */}
      <div className="pt-2">
        <div className="flex items-center space-x-3">
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-gray-100/90 hover:bg-[#e05609] text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <FaLinkedinIn className="text-sm" />
          </motion.a>

          {/* Twitter / X */}
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter X"
            className="w-10 h-10 rounded-full bg-gray-100/90 hover:bg-[#e05609] text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <FaXTwitter className="text-sm" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-gray-100/90 hover:bg-[#e05609] text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <FaInstagram className="text-sm" />
          </motion.a>

          {/* YouTube */}
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full bg-gray-100/90 hover:bg-[#e05609] text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <FaYoutube className="text-sm" />
          </motion.a>

          {/* Facebook */}
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-gray-100/90 hover:bg-[#e05609] text-gray-600 hover:text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
          >
            <FaFacebookF className="text-sm" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoCards;
