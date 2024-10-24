import React from 'react'
import Image1 from '../../assets/image-1.png'
import Image2 from '../../assets/image-2.png'
import Image3 from '../../assets/image-3.png'
import Image4 from '../../assets/image-4.png'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-4xl'>
        <h2 className='font-extrabold text-3xl'>About Us</h2>
        <br/>
        <h1 className='font-[`Neue_Montreal`] text-1xl p-1 tracking-tight w-full lg:text-3xl'>
            Blue Ocean Corporation is a leading conglomerate and world leader in driving 
            continuous growth and transformation across a multitude of industries and sectors. 
            Our commitment to quality, 
            innovation, and client satisfaction has propelled us to the forefront of the Consulting, 
            Training and Conferences landscapes.</h1>
        
         <p className='font-[`Neue_Montreal`] text-1xl p-1 tracking-tight w-full lg:text-2xl'>
         From our humble beginnings to our present status as a global market leader,
          we take pride in our 
         global footprint, and the transformative impact we have had on industries.
        </p>   
        
        <p className='font-[`Neue_Montreal`] text-1xl p-1 tracking-tight w-full lg:text-2xl'>
        With over 25+ years of excellence in accelerating careers and transforming
         organizations, we are a trusted partner for our B2B and B2C clients.
        </p>
      
      <div className=' w-full border-t-[1px] p-1  flex-col grid-flow-rows-4 lg:grid border-[#a1b562]  justify-between item-center mt-2  lg:grid-rows-1 grid grid-rows-3 grid-flow-col gap-4'>

        <div className='row-start-2 row-end-3 overflow-hidden rounded-2xl  bg-zinc-900 lg:block w-[30vw] h-[21vh] pl-5 pt-1 mt-3'>
            <img src={Image1} className='w-[90px] p-1 h-[90px] ml-3 hover:scale-125 duration-500'/>
            <p className='text-white mr-0.1 mb-2 uppercase'>Years of Excellence</p>
        </div>

        

        <div className='overflow-hidden rounded-2xl bg-zinc-900 lg:block w-[30vw] h-[21vh] pl-5 mt-3'>
            <img src={Image2} className='w-[90px] p-1 h-[90px] ml-3 hover:scale-125 duration-500'/>
            <p className='text-white p-2 mr-0.1 ml-2 uppercase'>Countries</p>

        </div>
       
        <div className='overflow-hidden rounded-2xl  grid-rows-2 bg-zinc-900 lg:block w-[30vw] h-[21vh] pl-5 mt-3'>
            <img src={Image3} className='w-[90px] p-1 h-[90px] ml-3 hover:scale-125 duration-500'/>
            <p className='text-white p-2 ml-2 mb-14 uppercase'>Workforce Nationalities</p>
        </div>


        <div className='overflow-hidden rounded-2xl bg-zinc-900 lg:block w-[30vw] h-[21vh] pl-5 mt-3'> 
            <img src={Image4} className='w-[90px] p-1 h-[80px] ml-3 hover:scale-125 duration-500'/>
            <p className='text-white p-2 ml-2 uppercase'>Nationalities Trained</p>

        </div>

      </div>

      
    </div>
  )
}

export default About
