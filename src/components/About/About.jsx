"use client";
import { TextGenerateEffect } from '../ui/text-generate-effect';
import React from 'react'
import {EvervaultCard, Icon} from "../ui/evervault-card"

const words = `Blue Ocean Corporation is a leading conglomerate and world leader in driving 
            continuous growth and transformation across a multitude of industries and sectors. 
            Our commitment to quality, 
            innovation, and client satisfaction has propelled us to the forefront of the Consulting, 
            Training and Conferences landscapes.

             From our humble beginnings to our present status as a global market leader,
             we take pride in our 
             global footprint, and the transformative impact we have had on industries.

             With over 25+ years of excellence in accelerating careers and transforming
             organizations, we are a trusted partner for our B2B and B2C clients.

`; 

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

// bg-[#CDEA68]
// rounded-tl-3xl rounded-tr-4xl

function About() {




  return (

    <div className='w-full p-20 bg-zinc-900 lg:h-[150vh] '>

      
        <h2 className='font-extrabold text-2xl lg:text-3xl text-[#CDEA68]'>About Us</h2>
        <br/>
   
        <TextGenerateEffect words={words}/> 
    




      {/* cards animation */}
   
     <div className='max-w-[1200px] bg-metal text-white mx-auto py-3 px-12 grid lg:grid-cols-4 sm:grid-cols-2 gap-5  overflow-hidden'>

     <div className=''>
      <EvervaultCard text="25+" className="-top-2 pr-3 pl-3 pt-2 pb-2 w-18  h-[14rem] -ml-4"/>
      <h2 className="dark:text-white text-black  font-light pl-1 lg:p-2 uppercase">
      Years of Excellence
      </h2>
      </div>

      <div className=''>
      <EvervaultCard text="16+" className="-top-2 pr-3 pl-3 pt-2 pb-2 w-18  h-[14rem] -ml-4"/>
      <h2 className="dark:text-white text-black  font-light pl-1 lg:p-2 uppercase ">
      Operations in Countries
      </h2>
      </div>

      <div className=''>
      <EvervaultCard text="18+" className="-top-2 pr-3 pl-3 pt-2 pb-2 w-18  h-[14rem] -ml-4"/>
      <h2 className="dark:text-white text-black  font-light pl-1 lg:p-2 uppercase">
      Workforce Nationaloities
      </h2>
      </div>


      <div className=''>
      <EvervaultCard text="75+" className="-top-2 pr-3 pl-3 pt-2 pb-2 w-18  h-[14rem] -ml-4"/>
      <h2 className="dark:text-white text-black  font-light pl-1 lg:p-2 uppercase">
      Nationalities Trained
      </h2>
      </div>
    

     </div>

      
    </div>
  )
}

export default About
