import {animate, motion} from 'framer-motion'
import Video1 from "../../../src/assets/Video1.mp4";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react'
import AOS from 'aos'; 
import 'aos/dist/aos.css';
AOS.init()


function LandingPage() {
    
  return (
    <div className='bg-zinc-900 p-10 pr-0 !scroll-smooth'>
        <div  className='bg-zinc-200 lg:ml-20 lg:p-0.4 mt-20 z-[1] rounded-l-lg '>
    <div className='w-full'>
        <div data-aos="slide-left" className='textstructure px-12 mt-2 mr-2'>
            {["Blue Ocean", "Corporation", "Presentations"].map((item, index)=>{
                return (              
            
                <div className='masker'>
               <div className='w-fit flex items-center overflow-hidden '>
                {index === 1 && (
                    <motion.div 
                    initial={{width: 0}}
                    animate={{width: "9vw"}}
                    transition={{ease: [0.76, 0, 0.24, 1], duration:1 }}
                     className='w-[9vw] relative top-[-0.4vw] rounded-md h-[5.7vw] bg-red-500'>
                     </motion.div>)}

                     
             

               <h1 className='flex text-6xl item-center uppercase text-[6.5vw] h-full leading-[7vw] tracking-tighter font-[`Founders_Grotesk_X-Condensed`] font-bold leading-[7.5vw]' >
                    {item}
                </h1>
                <div className=''>

               </div>

               </div>
              


               {/* video section */}

             

             </div>

             


                  
                
                  );
            })}

<div className='flex pl-9 ml-[23vw] w-full'>
               {/* <DotLottieReact
                src="https://lottie.host/20cb12e1-09f2-4542-a83b-f7869f0d49d7/M4ONNlQaYj.json"
                   loop
                   autoplay
                      /> */}
               </div>

        </div>

        <div>
               <div className='object-cover mt-22 h-[70vh]'>
               <video autoPlay loop muted playsInline className='h-[50vh] w-[50vw] p-4 ml-8'>
                <source src={Video1} type="video/mp4"/> 
                 </video>
                </div>

               </div>

                <div><h1 className='text-bold text-2xl justify-between items-center w-full p-10'>
                    MAKE YOUR AUDIENCE SAY</h1></div>
            <div className='p-1  lg:p-3 w-full justify-between items-center'>
        
            <h1 data-aos="zoom-in-up" className='text-5xl font-extrabold text-black text-bold lg:text-9xl lg:p-3 lg:w-full'>“Quality and Innovation</h1>
            <h1 data-aos="zoom-in-up" className='text-5xl font-extrabold text-black lg:text-9xl lg:p-3 lg:w-full'>For a Better Tomorrow</h1>

        </div>



        <div className='border-t-[1px] gap-1 border-zinc-600 mt-20 lg:flex justify-between item-center lg:py-3 lg:px-21 lg:px-21 lg:px-21'>
            {["Consulting", "Training", "Conferences"].map((item, index)=>(
                <p className='text-md tracking-tight leading-none font-medium'>
                    {item}
                    </p>
        ))}
        </div>

      




    </div>
    </div>
    </div>    
  )
}

export default LandingPage
