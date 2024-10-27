import React from 'react'

function Navbar() {
  return (
  <nav className='z-[1000] p-3 flex bg-gray-300 justify-between items-center fixed top-0 left-0 right-0 bg-transparent'>
    <div className='bg-[#747474] sm:p-1 p-1 rounded-3 ustify-between items-center'>
    <a href='#' id='brand' className='flex gap-2 items-center'>
      <button className='btn bg-zinc-100  py-1 lg:h-[4vw] md:h-[5.5vw] h-[13vw] md:w-30 w-26 rounded-3 font-extrabold text-1xl p-1 type="button" text-[#000000]'>BlueOcean</button>
      <button className='btn btn-sm hidden md:block lg:h-[4vw]  bg-zinc-100 py-1 md:py-1 md:px-1 md:h-11 md:w-17 h-16 w-28 rounded-2 font-medium " type="button sm:hidden'>portfolio<i class="bi bi-grid-3x3-gap-fill mr-1 p-1"></i></button>
      <button className='btn btn-sm hidden md:block lg:h-[4vw] bg-zinc-100 py-1 md:py-1 md:h-11 md:w-16 h-16 w-16 rounded-2 font-medium" type="button"'>About</button>
      <button className='btn btn-sm hidden md:block lg:h-[4vw] bg-zinc-100 py-1 md:py-1 md:h-11 md:w-16 h-16 w-18 rounded-2 font-medium" type="button"'>Insights</button>
    </a>
    </div>

    <div id='nav-menu' className=' hidden lg:flex gap-4'>
     <a href='#'className='font-medium hover:text-primary text-slate-100 text-xl'>HOME</a>
     <a href='#'className='font-medium hover:text-primary text-slate-100 text-xl'>ADVISORS</a>
     <a href='#'className='font-medium hover:text-primary text-slate-100 text-xl'>NEWS</a>
     <a href='#'className='font-medium hover:text-primary text-slate-100 text-xl'>AWARDS</a>
     <a href='#'className='font-medium hover:text-primary text-slate-100 text-xl'>CAREERS</a>
   </div>


<div className='bg-[#747474] p-1 sm:p-1 rounded-3'>
<button className='p-3 md:block text-slate-900 hidden border bg-yellow-500'> 
  Let's do this
  </button>

    <button className="btn md:hidden bg-yellow-400 px-1 py-1 h-8 w-8 mr-1.1 rounded-2 font-bold p-4 justify-between items-center" type="submit"><i class="bi bi-grid-3x3-gap-fill mr-1 p-1"></i>

    </button>
    </div>

  </nav>


  )




}

export default Navbar
