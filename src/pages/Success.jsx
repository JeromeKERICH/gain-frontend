import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("verifying"); // verifying | success | failed

  useEffect(() => {
    const verifyPayment = async () => {
      const orderTrackingId = searchParams.get("OrderTrackingId");

      if (!orderTrackingId) {
        setStatus("failed");
        return;
      }

      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const res = await axios.post(`${API_URL}/api/payments/verify`, {
          orderTrackingId,
        });

        if (res.data.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (err) {
        console.error("Verification failed", err);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [searchParams]);

  if (status === "verifying") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-600">
            Verifying your payment...
          </p>
          <div className="mt-4 animate-spin w-8 h-8 border-4 border-[#143E37] border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 text-red-700 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-2">Payment Failed</h2>
          <p>We couldn’t verify your payment. Please try again or contact support.</p>
          <Link 
            to="/"
            className="mt-4 inline-block bg-[#143E37] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-green-100 text-green-800 p-6 rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-2xl font-bold mb-2">Payment Successful 🎉</h2>
          <p className="mb-4">
            Thank you! Your payment has been confirmed.  
            A confirmation email with your ticket has been sent to your inbox.
          </p>
          <Link 
            to="/home"
            className="mt-4 inline-block bg-[#143E37] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }
}
