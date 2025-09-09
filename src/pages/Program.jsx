import React, { useEffect } from 'react'
import HeroSection from '../components/program/Hero'
import TicketsSection from '../components/program/Tickets';
import WhyAttendSection from '../components/program/WhyItMatters';
import VenueSection from '../components/program/Venue';
import RoundtableDiscussions from '../components/program/Topics';
import AboutSummit from '../components/program/AboutSummit';


const Program = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
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
