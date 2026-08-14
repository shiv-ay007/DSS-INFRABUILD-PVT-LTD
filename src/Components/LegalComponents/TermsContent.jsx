import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const termsTableOfContents = [
  { id: "term-1", num: "1", title: "Acceptance of Terms" },
  { id: "term-2", num: "2", title: "Our Services" },
  { id: "term-3", num: "3", title: "Estimates & Quotes" },
  { id: "term-4", num: "4", title: "Payment Terms" },
  { id: "term-5", num: "5", title: "Project Timeline" },
  { id: "term-6", num: "6", title: "Changes to Scope" },
  { id: "term-7", num: "7", title: "Warranty" },
  { id: "term-8", num: "8", title: "Limitation of Liability" },
  { id: "term-9", num: "9", title: "Intellectual Property" },
  { id: "term-10", num: "10", title: "Website Use" },
  { id: "term-11", num: "11", title: "Termination" },
  { id: "term-12", num: "12", title: "Governing Law" },
  { id: "term-13", num: "13", title: "Contact Information" },
];

const TermsContent = () => {
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
        title="Terms of"
        highlightWord="Service"
        subtitle="Standard terms and conditions governing project consultations, engineering execution, and services provided by DSS Infrabuild Pvt. Ltd."
        breadcrumbs={[{ name: "Terms of Service" }]}
      />

      <div className="py-8 sm:py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="w-full space-y-6 sm:space-y-7">
          
          {/* ========================================================= */}
          {/* 1. TOP BAR: EFFECTIVE DATE & PRINT TERMS                  */}
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
              <span>Print Terms</span>
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
              {termsTableOfContents.map((item) => (
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
          {/* 3. MAIN TERMS SECTIONS                                    */}
          {/* ========================================================= */}
          <div className="space-y-6 text-gray-700 text-xs sm:text-[13.5px] leading-relaxed">
            
            {/* 1. Acceptance */}
            <section id="term-1" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">1.</span> Acceptance of Terms
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                By accessing our website, requesting a quote, or engaging our construction services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </section>

            {/* 2. Our Services */}
            <section id="term-2" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">2.</span> Our Services
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                DSS Infrabuild Pvt. Ltd. provides comprehensive civil engineering, turnkey general contracting, structural steel fabrication, architectural planning, 3D BIM coordination, and luxury interior fit-out solutions across India.
              </p>
            </section>

            {/* 3. Estimates & Quotes */}
            <section id="term-3" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">3.</span> Estimates & Quotes
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Initial cost estimates provided online or during preliminary discussions are indicative. Formal binding contracts are issued only after thorough soil investigation, structural calculations, and finalized itemized Bills of Quantities (BOQ).
              </p>
            </section>

            {/* 4. Payment Terms */}
            <section id="term-4" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">4.</span> Payment Terms
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>Payment terms are structured on milestone progress stages as follows:</p>
              <div className="space-y-1.5 pt-1">
                <p>
                  <strong className="text-gray-950 font-bold">Advance Payment:</strong> 20-30% advance payment required before project commencement.
                </p>
                <p>
                  <strong className="text-gray-950 font-bold">Progress Payments:</strong> Milestone-based payments as per mutually approved project schedule.
                </p>
                <p>
                  <strong className="text-gray-950 font-bold">Final Payment:</strong> Remaining balance due upon project completion and physical handover.
                </p>
                <p>
                  <strong className="text-gray-950 font-bold">Late Payment:</strong> Interest may be charged on overdue payments at 18% per annum.
                </p>
              </div>
              <p className="text-gray-500 text-xs pt-1">
                All payments must be made via bank transfer, RTGS/NEFT, cheque, or as agreed in the formalized service contract.
              </p>
            </section>

            {/* 5. Project Timeline */}
            <section id="term-5" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">5.</span> Project Timeline
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Project timelines provided are estimates based on normal working conditions. Force majeure delays may occur due to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Unforeseen subterranean soil or groundwater conditions</li>
                <li>Extreme weather-related events or monsoons</li>
                <li>Material delivery bottlenecks from primary suppliers</li>
                <li>Client-requested architectural scope revisions</li>
                <li>Government approvals or regulatory statutory issues</li>
              </ul>
              <p className="text-gray-600 pt-0.5">
                We will communicate any anticipated delays promptly and deploy compensatory shift accelerations to minimize impact.
              </p>
            </section>

            {/* 6. Changes to Scope */}
            <section id="term-6" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">6.</span> Changes to Scope
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Any changes, additions, or deletions to project specifications must be authorized via written Change Orders detailing cost adjustments and revised delivery timelines.
              </p>
            </section>

            {/* 7. Warranty */}
            <section id="term-7" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">7.</span> Warranty
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                We provide a comprehensive structural stability warranty on our reinforced concrete and steel construction projects as stipulated in individual contract agreements.
              </p>
            </section>

            {/* 8. Limitation of Liability */}
            <section id="term-8" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">8.</span> Limitation of Liability
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                DSS Infrabuild shall not be liable for indirect, incidental, special, or consequential damages resulting from website downtime or third-party delays beyond reasonable operational control.
              </p>
            </section>

            {/* 9. Intellectual Property */}
            <section id="term-9" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">9.</span> Intellectual Property
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                All blueprints, 3D renderings, site photographs, software tools, and written materials displayed on this site are protected by copyright and intellectual property rights.
              </p>
            </section>

            {/* 10. Website Use */}
            <section id="term-10" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">10.</span> Website Use
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                Users agree not to misuse this website, introduce malicious software, or attempt unauthorized access to our backend databases and estimation tools.
              </p>
            </section>

            {/* 11. Termination */}
            <section id="term-11" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">11.</span> Termination
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                We reserve the right to terminate access to our portal or services in the event of contractual non-compliance, fraud, or breach of these terms.
              </p>
            </section>

            {/* 12. Governing Law */}
            <section id="term-12" className="space-y-2">
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-950 tracking-tight">
                  <span className="text-[#e05609]">12.</span> Governing Law
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
              </p>
            </section>

            {/* 13. Contact Information (With All-Side Hover Border) */}
            <section id="term-13" className="space-y-4 pt-4">
              <div>
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-950 tracking-tight flex items-center space-x-2">
                  <span className="text-[#e05609]">13.</span>
                  <span>Contact Information</span>
                </h2>
                <div className="w-8 h-0.5 bg-[#e05609] mt-1" />
              </div>

              {/* Subtitle with Left Border Accent */}
              <div className="border-l-2 border-[#e05609] pl-3 py-0.5">
                <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed max-w-2xl">
                  For any questions regarding these Terms of Service, please contact us:
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
        subServiceTitle="Terms of Service Inquiry"
      />
    </>
  );
};

export default TermsContent;
