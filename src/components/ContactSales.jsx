import { useState, useEffect } from "react";
import { FaTimes, FaCheck, FaSpinner, FaExclamationTriangle } from "react-icons/fa";

function ContactSalesModal({ isOpen, onClose, ticketType }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
  });


  const [status, setStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Timeout to allow the modal to render before animation starts
      setTimeout(() => setIsVisible(true), 10);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      // Re-enable body scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const payload = {
        ...form,
        subject: `${ticketType} Ticket Inquiry`,
        message: `Client is interested in a ${ticketType} ticket.`,
        ticketType,
      };

      const res = await fetch("https://tickets.gulfafricanexus.com/api/contact-sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", country: "" });
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Try again later.");
    }
  };


  // Close modal when clicking outside content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  
  return (
    <>
      {/* Modal Overlay with animation */}
      {isOpen && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black transition-opacity duration-300 ${
            isVisible ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          onClick={handleOverlayClick}
        >
          <div 
            className={`bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-300 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#143E37] to-[#0A1F44] p-6 text-white sticky top-0 z-10">
              <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">
                  {ticketType} Ticket Inquiry
                </h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white hover:bg-opacity-10"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <p className="text-gray-100 mt-2">Get in touch with our sales team to process your ticket</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent transition-all duration-200"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent transition-all duration-200"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent transition-all duration-200"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#143E37] focus:border-transparent transition-all duration-200"
                    disabled={status === "loading"}
                  />
                </div>
              </div>

              {/* Status Messages */}
              {status === "loading" && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-center animate-fade-in">
                  <FaSpinner className="w-4 h-4 text-blue-500 animate-spin mr-2" />
                  <span className="text-blue-700">Sending your inquiry...</span>
                </div>
              )}

              {status === "success" && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg flex items-center animate-fade-in">
                  <FaCheck className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-700">Your inquiry has been sent successfully! Check your email for confirmation & next steps</span>
                </div>
              )}

              {status && status !== "loading" && status !== "success" && (
                <div className="mt-4 p-3 bg-red-50 rounded-lg flex items-center animate-fade-in">
                  <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-2" />
                  <span className="text-red-700">{status}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#143E37] to-[#0A1F44] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 disabled:opacity-70 mt-6 transform hover:scale-105 active:scale-95"
                >
                  {status === "loading" ? "Processing..." : "Send Inquiry"}
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="bg-gray-50 p-4 text-center sticky bottom-0">
              <p className="text-sm text-gray-600">
                Our team will contact you within 24 hours
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.5s forwards;
        }
        
        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </>
  );
}

export default ContactSalesModal;