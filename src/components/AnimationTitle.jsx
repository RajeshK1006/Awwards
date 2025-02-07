import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";


gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    //timeline animations are used to animate on the time goes by , in which second it should animate , delaying, ...
    const ctx = gsap.context(() => {
      // useGSAP (() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // chooses the element that should be animated
          start: "300 bottom",  // starts the animation when the scrolled pixel reaches the 200 pixel from the top of the screen and merges with the bottom of the view point or the screeen line
          end: "center bottom", // point where the scroll trigger deactivates for this target
          toggleActions: "play none none reverse", // controls the animation with 4 values --> play,  pause, resume, reset, none
        //will play the animation when entering, pause it when leaving, resume it when entering again backwards, and reset (rewind back to the beginning) when scrolling all the way back past the beginning.
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 0.9, //opacity of the content
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)", // in the 2 d plan x- rotates the the left to right and the y- rotates in top - bottom both in +ve and -ve values
          ease: "power3.inOut",  // how animations will ease in and out in the start and geining of the animation
          stagger: 0.05, // delays each contents animation by time
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount to avoid memory leaks 
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;