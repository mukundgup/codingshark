"use client"; // 👈 very important for Next.js (client-side hook)

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Options {
  threshold?: number;
  headingStagger?: number;
  headingDuration?: number;
  headingEase?: string;
}

const useRepeatScrollTextSplitting = ({
  threshold = 0.1,
  headingStagger = 0.03,
  headingDuration = 1,
  headingEase = "power4.out",
}: Options = {}) => {
  const headingContainerRef = useRef<HTMLDivElement | null>(null);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const lastHeadingY = useRef(0);
  const headingTimeline = useRef<gsap.core.Timeline | null>(null);
  const headingPrepared = useRef(false);

  // Prepare heading elements
  const prepareHeadingElements = () => {
    if (!headingContainerRef.current || headingPrepared.current) return;

    const headings = headingContainerRef.current.querySelectorAll<
      HTMLHeadingElement
    >("h1, h2, h3, h4, h5, h6");

    headings.forEach((heading) => {
      const headingText = heading.innerText;
      heading.innerHTML = "";

      const words = headingText.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "heading-word inline-block";

        Array.from(word).forEach((char) => {
          const charWrapper = document.createElement("span");
          charWrapper.className = "char-wrapper inline-block overflow-hidden";

          const charSpan = document.createElement("span");
          charSpan.className = "heading-char inline-block translate-y-full";
          charSpan.innerText = char;

          charWrapper.appendChild(charSpan);
          wordSpan.appendChild(charWrapper);
        });

        heading.appendChild(wordSpan);

        // Add space between words
        if (wordIndex < words.length - 1) {
          const spaceSpan = document.createElement("span");
          spaceSpan.innerHTML = "&nbsp;";
          spaceSpan.className = "inline-block";
          heading.appendChild(spaceSpan);
        }
      });
    });

    headingPrepared.current = true;
  };

  // Animate the heading elements
  const animateHeading = () => {
    if (!headingContainerRef.current || !headingPrepared.current) return;

    // Reset any previous animation
    if (headingTimeline.current) {
      headingTimeline.current.kill();
    }

    setIsAnimationComplete(false);

    const headings = headingContainerRef.current.querySelectorAll(
      "h1, h2, h3, h4, h5, h6"
    );

    headingTimeline.current = gsap.timeline({
      onComplete: () => setIsAnimationComplete(true),
    });

    headings.forEach((heading, index) => {
      const chars = heading.querySelectorAll(".heading-char");

      gsap.set(chars, { y: "100%" }); // reset

      headingTimeline.current!.to(
        chars,
        {
          y: 0,
          duration: headingDuration,
          stagger: headingStagger,
          ease: headingEase,
        },
        index * 0.1
      );
    });
  };

  // Prepare elements on mount
  useEffect(() => {
    prepareHeadingElements();

    return () => {
      if (headingTimeline.current) headingTimeline.current.kill();
    };
  }, []);

  // Intersection observer for headings
  useEffect(() => {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const currentY = entry.boundingClientRect.y;
          const isScrollingDown = currentY < lastHeadingY.current;
          lastHeadingY.current = currentY;

          if (isScrollingDown || lastHeadingY.current === 0) {
            setHeadingVisible(true);
          }
        } else {
          setHeadingVisible(false);
          lastHeadingY.current = entry.boundingClientRect.y;
        }
      },
      { threshold }
    );

    if (headingContainerRef.current) {
      headingObserver.observe(headingContainerRef.current);
    }

    return () => {
      if (headingContainerRef.current) {
        headingObserver.unobserve(headingContainerRef.current);
      }
    };
  }, [threshold]);

  // Trigger animation when visible
  useEffect(() => {
    if (headingVisible) {
      animateHeading();
    }
  }, [headingVisible]);

  return {
    headingContainerRef,
    isAnimationComplete,
  };
};

export default useRepeatScrollTextSplitting;
