import React from 'react'
import AnimatedTitle from './AnimationTitle'
import Button from './Button'
import { useRef } from 'react'
import gsap from "gsap"






const Contact = () => {

 

  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  const ImageClipBox = ( { src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} alt="image" id="clipping-video"  onMouseDown={handleMouseLeave} onMouseEnter={handleMouseLeave} onMouseMove={handleMouseMove} />
    </div>
)



  return (
    <div id="contact" className='my-20 min-h-96 w-screen px-10'>
        <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
            <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1 translate-x-10" />
                <ImageClipBox
                
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-20 translate-y-60 translate-x-10"
          />
            </div>
            <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
            
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
            
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer hover:bg-white hover:text-black font-zentry" />
        </div>
        </div>
      
    </div>
  )
}

export default Contact
