import {motion} from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-container data-scroll-section data-scroll-speed="1.2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 overflow-hidden whitespace-nowrap text-white'>

            <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[8vw] leading-none font-[Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[7vw] pt-10 -mt-5 mb-4'>
            Quality and Innovation</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: '-100%'}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[8vw] leading-none font-[Founders_Grotesk_X-Condensed] font-semibold uppercase -mb-[7vw] pt-10 -mt-5 mb-4'>
            For a Better Tomorrow</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
