import React from 'react'
import Nav from './components/ui/Nav'
import Hero from './components/ui/Hero'
import HowItWorks from './components/ui/HowItWorks'
import ProfileHeader from './components/ui/ProfileHeader'
import MainFeature from './components/ui/MainFeature'
import Footer from './components/ui/Footer'

export default function page() {
  return (
    <div>
      <Nav/>
      <Hero/>
      {/* <HowItWorks/> */}
       <MainFeature/>
      <ProfileHeader/>
      <Footer/>
    </div>
  )
}
