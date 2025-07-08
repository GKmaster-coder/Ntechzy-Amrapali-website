import React from 'react';
import { motion } from 'framer-motion';

const Recognition = () => {
  const cards = [
    {
      img: "https://yt3.googleusercontent.com/FuanhtqOWiGxcW93V8QA08yjl2f9qUfVtM4szBx6Jacr5EOKYiU3Er7JMpPGT3jrweNnvGCnrQ=s900-c-k-c0x00ffffff-no-rj",
      alt: "Ministry of AYUSH Logo",
      title: "Ministry of AYUSH",
      desc: "The Ministry of AYUSH is responsible for developing education, research, and propagation of Indian systems of medicine including Ayurveda, Yoga, Naturopathy, Unani, Siddha, and Homeopathy.",
      schema: "https://schema.org/GovernmentOrganization"
    },
    {
      img: "https://static.toiimg.com/thumb/msid-107660526,width-400,resizemode-4/107660526.jpg",
      alt: "Government of Uttar Pradesh Logo",
      title: "Government of Uttar Pradesh",
      desc: "Amrapali Ayurvedic Medical College is approved and affiliated by the Government of Uttar Pradesh under the guidelines set by the Department of Medical Education.",
      schema: "https://schema.org/GovernmentOrganization"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/en/f/f6/Central_Council_of_Indian_Medicine_Logo.png",
      alt: "CCIM Logo",
      title: "Central Council of Indian Medicine (CCIM)",
      desc: "CCIM (now under NCISM) is a statutory body under the Ministry of AYUSH that regulates education and practice of Ayurveda, Siddha, and Unani medicine.",
      schema: "https://schema.org/GovernmentOrganization"
    },
    {
      img: "/assets/event-img/logo_1.png",
      alt: "India.gov.in Logo",
      title: "National Portal of India",
      desc: "Amrapali Ayurvedic Medical College is listed on the National Portal of India (india.gov.in), which is the official gateway to the Indian government's digital resources.",
      schema: "https://schema.org/GovernmentOrganization"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
  };

  return (
    <section
      id="recognition"
      className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f8d816] to-amber-100 text-gray-900 relative overflow-hidden"
      aria-labelledby="recognition-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#f8d816] blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#f8d816] blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            id="recognition-heading"
            className="text-4xl md:text-5xl font-bold text-[#964B00] mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Regulatory Approvals & Recognitions
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, idx) => (
            <motion.article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#f8d816] flex flex-col h-full relative"
              itemScope
              itemType={card.schema}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f8d816] to-[#97660c]" />

              <div className="p-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-[#f8d816] rounded-full opacity-20"></div>
                  <div className="relative bg-white p-4 rounded-full border-2 border-[#f8d816] shadow-sm">
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="h-16 w-16 object-contain"
                      loading="lazy"
                      itemProp="logo"
                    />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-gray-800 mb-4 leading-tight relative"
                  itemProp="name"
                >
                  <span className="bg-gradient-to-r from-[#97660c] to-[#f8d816] bg-clip-text text-transparent">
                    {card.title}
                  </span>
                </h3>

                <p
                  className="text-gray-700 mb-6 flex-grow text-left text-sm"
                  itemProp="description"
                >
                  {card.desc}
                </p>

                <div className="mt-auto w-full">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f8d816]/20 text-[#97660c]">
                    {card.schema.includes("Government") ? "Government Body" : "University"}
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;
