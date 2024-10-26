import React from 'react'
import "../../components/ScrollHorizontal/Global.css"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
AOS.init()

function Asia() {
  return (
    <div className='hero__header h-[100vh]'>
      <h1 data-aos="slide-left" className='font-[Founders_Grotesk_X-Condensed] uppercase flex justify-between items-center bg-zinc-200 h-[120vw]'>
        An Award Winning organization</h1>
    </div>
  )
}

export default Asia
