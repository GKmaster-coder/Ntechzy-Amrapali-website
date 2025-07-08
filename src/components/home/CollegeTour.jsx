import React from 'react';
import ModalVideo from '../../shared/ModelVideo';

const CollegeTour = () => {
  const image = "/assets/hero-img/college-image4.png";
  const video = "https://res.cloudinary.com/dmhpenz2y/video/upload/v1751966910/0708_ngr1gx.mp4"

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8d816] to-amber-100 py-20">
      {/* Decorative SVG Background */}
      <div className="absolute bottom-0 left-0 w-full -z-10 opacity-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#97660c"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,272C672,288,768,288,864,240C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10 relative">
          College Virtual Tour
          <span className="block w-24 h-1 bg-[#97660c] mx-auto mt-4 rounded-full" />
        </h2>

        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <ModalVideo image={image} video={video} />
        </div>
      </div>
    </section>
  );
};

export default CollegeTour;
