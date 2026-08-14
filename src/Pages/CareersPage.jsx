import React from "react";
import CareersHero from "../Components/CareersComponents/CareersHero";
import WhyJoinDSS from "../Components/CareersComponents/WhyJoinDSS";
import OpenPositions from "../Components/CareersComponents/OpenPositions";

const CareersPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <CareersHero />
      <WhyJoinDSS />
      <OpenPositions />
    </div>
  );
};

export default CareersPage;
