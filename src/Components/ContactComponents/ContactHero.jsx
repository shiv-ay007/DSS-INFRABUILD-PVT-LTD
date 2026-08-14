import React from "react";
import PageHero from "../Common/PageHero";

const ContactHero = () => {
  return (
    <PageHero
      title="Get in Touch with"
      highlightWord="DSS Infrabuild"
      subtitle="Have an upcoming construction, architectural, interior fit-out, or PEB project? Speak directly with our senior engineering team."
      breadcrumbs={[{ name: "Contact Us" }]}
      bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
    />
  );
};

export default ContactHero;
