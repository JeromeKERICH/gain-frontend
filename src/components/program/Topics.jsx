import React, { useState, useRef, useEffect } from 'react';

const RoundtableDiscussions = () => {
  const [activeTopic, setActiveTopic] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const topics = [
    {
      id: 1,
      title: "Finance & Investment",
      description: "Unlocking growth through blended finance, private equity, and innovative funding models that connect capital to Africa's scalable opportunities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Technology",
      description: "Driving digital inclusion as Africa's tech ecosystem expands, from fintech to AI, fueling innovation and attracting global investors.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Energy & Natural Resources",
      description: "Shaping the future with renewable energy and strategic use of fossil fuels, while strengthening Africa's role in global mineral supply chains.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Infrastructure",
      description: "Accelerating growth through public-private partnerships (PPPs) in transport, telecoms, and water systems to boost regional connectivity.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m4 0h4m-4 0V9" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Agriculture, Food Security & Creative Economy",
      description: "Harnessing agribusiness innovation and resilient food systems, alongside Africa's creative economy, film, music, and fashion as drivers of jobs and cultural influence.",
      image: "assets/agr.jpg",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Policy, Leadership & Governance",
      description: "Building investor confidence through strong governance frameworks, forward-thinking leadership, and policy reforms that shape sustainable development.",
      image: "assets/le.jpg",
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
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
    <section ref={sectionRef} className="py-5 md:10 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#142626] mb-3 md:mb-4"  style={{
                        fontFamily: 'Georgia, serif',
                       
                      }}>
            High-Level Roundtable Discussions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Join industry leaders, policymakers, and investors for focused dialogues on key sectors driving Gulf-Africa collaboration.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className={`bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-lg md:hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveTopic(index)}
            >
              {/* Image */}
              <div className="h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden relative">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5 lg:p-6">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-[#142626] mb-2 md:mb-3">{topic.title}</h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">{topic.description}</p>
                
                {/* Hover Indicator */}
                <div className={`h-1 bg-gradient-to-r from-[#143E37] to-[#0A1F44] rounded-full transition-all duration-300 ${activeTopic === index ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>


    </section>
  );
};

export default RoundtableDiscussions;