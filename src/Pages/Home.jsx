import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import About from '../Components/HomeComponents/About'
import Services from '../Components/HomeComponents/Services'
import FutureProject from '../Components/HomeComponents/FutureProject'
import ProjectGallery from '../Components/HomeComponents/ProjectGallery'
import WhyDss from '../Components/HomeComponents/WhyDss'
import WorkProcess from '../Components/HomeComponents/WorkProcess'
import ClientSay from '../Components/HomeComponents/ClientSay'
import Blogs from '../Components/HomeComponents/Blogs'

const Home = () => {
  return (
   <>
   <Hero/>
   <About/>
   <Services/>
   <FutureProject/>
   <ProjectGallery/>
   <WhyDss/>
   <WorkProcess/>
   <ClientSay/>
   <Blogs/>
   
   </>
  )
}

export default Home