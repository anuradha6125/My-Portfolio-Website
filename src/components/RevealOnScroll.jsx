import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: 60,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    return () => {
      const triggers = ScrollTrigger.getAll().filter(t => t.vars.trigger === element);
      triggers.forEach(t => t.kill());
    };
  }, [delay]);

  return <div ref={ref} className="reveal-on-scroll">{children}</div>;
};

export default RevealOnScroll;
