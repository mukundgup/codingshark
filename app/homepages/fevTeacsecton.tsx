"use client";

import React, { useRef, useEffect, useState } from "react";

const TeachingMethods = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Hide scrollbar globally for this section
  useEffect((): (() => void) => {
    const style = document.createElement("style");
    style.textContent = `
      .teaching-methods-container::-webkit-scrollbar { display: none; }
      .teaching-methods-container { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div
      ref={containerRef}
      className="teaching-methods-container flex flex-col md:flex-row w-full h-screen overflow-y-auto scroll-smooth font-sans"
    >
      {/* Left Content */}
      <div className="w-full md:w-2/5 max-w-xl p-6 md:p-10 md:sticky top-0 h-auto md:h-screen flex flex-col justify-center bg-white">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Teaching Methods
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Experience accelerated growth through our hands-on learning approach
          and personalized one-on-one mentorship programs designed for your
          success.
        </p>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col gap-6 md:gap-10">
        {/* Hands-on Learning */}
        <div className="bg-[#FFF8ED] rounded-2xl shadow-md p-6 md:p-10 min-h-[180px] flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="text-orange-500 text-lg md:text-xl font-medium mb-2">
            Hands-on Learning
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Learn by doing, not just listening
          </h2>
        </div>

        {/* Mentorship */}
        <div className="bg-[#F8F0FF] rounded-2xl shadow-md p-6 md:p-10 min-h-[180px] flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="text-purple-500 text-lg md:text-xl font-medium mb-2">
            One-on-One Mentorship
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Personalized guidance from experts
          </h2>
        </div>

        {/* Real-world Projects */}
        <div className="bg-[#F0FFE9] rounded-2xl shadow-md p-6 md:p-10 min-h-[180px] flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="text-green-500 text-lg md:text-xl font-medium mb-2">
            Real-world Projects
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Build your portfolio while learning
          </h2>
        </div>

        {/* Continuous Assessment */}
        <div className="bg-[#E9F6FF] rounded-2xl shadow-md p-6 md:p-10 min-h-[180px] flex flex-col relative transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
          <span className="text-sky-500 text-lg md:text-xl font-medium mb-2">
            Continuous Assessment
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Track progress with personal feedback
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TeachingMethods;
