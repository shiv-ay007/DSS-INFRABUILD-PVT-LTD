import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import AppRoutes from './Routes/AppRoutes'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import ScrollToTop from './Components/ScrollToTop'
import FloatingCallButton from './Components/Common/FloatingCallButton'

const App = () => {
  return (
   <>
   <Router>
    <Toaster 
      position="top-right" 
      toastOptions={{
        duration: 4000,
        style: {
          background: '#18181b',
          color: '#ffffff',
          border: '1px solid rgba(224, 86, 9, 0.4)',
          borderRadius: '10px',
          fontSize: '13.5px',
          fontWeight: '500',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        },
        success: {
          iconTheme: {
            primary: '#e05609',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#ffffff',
          },
        },
      }}
    />
    <ScrollToTop />
    <Navbar/>
    <AppRoutes/>
    <Footer/>
    <FloatingCallButton />
   </Router>
   
   </>
  )
}

export default App