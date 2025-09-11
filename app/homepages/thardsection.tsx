"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import images from public folder
import apexonLogo from "../../public/images/Apexon_Logo.jpg";
import cLogo from "../../public/images/c-logo.png";
import d1 from "../../public/images/d1.jpg";
import image from "../../public/images/image.jpg";
import mrLogo from "../../public/images/mr-logo.png";
import orange from "../../public/images/orange.png";

const logos = [apexonLogo, mrLogo, orange, d1, cLogo, image];

export default function LogoDisplay() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center w-full px-4 md:px-6 my-10 md:my-16"
    >
      {/* Title */}
      <div className="w-full text-left mb-6 md:mb-10">
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug">
          Our students got placed at :
        </h4>
      </div>

      {/* Logos Grid */}
      <motion.div
        className="grid grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-5xl w-full"
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-2 hover:scale-105 transition-transform"
          >
            <Image
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-8 w-auto md:h-12 lg:h-16 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
