import React from "react";
import LeadershipHero from "../Components/LeadershipComponents/LeadershipHero";
import FounderProfile from "../Components/LeadershipComponents/FounderProfile";
import LeadershipGrid from "../Components/LeadershipComponents/LeadershipGrid";
import BoardPhilosophy from "../Components/LeadershipComponents/BoardPhilosophy";

const LeadershipPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <LeadershipHero />
      <FounderProfile />
      <LeadershipGrid />
      <BoardPhilosophy />
    </div>
  );
};

export default LeadershipPage;
