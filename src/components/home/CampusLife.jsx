import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const campusItems = [
  {
    title: "Labs",
    img: "/assets/campus-img/lab.JPG",
  },
  {
    title: "Library",
    img: "/assets/campus-img/library.JPG",
  },
  {
    title: "Medical Store",
    img: "/assets/campus-img/store.JPG",
  },
  {
    title: "Classrooms",
    img: "/assets/campus-img/classroom.JPG",
  },
  {
    title: "Hospital Operation Theatre",
    img: "/assets/campus-img/ot.JPG",
  },
  {
    title: "X-Ray & Diagnostics Room",
    img: "/assets/campus-img/X-ray.JPG",
  },
];

// Split into two halves for two mobile carousels
const firstHalf = campusItems.slice(0, 3);
const secondHalf = campusItems.slice(3);

const CampusCard = ({ item }) => (
  <div className="group rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300">
    <div className="h-56 overflow-hidden">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="bg-[#f8d816] text-center py-3">
      <h5 className="text-lg font-semibold text-gray-900 tracking-wide">{item.title}</h5>
    </div>
  </div>
);

const CampusLife = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Campus Life at{" "}
          <span className="text-[#087521]">Amrapali Ayurvedic College</span>
        </h2>
        <p className="text-lg text-gray-700">
          The campus offers students a peaceful, well-equipped environment to grow
          academically and professionally. From fully functional Ayurvedic labs to
          serene learning spaces, Amrapali blends traditional wisdom with modern
          infrastructure.
        </p>
      </div>

      {/* 🔁 Mobile Carousel 1 */}
      <div className="block md:hidden mb-8">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.2}
        >
          {firstHalf.map((item, index) => (
            <SwiperSlide key={index}>
              <CampusCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔁 Mobile Carousel 2 */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1.2}
        >
          {secondHalf.map((item, index) => (
            <SwiperSlide key={index}>
              <CampusCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {campusItems.map((item, index) => (
          <CampusCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CampusLife;

