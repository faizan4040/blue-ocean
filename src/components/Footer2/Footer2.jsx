import React from 'react'

function Footer2(){

    return(
        <div className='lg:flex gap-5  w-full h-screen bg-zinc-900 p-20 lg:p-20 font-["Founders_Grotesk_X-Condensed"]'>
            <div className='w-1/2  text-white pr-2 mt-10 flex flex-col justify-between'>
              <div className='heading'>
              <h1 className='text-5xl  lg:text-[5vw] text-[10vw] font-semibold'>BLUE-</h1>
              <h1 className='text-5xl  lg:text-[5vw] text-[10vw] font-semibold'>OCEAN</h1>
              </div>


              <div className='w-1/2  text-white pr-2'>
            <p>Blue Ocean Corporation © All Rights Reserved</p>
            </div>

            </div>


            <div className='w-1/2  font-["Founders_Grotesk_X-Condensed"] text-white pr-2 mt-10'>
              
              <h1 className='text-5xl lg:text-[5vw] text-[10vw] font-semibold'>CORPORATION</h1>

              <div className="dets font-['Neue_Montreal'] mt-10 grid grid-flow-col">
                <a className='block text-xl font-light' href='#'><i  class="bi bi-instagram" className='target="_red"'></i></a>
                <a className='block text-xl font-light' href='#'><i class="bi bi-facebook"></i></a>
                <a className='block text-xl font-light' href='#'><i class="bi bi-twitter-x"></i></a>
                <a className='block text-xl font-light' href='#'><i class="bi bi-whatsapp"></i></a>
                <a className='block text-xl font-light' href='#'><i class="bi bi-youtube"></i></a>
                <a className='block text-xl font-light' href='#'><i class="bi bi-envelope"></i></a>
              </div>


            </div>


        </div>
    )
}

export default Footer2