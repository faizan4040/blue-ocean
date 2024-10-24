import React from 'react'
import Consulting from '../../assets/Consulting.jpg'
import Conferences from '../../assets/Conferences.jpg'
import Training from '../../assets/Training.jpg'

function KeyVerticals() {

     return (
        <div className='w-full h-[91vh] bg-zinc-900 items-center'>
         <div className='cardcontainer p-3 h-[13vh]'>
           <div className='card rounded-full  h-[9vh] bg-[#2e54ed] items-center justify-center dark:md:hover:bg-blue-400'>
            <h1 className='text-black font-bold text-1xl flex items-center justify-center '>CONSULTING</h1>
           </div>
         </div>

         <div className='cardcontainer p-3 h-[13vh]'>
           <div className='card rounded-full  h-[9vh] bg-[#fd3f32] items-center justify-center dark:md:hover:bg-blue-400'>
            <h1 className='text-black font-bold text-1xl flex items-center justify-center '>TRAINING</h1>
           </div>
         </div>


         <div className='cardcontainer p-3 h-[20vh]'>
           <div className='card rounded-full  h-[9vh] bg-[#fff53e] items-center justify-center dark:md:hover:bg-blue-400'>
            <h1 className='text-black font-bold text-1xl flex items-center justify-center '>CONFERENCES

</h1>
           </div>
         </div>

         

      


      

         </div>
        
     )
}
export default KeyVerticals
