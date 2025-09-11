"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img from '../../public/images/adarshsir.jpg'
import manmohansir from '../../public/images/manhohansir.jpg'
import sidh from '../../public/images/sidhrath.jpg'
import mukund from '../../public/images/mukund.jpg'
import krishna from '../../public/images/krishna.jpg'
import annubhav from '../../public/images/annubhav.jpg'
// Simple Star Component
const Star = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "#FFCA28" : "none"}
    stroke={filled ? "#FFCA28" : "#e0e0e0"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-1"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const GoogleReviewsSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "krishna  yadav",
      rating: 5,
      time: "7 months ago",
      reviewCount: "2 reviews·1 photo",
      text: "I recently completed a course at Coding Sharks, and it was an incredible experience.",
      profilePicture: "/",
      img: krishna,
    },
    {
      id: 2,
      name: "Manhohan lanjhesh",
      rating: 5,
      time: "7 months ago",
      reviewCount: "2 reviews",
      text: "I had a great experience at Coding Sharks...",
      profilePicture: "/",
      img: manmohansir,
    },
    {
      id: 3,
      name: "siddharth shah",
      rating: 5,
      time: "7 months ago",
      reviewCount: "2 reviews",
      text: "Fantastic learning experience at Coding Sharks...",
      profilePicture: "/",
      img:sidh, // Changed to local image
    },
    {
      id: 4,
      name: "mukund gupta",
      rating: 5,
      time: "7 months ago",
      reviewCount: "2 reviews",
      text: "Amazing place to learn Python and Data Analytics...",
      profilePicture: "/",
      img: mukund, // Changed to local image
    },
    {
      id: 5,
      name: "Annubhav ",
      rating: 5,
      time: "3 months ago",
      reviewCount: "Local Guide · 35 reviews · 7 photos",
      text: "Love the way of teaching. Live projects live learning...",
      profilePicture: "/",
      img: annubhav, // Changed to local image
    },
  ];

  // Clone for infinite effect
  const allReviews = [...reviews, ...reviews, ...reviews];

  // Auto Scroll Effect
  useEffect(() => {
    if (!sliderRef.current || isHovered) return;

    const slider = sliderRef.current;
    let animationId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const moveX = -(elapsed * 0.03) % (reviews.length * 340); // adjust card width

      slider.style.transform = `translateX(${moveX}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered, reviews.length]);

  // Review Card Component
  const ReviewCard = ({ review }: { review: any }) => (
    <div className="min-w-[280px] md:min-w-[500px] bg-white rounded-xl shadow-md p-4 flex flex-col gap-2">
      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src={review.img}
            alt={review.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{review.name}</h3>
          <p className="text-xs text-gray-500">{review.reviewCount}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} filled={i < review.rating} />
        ))}
        <span className="ml-2 text-xs text-gray-500">{review.time}</span>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-700 flex-grow overflow-auto">{review.text}</p>

      {/* Link */}
      <a
        href={review.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline mt-2"
      >
        View in Google Reviews
      </a>
    </div>
  );

  return (
    <section className="w-full bg-white py-10 text-center">
      {/* Heading */}
      <div>
        <h2 className="text-2xl md:text-4xl font-light mb-2">
          What Our Alumni Say About Us:
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Why Students Choose Coding Sharks
        </p>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden mt-10">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Track */}
        <div
          ref={sliderRef}
          className="flex gap-6 px-4 transition-transform duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {allReviews.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSlider;
