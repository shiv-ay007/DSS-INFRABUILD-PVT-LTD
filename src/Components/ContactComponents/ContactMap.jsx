import React from "react";

const ContactMap = () => {
  return (
    <section className="relative w-full h-[400px] border-t border-gray-200">
      <iframe
        title="DSS Infrabuild Office Location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14235.59547390907!2d81.024602!3d26.874954000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be303baeb6379%3A0x7cafaa0c2a0bc9b1!2sDSS%20Infrabuild%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1786687293220!5m2!1sen!2sin"
        className="w-full h-full border-0 filter contrast-[1.05]"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>
  );
};

export default ContactMap;
