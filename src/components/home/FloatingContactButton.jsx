import React, { useState } from "react";
import { PhoneCall, X,MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options Card */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden animate-fade-in-up">
          <div className="p-3 space-y-2">
            {/* Call Button (Red) */}
            <a
              href="tel:+919198350989"
              className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all hover:shadow-md"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Us</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919198350989"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE54] text-white px-6 py-3 rounded-lg transition-all hover:shadow-md"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f8d816] hover:bg-yellow-500 text-[#97660c] p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 "
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? (
          <X className="w-6 h-6" /> // Smaller size here
        ) : (
          <MessageCircle className=" w-6 h-6" />
        )}
      </button>
    </div>
  );
}
