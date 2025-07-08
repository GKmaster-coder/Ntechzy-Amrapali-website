import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { BookOpen, Microscope, Glasses, Atom } from "lucide-react";

const services = [
  {
    title: "BAMS Program",
    description:
      "The 5½ year Ayurvedacharya (BAMS) course includes 4½ years of study and 1-year internship, structured across 3 professional stages.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "border-cyan-400 hover:shadow-[0_0_20px_#06b6d4]",
  },
  {
    title: "Eligibility & Admission",
    description:
      "Admission is open to students with Senior Secondary education in PCB (Physics, Chemistry, Biology) through all-India entrance test.",
    icon: <Microscope className="w-8 h-8" />,
    color: "border-orange-400 hover:shadow-[0_0_20px_#f97316]",
  },
  {
    title: "Clinical Internship",
    description:
      "One-year compulsory internship in Ayurvedic hospital settings offering real-time patient care experience.",
    icon: <Glasses className="w-8 h-8" />,
    color: "border-rose-400 hover:shadow-[0_0_20px_#f43f5e]",
  },
  {
    title: "Modern Facilities",
    description:
      "Well-equipped labs, herbal gardens, & expert faculty for holistic Ayurvedic medical education.",
    icon: <Atom className="w-8 h-8" />,
    color: "border-yellow-400 hover:shadow-[0_0_20px_#facc15]",
  },
];

const ServiceSection = () => {
  return (
    <div
      className="relative py-20 text-white overflow-hidden"
      id="services"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/service-img/lib.JPG')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Awesome Services</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Amrapali Ayurvedic Medical College offers modern tools and traditional values to create a balanced education.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={false}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mySwiper pb-2 px-2"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div
                className={`transition-all duration-300 ${service.bgColor} border-2  hover:${service.color} rounded-xl p-6 text-left flex flex-col h-70`}
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12  ${service.color.split(" ")[0]} mb-4 text-white`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-300 mb-4 flex-grow">{service.description}</p>
                <a
                  href="#readmore"
                  className="text-[#f8d816] font-medium hover:underline inline-flex items-center transition-colors duration-200"
                >
                  Read More <span className="ml-2">→</span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceSection;
