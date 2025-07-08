import React from "react";
import {
  FaLeaf,
  FaHospitalAlt,
  FaBookMedical,
  FaUserGraduate,
  FaAward,
  FaUserMd,
  FaFlask,
} from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "20+", label: "Years of Excellence", icon: <FaAward className="text-2xl text-[#087521]" /> },
    { value: "500+", label: "Graduates", icon: <FaUserGraduate className="text-2xl text-[#087521]" /> },
    { value: "50+", label: "Expert Faculty", icon: <FaUserMd className="text-2xl text-[#087521]" /> },
    { value: "10+", label: "Research Papers", icon: <FaFlask className="text-2xl text-[#087521]" /> },
  ];

  const features = [
    {
      icon: <FaLeaf className="text-[#087521] text-xl" />,
      title: "Holistic Approach",
      description: "Blending traditional Ayurveda with modern medical science",
    },
    {
      icon: <FaHospitalAlt className="text-[#087521] text-xl" />,
      title: "Clinical Training",
      description: "Hands-on experience in our 100-bed hospital facility",
    },
    {
      icon: <FaBookMedical className="text-[#087521] text-xl" />,
      title: "Comprehensive Curriculum",
      description: "CCIM approved courses with practical emphasis",
    },
    {
      icon: <FaUserGraduate className="text-[#087521] text-xl" />,
      title: "Placement Support",
      description: "Career guidance and industry connections",
    },
  ];

  return (
    <section className="roboto bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-[#087521] bg-[#ccdcbc] rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Amrapali Ayurvedic College
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Pioneering authentic Ayurvedic education since 2003 in Unnao, U.P.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-[#ccdcbc] border-l-4 border-[#087521] p-6 rounded-r-lg">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Amrapali Ayurvedic Medical College & Hospital is dedicated to providing
                holistic, authentic Ayurvedic education. Our mission is to empower future
                healers with both modern knowledge and traditional wisdom.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a state-of-the-art campus, expert faculty, and clinical training, we
                prepare students to lead with skill and compassion in healthcare and wellness.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-start">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="">
              <a
                href="#admission"
                className="px-6 py-3 bg-[#f8d816] hover:bg-[#e6c500] text-[#040504] font-semibold rounded-lg transition shadow-md hover:shadow-lg"
              >
                Explore Admissions
              </a>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src="/about-college.JPG"
                alt="Amrapali Ayurvedic College Campus"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-10 relative z-10 px-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md text-center border border-gray-100"
                >
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
