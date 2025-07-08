import { useEffect, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SLIDE_INTERVAL = 5000;

const slides = [
  {
    image: "/assets/hero-img/college-image.JPG",
    title: "Amrapali Ayurvedic Medical College & Hospital",
    subtitle: "Spreading the essence of Ayurveda & holistic healthcare across generations.",
  },
  {
    image: "/assets/hero-img/college-image2.JPG",
    title: "Modern Campus with Ancient Roots",
    subtitle: "Combining Ayurveda with scientific learning for tomorrow's healers.",
  },
  {
    image: "/assets/hero-img/college-image3.JPG",
    title: "Admissions Open Now",
    subtitle: "Join a legacy of healing and excellence.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToPrevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), SLIDE_INTERVAL * 2);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), SLIDE_INTERVAL * 2);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), SLIDE_INTERVAL * 2);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      goToNextSlide();
    }, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNextSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden" aria-label="Hero carousel">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto animate-fadeInSlow">
          <p className="text-white uppercase tracking-widest text-xs sm:text-sm md:text-base font-medium mb-4">
            A Legacy of Healing & Wisdom
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight mb-6">
            {slides[current].title}
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-8">
            {slides[current].subtitle}
          </p>
          <a
            href="#apply"
            className="inline-block px-6 py-3 bg-[#f8d816] hover:bg-yellow-500 text-black text-sm md:text-base font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us →
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 bg-[#f8d816] hover:bg-yellow-500 text-black w-10 h-10 md:w-12 md:h-12 rounded-full z-30 shadow-md flex items-center justify-center transition duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-[#f8d816] hover:bg-yellow-500 text-black w-10 h-10 md:w-12 md:h-12 rounded-full z-30 shadow-md flex items-center justify-center transition duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#f8d816] w-5" : "bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
