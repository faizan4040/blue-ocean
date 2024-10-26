import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Asia from '../../assets/Asia.png'
import Award from'../../assets/Award_1.jpeg'
import DubaiAward from '../../assets/Dubai_Award.jpg'
import Ministry from '../../assets/Ministry.jpg'
import AOS from 'aos'; 
import 'aos/dist/aos.css';
AOS.init()


function ScrollHorizontal() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="  bg-zinc-900 h-[100vh]">


           <div className="scroll-section bg-zinc-200 lg:mr-100">
              <div className="w-1/2 mr-52 pr-90 top-2">
              <h1 data-aos="fade-down-right" className="text-4xl lg:text-8xl lg:mr-10 uppercase text-cyan-480 font-bold">THE</h1>
              <h1 data-aos="fade-down-right" className="text-4xl lg:text-8xl uppercase text-black font-bold">results</h1>
              <h1 data-aos="fade-down-right" className="text-4xl lg:text-8xl uppercase text-cyan-480 font-bold">can be</h1>
              <h1 data-aos="fade-down-right" className="text-4xl lg:text-8xl uppercase text-cyan-480 font-bold">PRETTY</h1>
              <h1 data-aos="fade-down-right" className="text-4xl lg:text-8xl uppercase text-cyan-480 font-bold">spectacular</h1>

              </div>
              </div>
          </div>







          <div className="scroll-section bg-zinc-900 flex">
           
           <div className="w-1/2">
           <h1 data-aos="zoom-in-up" className="text-4xl lg:text-7xl uppercase text-cyan-400 font-bold">Great Place To Work</h1>
           <h1 data-aos="zoom-in-up" className="text-4xl lg:text-7xl uppercase text-white font-bold">Best Workplaces Asia</h1>
           <h1 data-aos="zoom-in-up" className="text-4xl lg:text-7xl uppercase text-cyan-400 font-bold">2024</h1>
           </div>

           <div className="w-1/3 h-[70vh]">
           <img src={Asia}></img>

           </div>

       </div>






          <div className="scroll-section bg-zinc-900 gap-30 lg:w-50">
          <div className="w-[50vh] h-[15vh] pl-20">
              <img src={DubaiAward} className="rounded-3xl "></img>

              </div>

          <div className="w-[50%] lg:w-[100vh] p-4 pt-5">
          <h1 className="text-4xl  lg:text-7xl uppercase text-white font-bold">Winner of the year 2023</h1>
              <h1 data-aos="zoom-in-up" className="text-4xl  lg:text-7xl uppercase text-green-400 font-bold">Dubai Quality</h1>
              <h1 data-aos="zoom-in-up" className="text-4xl  lg:text-7xl uppercase text-green-400 font-bold">Appreciation</h1>
              <h1 data-aos="zoom-in-up" className="text-4xl lg:text-7xl uppercase text-green-400 font-bold">Award</h1>

              </div>

            </div>
 


          <div className="scroll-section bg-zinc-900 gap-20">
          <div className="w-1/3 lg:h-[50vh]">
              <img src={Ministry} className="rounded-3xl"></img>
              </div>

          <div className="w-[40%]">
          <h1 className=" text-3xl lg:text-7xl uppercase text-orange-800 font-bold">Ministry Of Human </h1>
              <h1 className=" text-3xl lg:text-7xl uppercase text-zinc-600 font-bold">Resources</h1>
              <h1 className="text-3xl lg:text-7xl uppercase text-white font-bold">& Emiratisation</h1>

              </div>
          </div>


        
        </div>
      </div>
    </section>
  );
}

export default ScrollHorizontal;