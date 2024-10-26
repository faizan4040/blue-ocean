import React from 'react'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            60,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          100,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


function KeyVerticals() {

     return (
        <div data-aos="fade-up" className='z-[999] w-full h-[70vh] lg:h-[100vh] bg-zinc-900 items-center'>
          <Tilt options={defaultOptions} >
         <div  className='cardcontainer p-3 h-[13vh] lg:h-[23vh]'>
           <div className='card rounded-full lg:h-[21vh]  h-[9vh] bg-[#3055ff] items-center justify-center dark:md:hover:bg-zinc-700'>
            <h1 className='text-black font-bold lg:text-6xl text-1xl flex items-center justify-center '>CONSULTING</h1>
           </div>
         </div>
         </Tilt>
        
        <Tilt>
         <div  className='cardcontainer p-3 h-[13vh] lg:h-[23vh]'>
           <div className='card rounded-full lg:h-[21vh] h-[9vh] bg-[#ffb701] items-center justify-center dark:md:hover:bg-zinc-700'>
            <h1 className='text-black font-bold lg:text-6xl text-1xl flex items-center justify-center '>Training</h1>
           </div>
         </div>
         </Tilt>
       


         <Tilt>
         <div  className='cardcontainer p-3 h-[13vh]'>
           <div className='card rounded-full lg:h-[21vh] h-[9vh] bg-[#fd4239] items-center justify-center dark:md:hover:bg-zinc-700'>
            <h1 className='text-black font-bold lg:text-6xl text-1xl flex items-center justify-center '>Conferences</h1>
           </div>
         </div>
         </Tilt>
      


         </div>
        
     )
}
export default KeyVerticals
