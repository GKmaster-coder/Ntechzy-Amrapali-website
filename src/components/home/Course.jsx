import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Course = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

 const courses = [
  {
    id: 1,
    title: 'B.A.M.S',
    description: 'An undergraduate program that blends ancient Ayurvedic science with modern medical knowledge.',
    duration: '5.5 Years (Including Internship)',
    eligibility: '10+2 with PCB, NEET qualified',
    image: '/assets/course-img/bams.png',
  },
  {
    id: 2,
    title: 'M.D',
    description: 'Postgraduate program in Ayurvedic specializations focused on clinical excellence and research.',
    duration: '3 Years',
    eligibility: 'B.A.M.S Degree',
    image: '/assets/course-img/md.png',
  },
  {
    id: 3,
    title: 'AY. Nursing',
    description: 'Diploma-level course focused on Ayurveda-based patient care and nursing practices.',
    duration: '2 Years',
    eligibility: '10+2 (Any Stream)',
    image: '/assets/course-img/nursing.png',
  },
  {
    id: 4,
    title: 'AY. Pharmacist',
    description: 'Training for preparation and dispensing of Ayurvedic medicines in clinical setups.',
    duration: '2 Years',
    eligibility: '10+2 with Science',
    image: '/assets/course-img/pharmacist.png',
  },
];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#f8d816] to-amber-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Our Courses
          
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of Ayurvedic education programs
          </p>
        </div>

        {/* Custom Navigation Arrows (must be outside Swiper) */}
        <div className="flex justify-between items-center mb-4">
          <div ref={prevRef} className="swiper-button-prev cursor-pointer !text-[#087521] hidden md:flex" />
          <div ref={nextRef} className="swiper-button-next cursor-pointer !text-[#087521] hidden md:flex" />
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="relative"
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              {/* Slide Card */}
              <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#087521] mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start">
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-[#087521]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><strong>Duration:</strong> {course.duration}</span>
                      </p>
                      <p className="flex items-start">
                        <svg className="w-4 h-4 mt-0.5 mr-2 text-[#087521]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><strong>Eligibility:</strong> {course.eligibility}</span>
                      </p>
                    </div>
                  </div>
                  <button className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-[#087521] hover:bg-green-700 rounded-lg transition-colors duration-300 flex items-center justify-center">
                    Know More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination !relative mt-8 !bottom-0"></div>
      </div>

      {/* Custom Swiper Navigation Styles */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: #f0f0f0;
        }
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #087521;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Course;
