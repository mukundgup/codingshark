"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollAnimation } from "./Hooks/fadeuptext"; // <-- apka animation hook
import img1 from "../../public/images/mukund.jpg";
import img2 from "../../public/images/annubhav.jpg"; // convert avif → jpg/png
import img3 from "../../public/images/sidhrath.jpg";   // convert avif → jpg/png

const Recruitment = () => {  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("left");
  const [isMobile, setIsMobile] = useState(false);

  const headingRef = useScrollAnimation({
    startTrigger: 1.2,
  });

  const stories = [
    {
      id: 1,
      image: img1,
      title: "mukund gupta",
      content:
        "As a recent BCA graduate, Neeraj was unsure where to begin. Thanks to Coding Sharks' intensive placement training, he landed a role at Amadeus as a Junior Developer right after college.",
    },
    {
      id: 2,
      image: img2,
      title: "Annubhav kumar",
      content:
        "Annubhav joined Coding Sharks during his final semester. The mentorship and mock interviews gave him the edge to crack Thoughtwin’s placement drive as a Software Trainee.",
    },
    {
      id: 3,
      image: img3,
      title: "Sidhrath shah",
      content:
        "Sidhrath always dreamed of working in tech but lacked direction. Coding Sharks helped him build real-world projects and ace technical interviews. He’s now a fresher engineer at Mindruby.",
    },
  ];

  // Responsive check
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Next & Prev slide
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection("left");
      setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }
  }, [isTransitioning, stories.length]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setDirection("right");
      setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    }
  }, [isTransitioning, stories.length]);

  // Auto slide
  useEffect(() => {
    const transitionTime = 500;
    const slideInterval = 5000;

    let slideTimer: NodeJS.Timeout | undefined;
    const transitionTimer = setTimeout(
      () => setIsTransitioning(false),
      transitionTime
    );

    if (!isPaused) {
      slideTimer = setTimeout(() => nextSlide(), slideInterval);
    }

    return () => {
      clearTimeout(transitionTimer);
      if (slideTimer) clearTimeout(slideTimer);
    };
  }, [activeIndex, isPaused, nextSlide]);

  return (
    <div className="w-full py-10">
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-light text-center md:text-left px-5 md:px-16 opacity-0 translate-y-20 transition-all duration-700 ease-out"
      >
        Students who got placed by us:
      </h2>

      <div
        className="relative max-w-6xl mx-auto px-5 md:px-10 mt-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <div className="relative w-full h-[500px] overflow-hidden ">
          {stories.map((story, index) => (
            <div
              key={story.id}
              className={`absolute inset-0 flex flex-col md:flex-row bg-gray-50 shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out ml-20 mr-20  ${
                index === activeIndex
                  ? "translate-x-0 opacity-100 z-10"
                  : direction === "left"
                  ? "translate-x-full opacity-0 z-0"
                  : "-translate-x-full opacity-0 z-0"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/3 w-full h-60 md:h-full relative">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center p-5 md:p-10">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {story.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-2xl hover:bg-orange-600 transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-2xl hover:bg-orange-600 transition"
        >
          &#10095;
        </button>

        {/* Indicators for Mobile */}
        {isMobile && (
          <div className="flex justify-center mt-5 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-orange-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recruitment;
