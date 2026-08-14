import React from "react";
import ContactHero from "../Components/ContactComponents/ContactHero";
import ContactInfoCards from "../Components/ContactComponents/ContactInfoCards";
import ContactForm from "../Components/ContactComponents/ContactForm";
import ContactMap from "../Components/ContactComponents/ContactMap";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <ContactHero />
      <section className="py-14 sm:py-18 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <ContactInfoCards />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
      <ContactMap />
    </div>
  );
};

export default ContactPage;
