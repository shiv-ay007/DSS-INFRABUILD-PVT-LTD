import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { CgSpinner } from "react-icons/cg";
import toast from "react-hot-toast";

const WEB3FORMS_ACCESS_KEY = "27f30e7d-7b51-4e9f-b8c5-afd41a015e89";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      toast.error("Please agree to the Privacy Policy before submitting.");
      return;
    }

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "DSS Infrabuild Contact Form",
          subject: `New Project Inquiry: ${formData.name} ${formData.service ? `(${formData.service})` : ""}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service || "General Inquiry",
          message: formData.message,
          
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! Our team will contact you soon.", {
          id: toastId,
        });
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast.error(data.message || "Failed to send message. Please try again.", {
          id: toastId,
        });
      }
    } catch (err) {
      console.error("Web3Forms submission error:", err);
      toast.error("Network error. Please check your internet connection.", {
        id: toastId,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-lg text-left"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-950">
          Send us a <span className="text-[#e05609]">message</span>
        </h3>
      </div>

      {submitted ? (
        <div className="bg-orange-50 border border-orange-200 p-8 rounded-xl text-center space-y-3">
          <div className="w-14 h-14 bg-[#e05609] text-white rounded-full flex items-center justify-center mx-auto text-2xl">
            ✓
          </div>
          <h4 className="text-xl font-bold text-gray-900">
            Message Sent Successfully!
          </h4>
          <p className="text-sm text-gray-700 max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our engineering team has
            received your message and will respond shortly via email or phone.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-4 text-xs font-bold text-[#e05609] hover:underline cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Full Name & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-[#e05609]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-[#fbfbfb] border border-gray-300/90 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-[#e05609]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-[#e05609]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-[#fbfbfb] border border-gray-300/90 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-[#e05609]"
              />
            </div>
          </div>

          {/* Row 2: Phone Number & Service Interested In */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-[#fbfbfb] border border-gray-300/90 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-[#e05609]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Service Interested In
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full bg-[#fbfbfb] border border-gray-300/90 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-700 focus:bg-white focus:outline-none focus:border-[#e05609]"
              >
                <option value="">Select a service</option>
                <option value="Construction">Civil & Commercial Construction</option>
                <option value="Architectural Planning">Architectural & 3D BIM Design</option>
                <option value="Interior Design">Luxury Interior Fit-Outs</option>
                <option value="Fabrication Works">Structural Steel & PEB Sheds</option>
                <option value="Consultancy">Project Consultancy & BOQ</option>
              </select>
            </div>
          </div>

          {/* Row 3: Your Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1.5">
              Your Message <span className="text-[#e05609]">*</span>
            </label>
            <textarea
              rows="4"
              required
              placeholder="Tell us about your project or inquiry..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-[#fbfbfb] border border-gray-300/90 rounded-lg px-4 py-2.5 text-xs sm:text-sm text-gray-900 focus:bg-white focus:outline-none focus:border-[#e05609]"
            ></textarea>
          </div>

          {/* Checkbox: Privacy Policy consent */}
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="checkbox"
              id="privacyConsent"
              required
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 text-[#e05609] focus:ring-[#e05609] rounded border-gray-300 accent-[#e05609] cursor-pointer"
            />
            <label
              htmlFor="privacyConsent"
              className="text-xs text-gray-600 cursor-pointer"
            >
              I agree to the{" "}
              <Link
                to="/privacy-policy"
                className="text-[#e05609] hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and consent to being contacted.
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={!isSubmitting ? { scale: 1.01 } : {}}
            whileTap={!isSubmitting ? { scale: 0.99 } : {}}
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#e05609] hover:bg-[#c94905] active:bg-[#b53f03] disabled:opacity-70 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <CgSpinner className="animate-spin text-lg" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <FiSend className="text-sm" />
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
