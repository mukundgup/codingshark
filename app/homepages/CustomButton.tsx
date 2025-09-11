"use client";

import React, { useRef, useEffect } from "react";

interface CustomButtonProps {
  text?: string;
  onClick?: () => void;
  icon?: string;
  accentColor?: string;
  primaryColor?: string;
  isNavButton?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  icon,
  accentColor = "#fefbe0",
  primaryColor = "#0e100f",
  isNavButton = false,
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // optional: recalc layout
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (circleRef.current && buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      circleRef.current.style.top = `${e.clientY - buttonRect.top}px`;
      circleRef.current.style.left = `${e.clientX - buttonRect.left}px`;
    }
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative grid place-items-center rounded-full border overflow-hidden cursor-pointer transition-all duration-300 
        ${isNavButton ? "h-16 w-16 p-0" : "px-6 py-2 w-full"} 
      `}
      style={{
        borderColor: accentColor,
        backgroundColor: primaryColor,
      }}
    >
      {/* Ripple Circle */}
      <div
        ref={circleRef}
        className="absolute w-[175%] aspect-square rounded-full scale-0 pointer-events-none transition-transform duration-300 ease-in-out"
        style={{ backgroundColor: accentColor }}
      ></div>

      {/* Text or Icon */}
      {icon ? (
        <i
          className={`bi bi-${icon} relative transition-colors duration-200`}
          style={{ color: accentColor }}
        ></i>
      ) : (
        <span
          className="relative font-medium transition-colors duration-200"
          style={{ color: accentColor }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default CustomButton;
