"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

// 1. Define the slides data
const slides = [
  {
    id: 1,
    title: "Elevate Your Home With Our Doors & Windows!",
    description: "Whether you're in need of a brand-new garage door or looking to upgrade your current one, we have the perfect solution tailored just for you.",
    bgImage: "url('images/buildings.webp')", // Replace with your image paths
    linkText: "Explore Products",
    linkHref: "/products",
    // linkTextSecondary: "Contact Us",
    // linkHrefSecondary: "/contact",
  },
  {
    id: 2,
    title: "Seamless Installation. Lasting Quality.",
    description: "Our certified professionals ensure a perfect fit and long-term performance, giving you peace of mind with every installation.",
    bgImage: "url('images/building1.webp')", // Replace with your image paths
    linkText: "Get a Free Quote",
    linkHref: "/quote",
    // linkTextSecondary: "See Our Work",
    // linkHrefSecondary: "/gallery",
  },
  // Add more slides as needed...
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(timer); // Cleanup
  }, [slides.length]);
  
  const currentSlide = slides[currentIndex];

  return (
    <section className="relative h-[80vh] rounded-bl-[150px] rounded-tr-[150px] mx-4 mt-0  overflow-hidden ">
      
      {/* Background Image Container with AnimatePresence */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide.id} // Key is crucial for AnimatePresence to detect a change
          className="absolute inset-0 bg-cover bg-center bg-no-repeat p-10"
          style={{ backgroundImage: currentSlide.bgImage }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Longer transition for a smooth background fade
        />
      </AnimatePresence>
      
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-end">
        <div className="text-white px-6 md:px-12 pb-16 text-left max-w-4xl mx-auto md:mx-0">
          
          {/* Content with AnimatePresence for smooth text transition */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide.id} // Key for content transition
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 className="text-4xl md:text-6xl font-manrope font-extrabold mb-4">
                {currentSlide.title}
              </motion.h1>

              <motion.p className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200">
                {currentSlide.description}
              </motion.p>

             
            </motion.div>
          </AnimatePresence>
           <div className="flex space-x-4">
                <Link
                  href={currentSlide.linkHref}
                  className="inline-block bg-[#a3b18a] hover:bg-[#8d9a74] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition"
                >
                  {currentSlide.linkText}
                </Link>
              
              </div>
        </div>
      </div>
    
    </section>
  );
}