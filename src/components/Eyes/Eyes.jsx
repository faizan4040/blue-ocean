import React, { useEffect, useState } from 'react';
import Icon1 from '../../assets/Icon_1.png'
import Icon2 from '../../assets/Icon_2.png'
import Icon3 from '../../assets/Icon_3.png'
import Icon4 from '../../assets/Icon-4.png'

function Eyes() {
  const [rotate, setRotate] = useState(0);

useEffect(()=>{
  window.addEventListener("mousemove", (e)=>{
    let mouseX = e.clientX; 
    let mouseY = e.clientY;

    let deltaX = mouseX - window.innerWidth/2;
    let deltaY = mouseY - window.innerHeight/2;

    var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
    setRotate(angle-180);
  })
})

//[url("https://ochi.design/wp-content/uploads/2022/05//Top-Viewbbcbv-1-scaled.jpg")]
  return (


    <div className='eyes w-full h-screen overflow-hidden'>
      <div className='relative w-full h-full bg-center bg-cover bg-yellow-500'>
      <div className='absolute flex gap-10 top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            
            <div className='relative w-2/3 h-2/3  rounded-full bg-zinc-900'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
              <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
            </div>
          </div> 
         </div>
         <div className='w-[15vw] h-[15vw] flex items-center justify-center h-[15vw]  rounded-full bg-zinc-100'>

         <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
         <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
              <div className='w-7 h-7 rounded-full bg-zinc-100'></div>
            </div>
         </div>
         </div>
      </div>

      {/* ---------------------cards --------- */}

      <div className='w-full h-screen flex justify-between items-center px-32 gap-3'>
         <div className='cardcontainer flex h-[30vh] w-[80vw] ml-42 mt-[50vh] gap-14'>
           <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center bg-orange-700'>
           <img src={Icon1} className='w-50 mt-5'/>
            <h1 className='text-white text-1xl font-bold mt-10 w-100 flex items-center justify-center '>2.4+ million</h1>
            <h1 className='text-white text-1xl font-bold mb-11 w-100 flex items-center justify-center '>Social Media Reach</h1>
           </div>

           <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center bg-blue-900'>
           <img src={Icon2} className='w-24 mt-3'/>
            <h1 className='text-white text-1xl font-bold mt-5 w-100 flex items-center justify-center '>150,000</h1>
            <h1 className='text-white text-1xl font-bold mb-1 w-100 flex items-center justify-center '>Alumni Worldwide</h1>
           </div>

           <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center bg-orange-500'>
           <img src={Icon3} className='w-28 mt-5'/>
            <h1 className='text-white text-1xl font-bold mt-3 w-100 flex items-center justify-center '>1600</h1>
            <h1 className='text-white text-1xl font-bold mb-16 w-100 flex items-center justify-center '>Corporate Clients</h1>
           </div>

           <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center bg-green-700'>
           <img src={Icon4} className='w-50 mt-5'/>
            <h1 className='text-white text-1xl font-bold mt-10 w-100 flex items-center justify-center '>32,000</h1>
            <h1 className='text-white text-1xl font-bold mb-11 w-100 flex items-center justify-center '>Event Attendees</h1>
           </div>

         </div>
         </div>
            


      </div>      
      </div>
  )
}

export default Eyes
