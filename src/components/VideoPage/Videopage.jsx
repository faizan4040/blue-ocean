import React, { useEffect, useState } from 'react'
import "./Videopage.css"
import Videos from '../../assets/myvideo.mp4'

function Videopage() {

const videoRef = useState(null);

useEffect(()=>{
  const handleLoad = ()=>{
    if(videoRef.current){
       videoRef.current.playbackRate = 0.75; // set the playback speed
      videoRef.current.play();
    }
  };

// add event listner to start video after page load
window.addEventListener('load', handleLoad);

//clean up the event listener on component unmount
return () =>window.removeEventListener('load', handleLoad);
},[]);



  return (
    <div className='object-cover'>
        <video  autoPlay loop muted playsInline className='background-video h-[100vh] w-[340vw]  playsInline preload="none"'>
        <source src={Videos} type="video/mp4"/> 
        </video>
        </div>
      
  )
}

export default Videopage


// h-[80vh] w-[340vw]