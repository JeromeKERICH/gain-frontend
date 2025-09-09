import React, { useState, useEffect } from 'react';

const FiresideChatAd = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Set timer to start exit animation after 5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 5000);

    // Set timer to completely remove the ad after the exit animation
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500); // 500ms for the exit animation

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => setIsVisible(false), 500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md w-full transform transition-all duration-500 ${
          isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          aria-label="Close ad"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - 80% of ad space */}
        <div>
            <img
                src="/assets/18.jpg"
                alt="Fireside Chat"
                className="w-full h-80 object-cover"
            />
            <h3 className="text-xl font-bold text-center mb-1">FIRESIDE CHAT</h3>
            <p className="text-sm text-center opacity-90">Exclusive Prelude to GAIN Summit 2025</p>
        </div>
         
            
              
            
            
       
          
        
      

        {/* Content Below Image - 20% of ad space */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-[#0A1F44] mb-2">Gulf-Africa Investment Nexus</h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            Join intimate gathering at Capital Club with Emirati investors and African leaders.
          </p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Sep 18, 2025</span>
            </div>
            
            <a
              href="https://forms.gle/j9gFafVeeTqdaewx6"
              className="bg-[#143E37] text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#0A1F44] transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Countdown Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-[#143E37] to-[#0A1F44] transition-all duration-5000 ease-linear"
            style={{ width: isExiting ? '0%' : '100%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FiresideChatAd;