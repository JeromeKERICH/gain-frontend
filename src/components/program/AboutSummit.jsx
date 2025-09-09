import React, { useState, useRef, useEffect } from 'react';

const AboutSummit = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const summitObjectives = [
    "Promote and strengthen trade and investment partnerships between Africa and the Gulf region.",
    "Facilitate capital flows into Africa's most scalable and high-impact sectors.",
    "Provide a platform for businesses to expand into new and emerging markets.",
    "Build networks and technical capacities for entrepreneurs and investors.",
    "Highlight opportunities for the African diaspora to engage in Gulf–Africa ventures."
  ];

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-5 md:py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1F44] mb-3 md:mb-4">
            About the 2025 GAIN Summit
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#143E37] to-[#0A1F44] mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Summit Overview */}
          <div className={`transition-all duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-[#143E37] to-[#0A1F44] rounded-xl p-6 md:p-8 text-white mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Join 1,000+ Economic Leaders</h3>
              <p className="mb-4">
                The GAIN Summit 2025 brings together government delegations, policymakers, African and Gulf leaders, project developers, investors, and entrepreneurs.
              </p>
              
              
            </div>

            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A1F44] mb-4">Summit Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#143E37] rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Explore African investment opportunities and exchange strategic insights</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#143E37] rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Gain first-hand insights into emerging markets and sector-specific trends</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#143E37] rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Spotlight industries with highest potential for scalable impact</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#143E37] rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Curated matchmaking sessions, project showcases, and roundtable discussions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Summit Objectives */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#0A1F44] mb-6">Summit Objectives</h3>
              
              <div className="space-y-6">
                {summitObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#143E37] rounded-lg flex items-center justify-center text-white mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 pt-1">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Sectors */}
            
          </div>
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default AboutSummit;