
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const EnquirySection1 = () => {
  const headingContainerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (headingContainerRef.current) {
      const headings = headingContainerRef.current.querySelectorAll("h1");
      const timeline = gsap.timeline();

      headings.forEach((heading, index) => {
        const headingText = heading.innerText;
        heading.innerHTML = "";
        const chars: HTMLElement[] = [];
        const words = headingText.split(" ");

        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement("span");
          wordSpan.className = "inline-block whitespace-nowrap";

          Array.from(word).forEach((char) => {
            const charWrapper = document.createElement("span");
            charWrapper.className = "inline-block overflow-hidden";

            const charSpan = document.createElement("span");
            charSpan.className = "inline-block translate-y-full";
            charSpan.innerText = char;

            charWrapper.appendChild(charSpan);
            wordSpan.appendChild(charWrapper);
            chars.push(charSpan);
          });

          heading.appendChild(wordSpan);

          if (wordIndex < words.length - 1) {
            const spaceSpan = document.createElement("span");
            spaceSpan.innerHTML = "&nbsp;";
            spaceSpan.className = "inline-block";
            heading.appendChild(spaceSpan);
          }
        });

        timeline.to(
          chars,
          { y: 0, duration: 1, stagger: 0.03, ease: "power4.out" },
          index * 0.1
        );
      });
    }

    if (textRef.current) {
      const text = textRef.current;
      const textContent = text.innerText;
      text.innerHTML = "";
      const chars: HTMLSpanElement[] = [];

      Array.from(textContent).forEach((char) => {
        const charSpan = document.createElement("span");
        charSpan.innerHTML = char === " " ? "&nbsp;" : char;
        charSpan.className =
          "inline-block opacity-30 font-light transition-opacity duration-300";
        text.appendChild(charSpan);
        chars.push(charSpan);
      });

      gsap.to(chars, {
        opacity: 1,
        stagger: 0.02,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const BuildingImage = () => (
    <div className="rounded-xl overflow-hidden shadow-lg mb-4">
      <img
        src="https://cdn.shopify.com/s/files/1/0070/5901/3716/files/ubiqum-coding-bootcamp.jpg?v=1686797831"
        alt="Building with MOCKUP sign"
        className="w-full h-auto object-cover rounded-xl transform transition-transform duration-300"
      />
    </div>
  );

  return (
    <section className="w-full px-4 md:px-8 my-6 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <div ref={headingContainerRef} className="mb-4">
            <h1 className="font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)] mb-2 text-[#000000]">
              Crack your goal
            </h1>
            <h1 className="font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)] mb-2">
              with Indore's Top
            </h1>
            <h1 className="font-extrabold leading-tight text-[clamp(2rem,4vw,3rem)]">
              Educator
            </h1>
          </div>

          <p
            ref={textRef}
            className="text-[#FF9A70] text-[clamp(1.2rem,2vw,1.5rem)] font-light mb-6"
          >
            Learn from coders, not tutors.
          </p>

          {/* Mobile image */}
          <div className="block md:hidden">
            <BuildingImage />
          </div>

          {/* Tailwind button instead of Bootstrap CustomButton */}
          <div className="w-full md:w-3/4">
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSe4XUthAQ980TWIxlUT_P5HATpNpWxkCbEPE6XxSFk0jMannA/viewform",
                  "_blank"
                )
              }
              className="w-full py-3 rounded-2xl bg-[#212529] text-white font-semibold text-lg hover:bg-black transition-colors duration-300"
            >
              Enquire for free
            </button>
          </div>
        </div>

        {/* Right Section (Desktop image) */}
        <div className="hidden md:block flex-1">
          <BuildingImage />
        </div>
      </div>
    </section>
  );
};

export default EnquirySection1;
