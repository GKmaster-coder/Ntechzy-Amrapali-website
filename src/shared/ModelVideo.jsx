import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

const ModalVideo = ({ image, video }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  // Play or pause video when modal is toggled
  useEffect(() => {
    if (modalOpen) {
      videoRef.current?.play();
      document.body.style.overflow = "hidden";
    } else {
      videoRef.current?.pause();
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="relative font-sans antialiased">
      {/* Thumbnail with play button */}
      <button
        onClick={() => setModalOpen(true)}
        className="relative block w-full h-full group transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500/30 rounded-2xl overflow-hidden"
        aria-label="Watch the video"
      >
        <img
          className="w-full h-auto object-cover rounded-2xl shadow-lg transition-opacity duration-300 group-hover:opacity-90"
          src={image}
          width="768"
          height="432"
          alt="Video thumbnail"
        />
        {/* Animated play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 group-hover:bg-white transition-all duration-300 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Modal */}
      {modalOpen && (
        <>
          {/* Backdrop with subtle fade-in */}
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            onClick={() => setModalOpen(false)}
          />

          {/* Modal container with smooth entrance animation */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-6xl bg-black rounded-xl overflow-hidden shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button with hover effect */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white hover:text-white transition-colors duration-200 backdrop-blur-sm"
                aria-label="Close video"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video player */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                controlsList="nodownload"
                autoPlay
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModalVideo;