// app/homepages/hooks/fadeuptext.ts
"use client";
import { useEffect, useRef } from "react";

export function useScrollAnimation({ startY = 50, endY = 0, startTrigger = 0.9, endTrigger = 0.3 }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * startTrigger && rect.bottom > windowHeight * endTrigger) {
        ref.current.style.transform = `translateY(${endY}px)`;
        ref.current.style.opacity = "1";
        ref.current.style.transition = "all 0.6s ease-out";
      } else {
        ref.current.style.transform = `translateY(${startY}px)`;
        ref.current.style.opacity = "0";
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [startY, endY, startTrigger, endTrigger]);

  return ref;
}
