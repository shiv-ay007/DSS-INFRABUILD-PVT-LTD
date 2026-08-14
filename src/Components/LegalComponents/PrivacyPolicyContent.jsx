import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHero from "../Common/PageHero";
import ServiceQuoteModal from "../ServicesComponents/ServiceQuoteModal";
import {
  FiCalendar,
  FiPrinter,
  FiList,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const tableOfContents = [
  { id: "section-1", num: "1", title: "Information We Collect" },
  { id: "section-2", num: "2", title: "How We Use Your Information" },
  { id: "section-3", num: "3", title: "Data Protection & Security" },
  { id: "section-4", num: "4", title: "Information Sharing & Disclosure" },
  { id: "section-5", num: "5", title: "Cookies & Tracking Technologies" },
  { id: "section-6", num: "6", title: "Third-Party Links & Integrations" },
  { id: "section-7", num: "7", title: "User Rights & Data Retention" },
  { id: "section-8", num: "8", title: "Intellectual Property & Confidentiality" },
  { id: "section-9", num: "9", title: "Children's Privacy" },
  { id: "section-10", num: "10", title: "Changes to This Privacy Policy" },
  { id: "section-11", num: "11", title: "Contact Information" },
];

const PrivacyPolicyContent = () => {
  const navigate = useNavigate();
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        title="Privacy"
        highlightWord="Policy"
        subtitle="How DSS Infrabuild Pvt. Ltd. collects, manages, and safeguards your corporate and personal project data."
        breadcrumbs={[{ name: "Privacy Policy" }]}
      />

      <div className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="w-full space-y-6 sm:space-y-7">
          
          {/* ========================================================= */}
          {/* 1. TOP BAR: EFFECTIVE DATE & PRINT POLICY                 */}
          {/* ========================================================= */}
          <div className="bg-gray-50/80 border border-gray-200/80 border-l-4 border-l-[#e05609] rounded-xl px-4 sm:px-5 py-3 flex flex-wrap justify-between items-center gap-3 shadow-2xs">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-700">
              <FiCalendar className="text-[#e05609] text-base" />
              <span>Effective Date: January 1, 2024</span>
            </div>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#e05609] hover:text-[#c94905] transition-colors cursor-pointer"
            >
              <FiPrinter className="text-sm" />
              <span>Print Policy</span>
            </button>
          </div>

          {/* ========================================================= */}
          {/* 2. TABLE OF CONTENTS BOX (FULL WIDE CONTAINER)            */}
          {/* ========================================================= */}
          <div className="bg-gray-50/90 border border-gray-200/90 hover:border-orange-200 transition-colors rounded-xl p-4 sm:p-5 shadow-xs space-y-3">
            <div className="flex items-center space-x-2 text-sm sm:text-base font-extrabold text-gray-950">
              <FiList className="text-[#e05609] text-base" />
              <span>Table of Contents</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 pt-1">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-xs sm:text-sm text-gray-600 hover:text-[#e05609] transition-colors font-medium flex items-center space-x-2 cursor-pointer group"
                >
                  <span className="text-gray-400 group-hover:text-[#e05609] text-xs">
                    {item.num}.
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 3. MAIN PRIVACY POLICY SECTIONS                           */}
          {/* ========================================================= */}
          <div className="space-y-6 text-gray-700 text-xs sm:text-[13.5px] leading-relaxed">
            
            {/* Section 1 */}
            <section id="section-1" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">1.</span> Information We Collect
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                At DSS Infrabuild Pvt. Ltd., we respect your privacy and are committed to protecting any personal and commercial project information you share with us. We collect information through various interaction channels including website inquiry forms, quotation requests, resume submissions, and contractual consultations.
              </p>
              <div className="space-y-1.5 pt-1">
                <p>
                  <strong className="text-gray-900 font-bold">Personal Identification Data:</strong> Full name, official email address, phone numbers, designation, and company details.
                </p>
                <p>
                  <strong className="text-gray-900 font-bold">Project Specifications:</strong> Land dimensions, architectural CAD drawings, structural requirements, BOQ documents, target project budget, and geographical coordinates.
                </p>
                <p>
                  <strong className="text-gray-900 font-bold">Technical & Usage Information:</strong> IP address, device type, browser specifications, and usage patterns recorded via analytics to enhance user experience.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">2.</span> How We Use Your Information
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                All data collected is utilized solely for lawful commercial and engineering purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Preparing preliminary engineering feasibility assessments, BOQs, and cost estimates.</li>
                <li>Executing turnkey contracts, architectural drafting, and 3D BIM coordination.</li>
                <li>Communicating project milestone updates, site inspection reports, and safety audits.</li>
                <li>Complying with municipal building approvals, statutory tax laws, and RERA guidelines.</li>
                <li>Enhancing our website performance and tailoring technical service offerings.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">3.</span> Data Protection & Security
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                We implement industry-standard physical, electronic, and procedural safeguards (including SSL/TLS 256-bit encryption, role-based access control, and encrypted cloud storage) to protect your proprietary drawings and personal data against unauthorized access, loss, alteration, or disclosure.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">4.</span> Information Sharing & Disclosure
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                <strong className="text-gray-900 font-bold">We never sell, rent, trade, or monetize your personal or project data.</strong> We may share necessary project information only with:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Certified structural consultants, MEP engineers, and site sub-contractors directly bound by strict Non-Disclosure Agreements (NDAs).</li>
                <li>Government regulatory bodies, fire departments, or municipal corporations when required for statutory permits and building plan sanctions.</li>
                <li>Law enforcement or judicial authorities when mandated by applicable laws of India.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">5.</span> Cookies & Tracking Technologies
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Our website utilizes standard session cookies and performance telemetry to monitor page traffic, understand user navigation patterns, and maintain active form sessions. You may configure your web browser settings to refuse cookies, although certain dynamic portal features may function with reduced performance.
              </p>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">6.</span> Third-Party Links & Integrations
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Our website may contain hyperlinks to external industry resources, mapping APIs (such as Google Maps), or social media channels. DSS Infrabuild is not responsible for the privacy practices, cookie policies, or content of third-party domains.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">7.</span> User Rights & Data Retention
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Under applicable Indian data protection laws, you possess the right to request access to the personal information we hold about you, request corrections to inaccurate records, or demand the deletion of non-contractual communication data. We retain active project records for statutory warranty, audit, and tax compliance durations.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">8.</span> Intellectual Property & Confidentiality
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                All 3D elevations, structural calculations, fabrication drawings, photographs, and architectural designs displayed on this website or shared during project engagements are the exclusive intellectual property of DSS Infrabuild Pvt. Ltd. and are safeguarded under copyright and intellectual property laws.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">9.</span> Children's Privacy
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Our construction, engineering, and commercial consultancy services are targeted exclusively at adults, property owners, and corporate enterprises. We do not knowingly solicit or collect data from individuals under 18 years of age.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">10.</span> Changes to This Privacy Policy
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                DSS Infrabuild reserves the right to amend or update this Privacy Policy periodically to reflect technological advances, operational adjustments, or statutory amendments. Revised versions will be published immediately on this URL with an updated Effective Date.
              </p>
            </section>

            {/* ========================================================= */}
            {/* Section 11: CONTACT INFORMATION WITH ALL-SIDE HOVER BORDER*/}
            {/* ========================================================= */}
            <section id="section-11" className="space-y-4 pt-4">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-950 tracking-tight flex items-center space-x-2">
                  <span className="text-[#e05609]">11.</span>
                  <span>Contact Information</span>
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>

              {/* Subtitle with Left Border Accent */}
              <div className="border-l-2 border-[#e05609] pl-3 py-0.5">
                <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed max-w-2xl">
                  For any questions, clarifications, or requests regarding this Privacy Policy or your data protection, please contact us:
                </p>
              </div>

              {/* All-Side Border Container with Hover Border Accent */}
              <div className="border border-orange-200/80 hover:border-[#e05609] transition-all duration-300 rounded-xl p-5 sm:p-6 bg-white shadow-xs space-y-6">
                {/* 4-Item Horizontal Row with Vertical Dividers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
                  {/* 1. Visit Us */}
                  <div className="flex items-start space-x-3 pr-0 lg:pr-3 lg:border-r border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiMapPin className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 block">
                        Visit Us
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        Gulzar Colony, Hasangarden Colony, Chinhat, Lucknow — 226028, UP
                      </p>
                    </div>
                  </div>

                  {/* 2. Call Us */}
                  <div className="flex items-start space-x-3 pr-0 lg:pr-3 lg:border-r border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiPhone className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 block">
                        Call Us
                      </h4>
                      <div className="text-xs text-gray-600 mt-0.5 space-y-0.5">
                        <a
                          href="tel:+917393056555"
                          className="hover:text-[#e05609] block transition-colors font-medium"
                        >
                          +91 73930 56555
                        </a>
                        <a
                          href="tel:+916386901011"
                          className="hover:text-[#e05609] block transition-colors font-medium"
                        >
                          | +91 63869 01011
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* 3. Email Us */}
                  <div className="flex items-start space-x-3 pr-0 lg:pr-3 lg:border-r border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiMail className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 block">
                        Email Us
                      </h4>
                      <a
                        href="mailto:dssfabinteriors@gmail.com"
                        className="text-xs text-gray-600 hover:text-[#e05609] transition-colors mt-0.5 block break-all font-medium"
                      >
                        dssfabinteriors@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* 4. Business Hours */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#e05609] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiClock className="text-base" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 block">
                        Business Hours
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                        Mon-Sat: 9AM-6PM<br />| Sun: Closed
                      </p>
                      <span className="inline-block mt-1 bg-orange-100/70 text-[#e05609] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        24/7 Emergency Support
                      </span>
                    </div>
                  </div>
                </div>

                {/* Centered Bottom Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="bg-[#e05609] hover:bg-[#c94905] text-white font-bold py-2.5 px-6 rounded-lg text-xs sm:text-sm shadow-sm hover:shadow-orange-500/20 transition-all cursor-pointer inline-flex items-center space-x-2"
                  >
                    <span>Send Message</span>
                    <FiArrowRight />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsQuoteOpen(true)}
                    className="bg-white border border-gray-300 hover:border-[#e05609] hover:text-[#e05609] text-gray-800 font-bold py-2.5 px-6 rounded-lg text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <ServiceQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        serviceTitle="Project Consultation"
        subServiceTitle="Privacy & Terms Inquiry"
      />
    </>
  );
};

export default PrivacyPolicyContent;
