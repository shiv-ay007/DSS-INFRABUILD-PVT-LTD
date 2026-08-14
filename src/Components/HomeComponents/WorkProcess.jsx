import React, { useState } from "react";

// --- Step Images for Dynamic Transition when Hovering / Selecting Steps ---
const stepImages = {
  1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  2: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  3: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
  4: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
  5: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1200&auto=format&fit=crop",
  6: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  7: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
};

// 7 Step Journey Data (Exact match to reference)
const stepsData = [
  {
    id: 1,
    number: "1",
    title: "Consultation",
    description:
      "Understanding your vision, requirements, and budget through in-depth discussions.",
  },
  {
    id: 2,
    number: "2",
    title: "Site Visit & Approval",
    description:
      "On-site inspection, feasibility study, and initial project approval.",
  },
  {
    id: 3,
    number: "3",
    title: "Planning & Design",
    description:
      "Detailed architectural plans, 3D visualizations, and structural designs.",
  },
  {
    id: 4,
    number: "4",
    title: "Estimation & Approval",
    description:
      "Transparent cost estimation, BOQ preparation, and client approval.",
  },
  {
    id: 5,
    number: "5",
    title: "Quality Check",
    description:
      "Rigorous quality audits at every stage to ensure industry standards.",
  },
  {
    id: 6,
    number: "6",
    title: "Project Handover",
    description:
      "Final inspection, documentation, and seamless project delivery.",
  },
  {
    id: 7,
    number: "7",
    title: "After Sales Support",
    description:
      "Post-handover support, maintenance, and warranty services.",
  },
];

const WorkProcess = () => {
  // Default active step is 2
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-18 bg-[#f5f5f5] font-sans overflow-hidden border-t border-gray-200/60">
      
      {/* SVG ClipPath Definition for the Curved Image Shape */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="process-curve-mask" clipPathUnits="objectBoundingBox">
            <path
              d="
                M 0, 0.08
                C 0, 0.035, 0.035, 0, 0.08, 0
                L 0.92, 0
                C 0.965, 0, 1, 0.035, 1, 0.08
                L 1, 0.58
                C 1, 0.65, 0.96, 0.68, 0.88, 0.68
                L 0.76, 0.68
                C 0.68, 0.68, 0.64, 0.74, 0.64, 0.82
                L 0.64, 0.92
                C 0.64, 0.97, 0.60, 1, 0.54, 1
                L 0.08, 1
                C 0.035, 1, 0, 0.965, 0, 0.92
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: LARGER BALANCED HEADER & CURVED MASK IMAGE (STICKY ON DESKTOP) */}
          {/* ========================================================================= */}
          <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
            
            {/* Top Tag & Colorful Highlighted Main Headline */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-6 h-[2px] bg-[#e05609] rounded-full"></span>
                <span className="text-[#e05609] font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                  HOW WE WORK
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black text-gray-950 tracking-tight leading-[1.1] uppercase">
                STRATEGIC <span className="text-[#e05609]">STEPS</span> <br />
                TO <span className="text-[#e05609]">IMPACTFUL</span> <br />
                RESULTS
              </h2>

              <p className="text-gray-500 text-xs sm:text-sm font-normal max-w-md">
                A structured, disciplined methodology ensuring complete transparency, architectural integrity, and on-time project completion.
              </p>
            </div>

            {/* Enlarged Signature Curved Image Container matching Right Column Scale */}
            <div className="relative w-full max-w-[540px] group">
              
              {/* Subtle Ambient Glow */}
              <div 
                className="absolute inset-0 bg-[#e05609]/15 filter blur-2xl transform scale-95 transition-all duration-500 group-hover:scale-100 group-hover:bg-[#e05609]/25"
                style={{ clipPath: "url(#process-curve-mask)" }}
              />

              {/* The Enlarged Curved Image Card */}
              <div
                className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] overflow-hidden bg-gray-200 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                style={{
                  clipPath: "url(#process-curve-mask)",
                  WebkitClipPath: "url(#process-curve-mask)",
                }}
              >
                <img
                  key={activeStep}
                  src={stepImages[activeStep] || stepImages[1]}
                  alt="Strategic planning and teamwork in progress"
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out filter brightness-[0.98] contrast-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop";
                  }}
                />

                {/* Subtle Gradient Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: TIMELINE WITH LINE PASSING DEAD-CENTER THROUGH CIRCLES       */}
          {/* ========================================================================= */}
          <div className="relative">
            
            {/* Continuous Vertical Timeline Line Passing Exactly Through Center of All Circles */}
            <div className="absolute left-[14px] sm:left-[16px] -translate-x-1/2 top-4 bottom-5 w-[2px] bg-gray-300 pointer-events-none z-0" />

            {/* List of 7 Steps */}
            <div className="space-y-8 sm:space-y-10 relative z-10">
              {stepsData.map((item) => {
                const isActive = activeStep === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveStep(item.id)}
                    onClick={() => setActiveStep(item.id)}
                    className="relative flex items-start group cursor-pointer"
                  >
                    
                    {/* --- Timeline Circular Node (100% Centered on the vertical line) --- */}
                    <div className="w-7 sm:w-8 flex-shrink-0 flex items-center justify-center mt-1">
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-white border-2 border-[#e05609] ring-4 ring-orange-100/90 shadow-md scale-110"
                            : "bg-[#f5f5f5] border-2 border-gray-300 group-hover:border-[#e05609] group-hover:bg-white group-hover:scale-105"
                        }`}
                      >
                        <div
                          className={`rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-2.5 h-2.5 bg-[#e05609]"
                              : "w-1.5 h-1.5 bg-gray-400 group-hover:bg-[#e05609]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* --- Number, Title, Floating Radar & Description --- */}
                    <div className="flex-1 flex items-start space-x-4 sm:space-x-5 pl-4 sm:pl-5">
                      
                      {/* Big Orange Numeral */}
                      <span
                        className={`text-4xl sm:text-5xl lg:text-[52px] font-black leading-none select-none transition-transform duration-300 ${
                          isActive
                            ? "text-[#e05609] scale-105"
                            : "text-[#e05609] group-hover:scale-105"
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* Content Box */}
                      <div className="space-y-1 flex-1">
                        
                        {/* Title Row */}
                        <div className="flex items-center space-x-2.5">
                          <h3
                            className={`text-lg sm:text-xl md:text-2xl font-bold tracking-tight transition-colors duration-200 ${
                              isActive
                                ? "text-gray-950"
                                : "text-gray-800 group-hover:text-gray-950"
                            }`}
                          >
                            {item.title}
                          </h3>

                          {/* Floating Radar Node Indicator */}
                          {isActive && (
                            <span className="inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-400/80 bg-white/90 shadow-xs">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gray-600 animate-ping"></span>
                              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gray-800 absolute"></span>
                            </span>
                          )}
                        </div>

                        {/* Description Paragraph */}
                        <p className="text-gray-500 text-xs sm:text-sm md:text-[14.5px] leading-relaxed font-normal max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkProcess;