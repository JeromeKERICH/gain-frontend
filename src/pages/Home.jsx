import React, { useEffect } from 'react'
import HomeSection from '../sections/HomeHero'
import OurAdvantage from '../sections/Pillars'
import ServicesSection from '../sections/Services'
import InvestorsPlaybook from '../sections/Play'
import PerformanceSection from '../sections/Stats'
import GainIntroduction from '../sections/About'




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      
      <HomeSection/>
      <GainIntroduction/>
      <OurAdvantage/>
      <ServicesSection/>
      <InvestorsPlaybook/>
      <PerformanceSection/>
      
    </div>
  )
}

export default Home
