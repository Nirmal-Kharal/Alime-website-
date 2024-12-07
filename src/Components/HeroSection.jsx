import React from 'react'
import image from '../assets/1.jpg'

const HeroSection = () => {
  return (
    <><div className='w-full h-screen -z-10 absolute '>
     <div className='  w-full h-screen ' style={{backgroundImage:`url(${image})`}}>
      <div className=' absolute   w-full h-full bg-opacity-50  bg-black z-10 '>
        <div className='main  relative top-1/3'>
      <div className=' relative flex z-[100] w-1/3 flex-col justify-center top-1/4 left-[11%] '>
            <h1 className='text-[5vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9696] to-[#ffe89e]'>Hello</h1>
        </div>
        <div className=' relative  bottom-8 flex z-[100] w-1/3 flex-col justify-center top-2/4 left-[11%] '>
            <h1 className='text-[5vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff9696] to-[#ffe89e]  '>I'm Jackson</h1>
        </div>
        <div className='relative w-1/3  left-[11%] text-white font-semibold bottom-10 '>
            <p>I photograph very instinctively. I see how it is taken like that. I do not follow certain styles, philosophies or teachers.</p>



            {/* /////////////////////////////////////////////////////////////// Button ///////////////////////////////////////////////////// */}


        </div>
        <button className='relative   left-[11%] px-5 py-2   rounded-full border border-[#fc6060] hover:bg-[#fc6060] hover:cursor-pointer text-white font-semibold duration-300 '> Get a Quote </button>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////qoute///////////////////////////// */}
        <div className='relative w-1/3  left-[22%] top-[29vh]'><h2 className='italic font-medium underline text-white hover:text-[#fc6060]'>helloalime@gmail.com</h2></div>
        </div>
        
      </div>
      </div>
    </>
    
  )
}

export default HeroSection
