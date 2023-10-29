import React from 'react'
import Navbar from '../navAndFooter/Navbar'
import LandingHead from './components/LandingHead'
import LandingMain from './components/LandingMain'
import Footer from '../navAndFooter/Footer'

function Landing() {
  return (
    <div>
        <Navbar />
        <LandingHead />
        <LandingMain />
        <Footer />
    </div>
  )
}

export default Landing