"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function IPTVBoxes() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full px-4 py-8 bg-[#1b1a1a] flex flex-col items-center gap-8" ref={divRef}>
      {/* IPTV Boxes Section */}
      {isVisible && <motion.div
        className="w-full max-w-7xl text-center my-20"
        initial={{ scale: .5, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#30A179]">Top IPTV Boxes for</span>
            <span className="text-white"> Seamless Streaming</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 font-normal max-w-4xl mx-auto">
            Reliable, fast, and easy-to-use IPTV boxes for the best viewing experience.
          </p>
        </div>
        
        {/* Product Cards Grid */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 - Onyx IPTV Box */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.nl/wp-content/uploads/2025/06/OXM-252x300.png"
                alt="Onyx IPTV Box"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Onyx IPTV Box</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$159.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 2 - Tvip 705 s */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/tvip-605s.jpg"
                alt="Tvip 705 s"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Tvip 705 s</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$209.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 3 - Formuler Z11 Pro */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/z-11-pro-600x715.jpg"
                alt="Formuler Z11 Pro"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Formuler Z11 Pro</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$284.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
          
          {/* Card 4 - Formuler Z11 Pro Max */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[320px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="w-full h-40 sm:h-[320px]  rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <Image 
                src="https://peoplestv.co/wp-content/uploads/2025/06/z11-pro-max-600x715.jpg"
                alt="Formuler Z11 Pro Max"
                width={200}
                height={200}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 text-center">Formuler Z11 Pro Max</h3>
            <p className="text-xl sm:text-2xl font-bold text-[#30A179] mb-4">$314.99</p>
            <button className="w-full bg-[#30A179] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#28a06a] transition-colors text-sm sm:text-base">
              BUY NOW
            </button>
          </motion.div>
        </div>
      </motion.div>}

      {/* Website Troubleshooting Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-16 px-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Website Troubleshooting Steps
        </h2>
        
        <p className="text-gray-300 text-center mb-8 leading-relaxed">
          Are you having trouble with a particular website? Trouble with every website? Here's a list of general purpose troubleshooting steps that you can take which might help. They're not going to fix every problem, but they're some good 'First steps' to take and they might just fix your problem straight away.
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-[#30A179] mb-3">1. Refresh the page</h3>
            <p className="text-gray-300 leading-relaxed">
              Sometimes when you load a webpage, things just don't work quite right - for too many reasons to list, a page might just simply not load correctly the first time. So the first thing to try is simply reloading the page. Forcing a complete refresh of a page tells your web browser to try downloading and displaying everything again.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-[#30A179] mb-3">2. Refresh the page</h3>
            <p className="text-gray-300 leading-relaxed">
              Sometimes when you load a webpage, things just don't work quite right - for too many reasons to list, a page might just simply not load correctly the first time. So the first thing to try is simply reloading the page. Forcing a complete refresh of a page tells your web browser to try downloading and displaying everything again.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-[#2d2d2d] rounded-lg p-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-[#30A179] mb-3">3. Refresh the page</h3>
            <p className="text-gray-300 leading-relaxed">
              Sometimes when you load a webpage, things just don't work quite right - for too many reasons to list, a page might just simply not load correctly the first time. So the first thing to try is simply reloading the page. Forcing a complete refresh of a page tells your web browser to try downloading and displaying everything again.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}