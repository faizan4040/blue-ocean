import React from 'react'
import "./Videopage.css"
import Videos from '../../assets/myvideo.mp4'

function Videopage() {
  return (
    <div className='object-cover'>
        <video autoPlay loop muted playsInline className='h-[100vh] w-[340vw] preload="none"'>
        <source src={Videos} type="video/mp4"/> 
        </video>
        </div>
      
  )
}

export default Videopage


// h-[80vh] w-[340vw]