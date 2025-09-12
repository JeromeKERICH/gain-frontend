import { useState } from 'react';
import { useEffect } from 'react';
import { FaCheck, FaUserTie,  FaPhone, FaEnvelope, FaLock,  FaPlus, FaMinus, FaCheckCircle, FaArrowRight, FaCrown, FaStar, FaGift } from 'react-icons/fa';
import ContactSalesModal from '../components/ContactSales';

export default function VIPTicketPage2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [ticketCount, setTicketCount] = useState(1);

  // Calculate pricing
  const basePrice = 3000;
  const calculateTotal = () => {
    return basePrice * ticketCount;
  };

  const calculateDiscount = () => {
    if (ticketCount >= 5) return 0.15;
    if (ticketCount >= 3) return 0.10;
    return 0;
  };

  const discount = calculateDiscount();
  const subtotal = calculateTotal();
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  const incrementTickets = () => {
    if (ticketCount < 10) {
      setTicketCount(ticketCount + 1);
    }
  };

  const decrementTickets = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-pattern">
      {/* Hero Section */}
      <section className="relative bg-vip-purple text-white pt-20 pb-20 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('assets/hero.png')" }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center text-gold text-sm uppercase tracking-wider mb-3 border border-gold rounded-full px-4 py-2">
              <FaCrown className="mr-2" />
              <span>Exclusive VIP Access</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light mb-4 leading-tight">
              VIP Class <span className="font-semibold">Experience</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-200 max-w-2xl mx-auto mb-2 font-light">
              The ultimate premium experience for distinguished guests at GAIN 2025
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex items-center text-gold">
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
                <FaStar className="mx-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-5 md:py-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* VIP Ticket Card - Shows first on mobile */}
          <div className="w-full lg:w-2/5 order-1">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              {/* VIP Ticket Header with premium design */}
              <div className="bg-gradient-to-br from-[#0A1F44] via-[#143E37] to-[#0A1F44] text-white p-3 text-center relative overflow-hidden">
                <div className="relative z-5">
                  <div className="inline-flex items-center text-gold text-xs uppercase tracking-wider mb-4 border border-gold rounded-full px-2 py-1">
                    <FaCrown className="mr-2" />
                    <span>VIP Exclusive</span>
                  </div>
                  
                  <div className="text-5xl font-serif font-light mb-2">$3,000</div>
                  <p className="text-gray-300 text-sm">per person</p>
                </div>
              </div>

              {/* VIP Ticket Details */}
              <div className="p-8">
                <div className="space-y-5 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Ticket Type</span>
                    <span className="font-semibold text-[#0A1F44] ">VIP Class</span>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Number of Tickets</label>
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                    <button 
                      onClick={decrementTickets}
                      disabled={ticketCount <= 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${ticketCount > 1 ? 'bg-vip-purple text-white hover:bg-vip-dark transition-colors' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      <FaMinus size={12} />
                    </button>
                    
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-vip-purple">{ticketCount}</span>
                      <span className="text-xs text-gray-500">ticket{ticketCount !== 1 ? 's' : ''}</span>
                    </div>
                    
                    <button 
                      onClick={incrementTickets}
                      disabled={ticketCount >= 5}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${ticketCount < 5 ? 'bg-[#0A1F44] text-white hover:bg-vip-dark transition-colors' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">Maximum 5 tickets per order</p>
                </div>

                {/* Pricing Breakdown */}
                <div className="bg-vip-light rounded-xl p-5 mb-6 border-vip-light-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-sm">Subtotal</span>
                    <span className="font-medium ">${subtotal.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600 text-sm">Discount ({discount * 100}%)</span>
                      <span className="text-green-600 font-medium">-${discountAmount.toLocaleString()}</span>
                    </div>
                  )}
                  
                  <hr className="my-3 border-gray-300" />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold text-vip-purple">${total.toLocaleString()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="mt-3 text-sm text-green-600 font-medium text-center">
                      You save ${discountAmount.toLocaleString()}!
                    </div>
                  )}
                  
                  
                  
                </div>
                

                {/* Contact Sales Button inside Pricing Breakdown */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full bg-gradient-to-r from-[#143E37] to-[#0A1F44] text-white font-semibold py-3 rounded-xl hover:bg-yellow-600 transition-colors duration-200 flex items-center justify-center"
                >
                  Contact Sales <FaArrowRight className="ml-2" />
                </button>
                  

                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                  <FaLock className="mr-1 text-gray-400" />
                  Secure payment processing
                </p>
              </div>
            </div>
          </div>

          {/* Content Column - About & Benefits */}
          <div className="w-full lg:w-3/5 order-2 lg:pl-8">
            {/* About Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-vip-dark mb-6 flex items-center">
                Exclusive VIP Experience
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                The VIP Ticket offers the most exclusive and personalized experience at GAIN 2025. Designed for 
                distinguished guests, industry leaders, and premium partners, this package provides unparalleled 
                access, luxury amenities, and personalized service throughout the conference.
                Experince the pinnacle of exclusivity and comfort with our VIP offerings and make your GAIN 2025 experience truly unforgettable.
              </p>
              <div className="bg-vip-light rounded-xl p-5 border border-vip-light-border">
                <h3 className="font-semibold text-vip-dark mb-3">Who should attend?:</h3>
                <ul className="grid grid-cols-1 gap-2 text-sm text-vip-dark">
                  <li className="flex items-center">
                    <FaCheckCircle className="text-gold mr-2" />
                    <span>For VVIPs</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-gold mr-2" />
                    <span>Strategic Investor</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-gold mr-2" />
                    <span>Decision Makers</span>
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-gold mr-2" />
                    <span>Distinguished Guests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal 
          isOpen={showCheckout} 
          onClose={() => setShowCheckout(false)} 
          ticketType="VIP" 
        />

      

      <style jsx>{`
        .bg-luxury-pattern {
          background-color: #f8f9fa;
          background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .bg-vip-purple {
          background-color: #4A1C6B;
        }
        .bg-vip-dark {
          background-color: #2D0F45;
        }
        .bg-vip-light {
          background-color: #F9F5FF;
        }
        .border-vip-light-border {
          border-color: #E9D8FD;
        }
        .text-vip-dark {
          color: #2D0F45;
        }
        .text-vip-purple {
          color: #4A1C6B;
        }
        .text-gold {
          color: #C9A15A;
        }
        .bg-gold {
          background-color: #C9A15A;
        }
      `}</style>
    </div>
  );
}