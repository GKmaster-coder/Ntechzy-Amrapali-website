import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* College Logo (Replaces Map) */}
        <div className="flex items-center justify-center md:justify-start">
          <img
            src="/logo.png" // Replace this path with the actual logo path
            alt="Amrapali Ayurvedic Logo"
            className="h-70 w-auto object-contain"
          />
        </div>

        {/* College Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">
            Amrapali <span className="text-[#f8d816]">Ayurvedic</span>
          </h3>
          <p className="text-gray-400 mb-4 leading-relaxed">
            Amrapali Ayurvedic Medical College & Hospital<br />
            Gram Behta Mujawar, Sandila,<br />
            Bagarmau Road, Unnao (U.P)
          </p>
          <p className="text-gray-400 mb-1">Office: +91-9454849444</p>
          <p className="text-gray-400 mb-1">Mobile: +91-9198350989</p>
          <p className="text-gray-400 mb-1">support@aamcunnao.com</p>
          <p className="text-gray-400">www.aamcunnao.com</p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#3b5998] text-white rounded">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#E1306C] text-white rounded">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#1DA1F2] text-white rounded">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#FF0000] text-white rounded">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-yellow-400 inline-block pb-1">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-[#f8d816] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#f8d816] transition">About</a></li>
            <li><a href="#courses" className="hover:text-[#f8d816] transition">Courses</a></li>
            <li><a href="#facilities" className="hover:text-[#f8d816] transition">Facilities</a></li>
            <li><a href="#admission" className="hover:text-[#f8d816] transition">Admission</a></li>
            <li><a href="#contact" className="hover:text-[#f8d816] transition">Contact</a></li>
          </ul>
        </div>

        {/* Image Gallery */}
        <div>
          <h4 className="text-xl font-semibold mb-4 border-b border-yellow-400 inline-block pb-1">Image Gallery</h4>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img, i) => (
              <img
                key={i}
                src={`/gallery/${img}.JPG`}
                alt={`Gallery ${img}`}
                className="h-14 w-full object-cover rounded"
              />
            ))}
          </div>
          <a
            href="#gallery"
            className="mt-3 inline-block px-4 py-2 bg-white/10 text-white rounded-full text-xs font-medium hover:bg-[#f8d816] hover:text-black transition duration-300"
          >
            More Images →
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Amrapali Ayurvedic Medical College & Hospital. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer2;
