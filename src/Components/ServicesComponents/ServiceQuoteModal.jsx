import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSend, FiLock, FiCheckCircle, FiChevronDown, FiCheck } from "react-icons/fi";
import { servicesData } from "../../data/servicesData";
import toast from "react-hot-toast";

const WEB3FORMS_ACCESS_KEY = "27f30e7d-7b51-4e9f-b8c5-afd41a015e89";

const ServiceQuoteModal = ({
  isOpen,
  onClose,
  serviceTitle = "",
  subServiceTitle = "",
  showDontShowAgain = false,
}) => {
  // Format initial service selection string
  const initialSelection = serviceTitle
    ? subServiceTitle
      ? `${serviceTitle} - ${subServiceTitle}`
      : serviceTitle
    : "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: initialSelection,
    message: serviceTitle
      ? `I am interested in ${serviceTitle}${
          subServiceTitle ? ` - ${subServiceTitle}` : ""
        } service. Please provide me with a quote.`
      : "",
    dontShowAgain: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const mainServicesList = [
    "Architectural Planning",
    "Construction",
    "Interior Design",
    "Fabrication Works",
    "Consultancy",
    "Other",
  ];

  // Options to display in dropdown
  const dropdownOptions = [
    ...(formData.service && !mainServicesList.includes(formData.service)
      ? [formData.service]
      : []),
    ...mainServicesList,
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync state whenever modal opens or props change
  useEffect(() => {
    if (isOpen) {
      let isSavedDontShow = false;
      try {
        isSavedDontShow =
          localStorage.getItem("dss_quote_modal_dont_show") === "true";
      } catch (err) {
        console.error(err);
      }

      const selectedValue = serviceTitle
        ? subServiceTitle
          ? `${serviceTitle} - ${subServiceTitle}`
          : serviceTitle
        : "";

      setFormData((prev) => ({
        ...prev,
        service: selectedValue,
        message: serviceTitle
          ? `I am interested in ${serviceTitle}${
              subServiceTitle ? ` - ${subServiceTitle}` : ""
            } service. Please provide me with a quote.`
          : prev.message || "",
        dontShowAgain: isSavedDontShow,
      }));
      setSubmitted(false);
      setIsDropdownOpen(false);
    }
  }, [serviceTitle, subServiceTitle, isOpen]);

  // Handle escape key & prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      dontShowAgain: checked,
    }));
    try {
      if (checked) {
        localStorage.setItem("dss_quote_modal_dont_show", "true");
      } else {
        localStorage.removeItem("dss_quote_modal_dont_show");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectService = (selectedVal) => {
    setFormData({
      ...formData,
      service: selectedVal,
      message:
        selectedVal === "Other"
          ? "I have custom requirements for my project. Please provide me with a consultation and quote."
          : selectedVal
          ? `I am interested in ${selectedVal} service. Please provide me with a quote.`
          : "",
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading("Sending quote request...");

    if (showDontShowAgain && formData.dontShowAgain) {
      try {
        localStorage.setItem("dss_quote_modal_dont_show", "true");
      } catch (err) {
        console.error(err);
      }
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "DSS Infrabuild Quote Request",
          subject: `New Quote Request: ${formData.fullName} (${
            formData.service || "General Inquiry"
          })`,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "General Construction & Engineering",
          message: formData.message || "Request for consultation and quote.",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          "Quote request sent successfully! We will contact you shortly.",
          {
            id: toastId,
          }
        );
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
        }, 2500);
      } else {
        toast.error(
          data.message || "Failed to send quote request. Please try again.",
          {
            id: toastId,
          }
        );
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      toast.error("Network error. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs select-none overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 sm:p-7 overflow-hidden my-auto max-h-[95vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
              title="Close"
            >
              <FiX className="text-xl" />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3.5"
              >
                <div className="w-16 h-16 bg-[#e05609]/15 text-[#e05609] rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm">
                  <FiCheckCircle />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Request Sent Successfully!
                </h3>
                <p className="text-sm text-gray-600 max-w-sm mx-auto">
                  Thank you, <b>{formData.fullName || "valued client"}</b>. Our
                  engineering team will contact you shortly with your customized
                  quote.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Modal Header */}
                <div className="text-left space-y-1.5 pr-6">
                  <h2 className="text-2xl sm:text-[26px] font-extrabold text-gray-950 tracking-tight leading-snug">
                    Ready to Build Your{" "}
                    <span className="text-[#e05609]">Dream Project?</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Get a{" "}
                    <span className="text-[#e05609] font-bold">
                      FREE consultation
                    </span>{" "}
                    and{" "}
                    <span className="font-bold text-gray-900">
                      competitive quote
                    </span>{" "}
                    from our expert team.
                  </p>
                </div>

                {/* Modal Form */}
                <form onSubmit={handleSubmit} className="mt-4 sm:mt-5 space-y-3 text-left">
                  {/* Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e05609]/30 focus:border-[#e05609] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e05609]/30 focus:border-[#e05609] transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e05609]/30 focus:border-[#e05609] transition-all"
                    />
                  </div>

                  {/* Custom Styled Dropdown With Pure Website Orange Highlight */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Service Interested In
                    </label>

                    {/* Dropdown Button */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen((prev) => !prev)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-left text-xs sm:text-sm bg-white flex items-center justify-between transition-all cursor-pointer focus:outline-none ${
                        isDropdownOpen
                          ? "border-[#e05609] ring-2 ring-[#e05609]/20"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <span className={formData.service ? "text-gray-900 font-medium" : "text-gray-400"}>
                        {formData.service || "Select a service..."}
                      </span>
                      <FiChevronDown
                        className={`text-[#e05609] text-base transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Options Popup */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden py-1 max-h-56 overflow-y-auto"
                        >
                          {/* Default Reset Option */}
                          <button
                            type="button"
                            onClick={() => handleSelectService("")}
                            className="w-full text-left px-4 py-2.5 text-xs sm:text-sm text-gray-400 hover:bg-orange-50 hover:text-[#e05609] transition-colors cursor-pointer"
                          >
                            Select a service...
                          </button>

                          {/* Service Options List */}
                          {dropdownOptions.map((serviceName) => {
                            const isSelected = formData.service === serviceName;

                            return (
                              <button
                                key={serviceName}
                                type="button"
                                onClick={() => handleSelectService(serviceName)}
                                className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected
                                    ? "bg-[#e05609] text-white font-semibold"
                                    : "text-gray-800 hover:bg-[#e05609] hover:text-white"
                                }`}
                              >
                                <span>{serviceName}</span>
                                {isSelected && (
                                  <FiCheck className="text-white text-base flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows="2"
                      required
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#e05609]/30 focus:border-[#e05609] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] text-white font-bold py-2.5 sm:py-3 px-6 rounded-lg text-sm sm:text-base flex items-center justify-center space-x-2 shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer disabled:opacity-75"
                  >
                    <FiSend className="text-base" />
                    <span>
                      {isSubmitting ? "Sending..." : "Send Request"}
                    </span>
                  </motion.button>

                  {/* Footer Security Note & Conditional Checkbox */}
                  <div className={`pt-1.5 flex flex-col sm:flex-row items-center ${showDontShowAgain ? "justify-between" : "justify-center"} text-xs text-gray-500 gap-2`}>
                    <div className="flex items-center space-x-1.5">
                      <FiLock className="text-gray-400 text-xs" />
                      <span>Your information is secure & confidential</span>
                    </div>

                    {showDontShowAgain && (
                      <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.dontShowAgain}
                          onChange={handleCheckboxChange}
                          className="rounded border-gray-300 text-[#e05609] focus:ring-[#e05609]"
                        />
                        <span className="text-[11px] text-gray-500">
                          Don't show this again
                        </span>
                      </label>
                    )}
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceQuoteModal;

