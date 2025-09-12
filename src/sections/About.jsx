import React, { useState, useEffect, useRef } from 'react';

const GainIntroduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Canvas animation for the connection visual
  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Animation variables
    let animationId;
    let dots = [];
    let connections = [];
    let time = 0;

    // Create dots representing capital flow
    const initDots = () => {
      dots = [];
      
      // Gulf region dots (right side)
      for (let i = 0; i < 8; i++) {
        dots.push({
          x: width * 0.75 + Math.random() * 50 - 25,
          y: height * 0.3 + Math.random() * height * 0.4,
          size: 3 + Math.random() * 3,
          speed: 0.2 + Math.random() * 0.3,
          origin: 'gulf'
        });
      }
      
      // Africa region dots (left side)
      for (let i = 0; i < 12; i++) {
        dots.push({
          x: width * 0.25 + Math.random() * 50 - 25,
          y: height * 0.3 + Math.random() * height * 0.4,
          size: 3 + Math.random() * 3,
          speed: 0.2 + Math.random() * 0.3,
          origin: 'africa'
        });
      }
    };

    // Create connections between dots
    const updateConnections = () => {
      connections = [];
      
      // Connect Gulf dots to Africa dots
      const gulfDots = dots.filter(dot => dot.origin === 'gulf');
      const africaDots = dots.filter(dot => dot.origin === 'africa');
      
      gulfDots.forEach(gDot => {
        africaDots.forEach(aDot => {
          // Only connect some dots based on distance
          const distance = Math.sqrt(
            Math.pow(gDot.x - aDot.x, 2) + 
            Math.pow(gDot.y - aDot.y, 2)
          );
          
          if (distance < width * 0.4 && Math.random() > 0.7) {
            connections.push({
              from: gDot,
              to: aDot,
              opacity: 0.3 + Math.random() * 0.4,
              width: 1 + Math.random() * 1.5
            });
          }
        });
      });
    };

    // Draw the visualization
    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw connection lines
      connections.forEach(conn => {
        const progress = (Math.sin(time * 0.005) + 1) / 2;
        
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = `rgba(20, 62, 55, ${conn.opacity})`;
        ctx.lineWidth = conn.width;
        ctx.stroke();
        
        // Animated dot along the connection
        const movingX = conn.from.x + (conn.to.x - conn.from.x) * progress;
        const movingY = conn.from.y + (conn.to.y - conn.from.y) * progress;
        
        ctx.beginPath();
        ctx.arc(movingX, movingY, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#143E37';
        ctx.fill();
      });
      
      // Draw dots
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.origin === 'gulf' ? '#0A1F44' : '#143E37';
        ctx.fill();
      });
      
      // Draw region labels
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#0A1F44';
      ctx.textAlign = 'center';
      ctx.fillText('Gulf Region', width * 0.75, height * 0.8);
      
      ctx.fillStyle = '#143E37';
      ctx.fillText('Africa', width * 0.25, height * 0.8);
      
      time++;
      animationId = requestAnimationFrame(draw);
    };

    // Initialize and start animation
    initDots();
    updateConnections();
    draw();

    // Clean up animation on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  const sectors = [
    "Agribusiness",
    "Renewable Energy",
    "Infrastructure & Real Estate",
    "Healthcare & Life Sciences",
    "Digital Technology & Fintech"
  ];

  return (
    <section ref={sectionRef} className="py-5 md:py-10 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h1 className="text-2xl md:text-4xl font-bold text-[#142626] mb-6" style={{
                        fontFamily: 'Georgia, serif',
                       
                      }}>
    
                We are (GAIN) Where Gulf Capital Meets Africa's Growth
              </h1>
              <p className="text-l text-justify text-gray-700 mb-6 leading-relaxed" style={{
                        fontFamily: 'Georgia, serif',
                        
                      }}>
                We are a transaction-focused platform built to connect Gulf capital with Africa's scalable opportunities, 
                creating a bridge for secure, high-yield investments.
                We delivers a bridge with a secure, streamlined platform where capital finds opportunity.
                Our work spans across high-growth sectors such as: Agribusiness, Renewable Energy, Infrastructure & Real Estate, Healthcare & Life Sciences, Digital Technology & Fintech
                Our mission is to channel capital into Africa through secure, curated, and de-risked platforms that ensure mutual benefits for both investors and African enterprises.
                By building trust through legal, financial, and policy frameworks, GAIN enables sustainable, long-term partnerships that are profitable to both parties

              </p>
              
           
              
              
            </div>
          </div>

          {/* Right Column - Animated Visual */}
          <div className="lg:w-1/2">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <img 
                src='/assets/hero.png'
                alt="GAIN Logo"
                className="w-full h-auto mx-auto mb-4 rounded-lg shadow-lg"
                />
             
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GainIntroduction;