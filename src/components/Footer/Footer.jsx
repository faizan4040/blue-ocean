import React, { useEffect, useState } from 'react';
import { Meteors } from "../../components/ui/meteors"
import AOS from 'aos'; 
import 'aos/dist/aos.css';
AOS.init()

function Eyes() {

  return (

<div data-aos="fade-out" className='w-full bg-metal bg-zinc-900 text-white mx-auto py-4 px-12 grid lg:grid-cols-4 sm:grid-cols-2 gap-5 overflow-hidden  lg:h-[130vh]'>

  <div id="CArd-1"  className=''>

  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          London
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill">
          I Riverbank House 2, Swan Lane London EC4R 3TT, United Kingdom.
          </i>
          <i class="bi bi-telephone-fill">+44 7415 701800</i>  
          <br/>     
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>
          

 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


  </div>






  <div id='card-2' className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Riyadh
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          530/4, Fifth Floor, Al Akaria 2, Gate 8, Olaya, Riyadh, Saudi Arabia
          </i>
          <br/>
          <i class="bi bi-telephone-fill">+966 112 60 5558</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>
 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>



  </div>





  <div id="card-3" className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Pune
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          530/4, Fifth Floor, Al Akaria 2, Gate 8, Olaya, Riyadh, Saudi Arabia
          </i>
          <br/>
          <i class="bi bi-telephone-fill">+966 112 60 5558</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>

 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>


  </div>






  <div id='card-4' className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Kochi

          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          530/4, Fifth Floor, Al Akaria 2, Gate 8, Olaya, Riyadh, Saudi Arabia
          </i>
          <br/>
          <i class="bi bi-telephone-fill">+966 112 60 5558</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>

 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>







    <div id='card-4' className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Dubai
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          B2505, Latifa Towers, Sheikh Zayed Road, Opp. Museum of The Future, Dubai, UAE. </i>
          <br/>
          <i class="bi bi-telephone-fill">+971 4 314 8500</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>

 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>










    <div id='card-4' className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          New Delhi
          </h1>
          
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          1515 Mohan Dev Building, Tolstoy Marg, Connaught Place, New Delhi - 110001          </i>
          <br/>
          <i class="bi bi-telephone-fill">+91 11 20915150</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>
        


 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>







    <div id='card-4' className=''>
  <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          Hyderabad
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          <i class="bi bi-geo-alt-fill ">
          #3, Ground Floor, Cyber Crown, Hitech City, Madhapur, Hyderabad – 500081          </i>
          <br/>
          <i class="bi bi-telephone-fill">+91 40-67605533</i>  
          <br/>    
          <i class="bi bi-envelope-check-fill">contact@blueoceancorporation
          </i>
          </p>

 
          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>
 
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>









  </div>



  )
}


export default Eyes
