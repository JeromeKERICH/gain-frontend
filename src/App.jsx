import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import BusinessTicketPage from "./pages/Business";
import VIPTicketPage from "./pages/VIP";

import AboutSection from "./pages/About";
import Program from "./pages/Program";

import PaymentCallback from "./pages/Callback";
import SuccessPage from "./pages/Success";
import FailurePage from "./pages/Failure";

import ContactPage from "./pages/Contact";
import News from "./pages/News";
import FloatingWhatsAppWithBadge from "./layouts/FloatingWA";
import VIPTicketPage2 from "./pages/VIP2";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <>
           <FloatingWhatsAppWithBadge/> 
            
          </>
      <Navbar />
     
      <main className="flex-grow">
        <Routes>
        
        
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/" element={<Program/>}/>
          <Route path="/business" element={<BusinessTicketPage/>}/>
          <Route path="/vip" element={<VIPTicketPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/success" element={<SuccessPage/>}/>
          <Route path="/failure" element={<FailurePage />} />
          <Route path="/payment-callback" element={<PaymentCallback/>}/>
          <Route path="/vip2" element={<VIPTicketPage2/>}/>
          <Route path="/news" element={<News/>}/>
        
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
