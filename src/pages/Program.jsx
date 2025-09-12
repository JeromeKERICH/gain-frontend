import React, { useEffect } from 'react'
import HeroSection from '../components/program/Hero'
import TicketsSection from '../components/program/Tickets';
import WhyAttendSection from '../components/program/WhyItMatters';
import VenueSection from '../components/program/Venue';
import RoundtableDiscussions from '../components/program/Topics';
import AboutSummit from '../components/program/AboutSummit';
import FiresideChatAd from '../components/AdMondal';


const Program = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <FiresideChatAd/>
      <HeroSection/>
      <AboutSummit/>
      <TicketsSection/>
      <WhyAttendSection/>
     
      <RoundtableDiscussions/>
      <VenueSection/>
      
    </div>
  )
}

export default Program
