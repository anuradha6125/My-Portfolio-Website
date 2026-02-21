import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    gsap.fromTo(
      element,
      { opacity: 0, y: 75 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Start animation when top of element hits 85% of viewport height
          toggleActions: "play none none none", // Play once
        },
      }
    );

    return () => {
        // Cleanup if necessary, though ScrollTrigger usually handles it well
         ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <div ref={ref} className="reveal-on-scroll">{children}</div>;
};

export default RevealOnScroll;
