import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

export default function Body() {
    //363062-deep
    //4D4C7D-light
    //F99417-yellowish
  return (
    <div className=' bg-[#4D4C7D] h-full p-7'>
      <div className=' lg:p-8 p-6'>
        <h1 className=' lg:text-9xl text-7xl text-center text-gray-400 hover:text-[#F99417] hover:cursor-pointer'>Lorem, ipsum dolor.</h1>
      </div>
      <div className=' lg:flex justify-center items-center p-8 w-full py-8 gap-20'>
            <div className=' lg:flex justify-center items-center lg:gap-6 lg:w-1/2 w-full py-6'>
                <FaLocationArrow className=' lg:text-[12rem] text-4xl text-[#F99417]' />
                <p className=' lg:text-4xl text-2xl font-mono'>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
            </div>
            <div className=' lg:w-1/4 w-full py-6 lg:py-0'>
              <button className=' btn btn-circle btn-outline bg-transparent hover:bg-[#ca9049] w-full font-[Trispace]'>Register</button>
            </div>
      </div>
    </div>
  )
}
