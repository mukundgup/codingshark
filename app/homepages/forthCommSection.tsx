"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "./Hooks/fadeuptext"; // <-- apna custom hook rakho
import useRepeatScrollTextSplitting from "./Hooks/textsplitting"; // <-- apna custom hook rakho
import CustomButton from "./CustomButton"; // <-- apna custom button rakho

const CommunitySection = () => {
  const [imageVisible, setImageVisible] = useState(false);

  // text animation hook
  const { headingContainerRef, isAnimationComplete } =
    useRepeatScrollTextSplitting({
      threshold: 0.2,
      headingStagger: 0.02,
      headingDuration: 0.8,
    });

  // image animation hook
  const imageAnimationRef = useScrollAnimation({
    startTrigger: 0.9,
    endTrigger: 0.3,
    startY: 50,
    endY: 0,
  });

  useEffect(() => {
    if (isAnimationComplete) {
      setImageVisible(true);
    }
  }, [isAnimationComplete]);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left side - text */}
        <div className="md:col-span-5 space-y-4">
          <h6 className="text-gray-500 text-sm uppercase tracking-wide">
            About us
          </h6>
          <div ref={headingContainerRef}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
              Transforming Education Through Hands-on Expertise
            </h2>
          </div>
        </div>

        {/* Right side - image */}
        <div className="md:col-span-7">
          <div className="bg-gray-100 h-full">
            <div
              ref={imageAnimationRef}
              className={`w-full h-full transition-opacity duration-1000 ${
                imageVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src="https://media.istockphoto.com/id/1201405341/photo/university-students-studying-with-teacher.jpg?s=2048x2048&w=is&k=20&c=NCRypRPOSZU4TRIG5tjj9yGlgiwW2gypnJUEEjmhuLA="
                alt="Teacher helping students with technology"
                className="w-full h-full object-cover rounded-xl shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* paragraph + button */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        <div className="md:col-span-6 md:col-start-7 space-y-4">
          <p
            ref={useScrollAnimation({
              startTrigger: 0.9,
              endTrigger: 0.3,
              startY: 50,
              endY: 0,
            })}
            className="text-gray-600 text-sm md:text-base leading-relaxed font-light"
          >
            At our institute, we believe in the power of practical
            learning and personalized attention. Our approach combines hands-on
            experiences with dedicated one-on-one mentorship to ensure every
            student masters both theoretical concepts and their real-world
            applications. We continuously adapt our teaching methods based on
            industry trends and student feedback to create the most effective
            learning environment possible.
          </p>
          {/* <div className="w-48">
            <CustomButton
              text="Learn More"
              accentColor="#FF9A70"
              primaryColor="#ffffff"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
