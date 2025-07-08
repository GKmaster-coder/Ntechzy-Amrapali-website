import { useState } from "react";
import { Menu, X } from "lucide-react"; // Or use any hamburger icon you prefer

export default function FloatingNavbarCollege() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <div className=" fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-6 py-5 bg-white rounded-full shadow-xl flex items-center justify-between border border-yellow-200">
        
        {/* Logo and College Name */}
        <div className="flex items-center gap-4">
          <img src="/logo1.png" alt="College Logo" className="w-14 h-14 object-contain" />
          <div className="leading-tight">
            <h1 className="text-base md:text-xl font-bold text-[#97660c]">
              Amrapali Ayurvedic Medical College & Hospital
            </h1>
            <p className="text-xs md:text-sm text-gray-600 font-medium">
              Sandila Bagarmau Road, Unnao U.P.
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-5 text-sm font-semibold text-[#97660c] roboto">
          <a href="#home" className="hover:text-[#f8d816] transition">HOME</a>
          <a href="#about" className="hover:text-[#f8d816] transition">ABOUT</a>
          <a href="#courses" className="hover:text-[#f8d816] transition">COURSES</a>
          <a href="#facilities" className="hover:text-[#f8d816] transition">FACILITIES</a>
          <a href="#admission" className="hover:text-[#f8d816] transition">ADMISSION</a>
          <a href="#contact" className="hover:text-[#f8d816] transition">CONTACT</a>
        </nav>

        {/* Apply Now Button (hidden in mobile menu) */}
        <a
          href="#apply"
          className="hidden md:inline-block bg-[#f8d816] hover:bg-yellow-400 text-[#040504] text-sm md:text-base px-5 py-2 rounded-full font-bold shadow-md transition-all duration-300"
        >
          Apply Now →
        </a>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-[#97660c]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[90px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-xl shadow-lg z-40 p-5 text-[#97660c] font-semibold space-y-3">
          <a href="#home" className="block hover:text-[#f8d816] transition">HOME</a>
          <a href="#about" className="block hover:text-[#f8d816] transition">ABOUT</a>
          <a href="#courses" className="block hover:text-[#f8d816] transition">COURSES</a>
          <a href="#facilities" className="block hover:text-[#f8d816] transition">FACILITIES</a>
          <a href="#admission" className="block hover:text-[#f8d816] transition">ADMISSION</a>
          <a href="#contact" className="block hover:text-[#f8d816] transition">CONTACT</a>
          <a
            href="#apply"
            className="block w-full text-center bg-[#f8d816] hover:bg-yellow-400 text-[#040504] px-4 py-2 rounded-full font-bold transition-all duration-300"
          >
            Apply Now →
          </a>
        </div>
      )}
    </>
  );
}
