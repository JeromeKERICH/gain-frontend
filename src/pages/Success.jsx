import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = searchParams.get("ref");

  // Venue images for the slider
  const venueImages = [
    "assets/ven1.avif",
    "assets/ven2.jpg",
    "assets/ven3.jpeg",
    
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
    
    // Hide confetti after 3 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    // Auto-advance the image slider every 3 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === venueImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => {
      clearTimeout(confettiTimer);
      clearInterval(imageInterval);
    };
  }, [venueImages.length]);

  // Handle phone call
  const handlePhoneCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  // Handle email
  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  // Confetti component
  const Confetti = () => {
    if (!showConfetti) return null;
    
    return (
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 opacity-70 animate-confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-10%',
              backgroundColor: [
                '#10B981', '#34D399', '#22C55E', '#86EFAC', '#FBBF24', 
                '#F59E0B', '#EF4444', '#F97316', '#8B5CF6', '#A78BFA'
              ][Math.floor(Math.random() * 10)],
              animationDelay: `${i * 0.1}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100">
      <Confetti />
      
      <div className="container mx-auto px-4 py-12 md:py-25">
        {/* Success Message Section */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Animated Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Pulsing ring effect */}
              <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping opacity-75"></div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl font-bold text-center text-green-600 mb-4">Payment Successful!</h1>
          
          <p className="text-gray-600 text-center mb-6">
            Thank you for your purchase. Your transaction has been completed successfully.
          </p>

          {/* Reference Number */}
          {ref && (
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-700 mb-1">Order Reference</p>
              <p className="font-mono font-bold text-green-800 text-lg">{ref}</p>
            </div>
          )}

          {/* Ticket Information */}
          <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-lg p-4">
            <div className="mr-3 bg-green-100 p-2 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <p className="text-gray-700">Check your email for your ticket(s)</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
           
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Return Home
            </button>
          </div>
        </div>

        {/* Venue Information Section */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Venue Details</h2>
            <p className="text-gray-600 mb-6">Here's everything you need to know about the venue</p>
            
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Venue Image Slider */}
            <div className="lg:w-1/2">
              <div className="relative h-80 lg:h-full">
                {venueImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={image} 
                      alt={`Conference venue view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                
                {/* Slider Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {venueImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      onClick={() => setCurrentImageIndex(index)}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Al Habtoor Palace, Dubai</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nestled in the heart of Business Bay, the iconic Al Habtoor Palace offers the perfect setting for 
                high-level networking, strategic discussions, and curated deal-making.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-700">Al Habtoor Palace, Business Bay, Dubai, United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <button 
                      onClick={() => handlePhoneCall('+971581009603')}
                      className="text-gray-700 hover:text-green-600 transition-colors block"
                    >
                      +971 58 100 9603
                    </button>
                    <button 
                      onClick={() => handleEmail('contact@gulfafricanexus.com')}
                      className="text-gray-700 hover:text-green-600 transition-colors block mt-1"
                    >
                      contact@gulfafricanexus.com
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Pro Tip</h4>
                <p className="text-green-700 text-sm">
                  Save this information to your calendar and share with your team. We recommend arriving 30 minutes early for registration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support Information */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Need help? <button onClick={() => navigate("/contact")} className="text-green-600 hover:text-green-800 underline transition-colors duration-300">Contact our support team</button>
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti {
          animation: confetti 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}