import React from "react";
import PageHero from "../Common/PageHero";

const ContactHero = () => {
  return (
    <PageHero
      title="Get in Touch with"
      highlightWord="DSS Infrabuild"
      subtitle="Have an upcoming construction, architectural, interior fit-out, or PEB project? Speak directly with our senior engineering team."
      breadcrumbs={[{ name: "Contact Us" }]}
      bgImage="/assets/projects_media/project_media_18.jpg"
    />
  );
};

export default ContactHero;
