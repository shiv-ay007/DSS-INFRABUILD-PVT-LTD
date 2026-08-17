import React, { useState, useEffect } from 'react'
import Hero from '../Components/HomeComponents/Hero'
import About from '../Components/HomeComponents/About'
import Services from '../Components/HomeComponents/Services'
import FutureProject from '../Components/HomeComponents/FutureProject'
import ProjectGallery from '../Components/HomeComponents/ProjectGallery'
import WhyDss from '../Components/HomeComponents/WhyDss'
import WorkProcess from '../Components/HomeComponents/WorkProcess'
import ClientSay from '../Components/HomeComponents/ClientSay'
import Blogs from '../Components/HomeComponents/Blogs'
import ServiceQuoteModal from '../Components/ServicesComponents/ServiceQuoteModal'

const Home = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  // Auto popup on website home load if user hasn't selected "Don't show this again"
  useEffect(() => {
    const dontShow = localStorage.getItem('dss_quote_modal_dont_show') === 'true'
    if (!dontShow) {
      const timer = setTimeout(() => {
        setIsQuoteModalOpen(true)
      }, 1500) // 1.5 second delay for smooth entry

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <FutureProject />
      <ProjectGallery />
      <WhyDss />
      <WorkProcess />
      <ClientSay />
      <Blogs />

      {/* Auto Home Page Quote Consultation Modal */}
      <ServiceQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceTitle=""
        subServiceTitle=""
      />
    </>
  )
}

export default Home