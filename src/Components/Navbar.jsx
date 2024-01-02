import React, { useState } from 'react'
import Logo4 from '../assets/Logo4.png'
import {VscThreeBars} from 'react-icons/vsc'
import {RxCross1} from 'react-icons/rx'
export default function Navbar() {

  const [click,SetClick] = useState(false);

  return (
   <>
         <div className=' flex h-28 bg-[#F6F1F1] lg:p-8 justify-center items-center lg:gap-14 gap-16 sticky z-10 top-0'>
        <a href="/"><img src={Logo4} alt="Logo" className=' h-24 '/></a>
       <div className=' hidden lg:block'>
       <ul className=' lg:flex justify-center items-center gap-10 font-[Trispace] text-2xl '>
            <a href="/"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Home</li></a>
            <a href="/sponsers"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Sponsers</li></a>
            <a href="/tracks"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Tracks</li></a>
           <a href="/people"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>People</li></a>
           <a href="/schedule"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Schedule</li></a>
            <a href="/faq"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>FAQ</li></a>
        </ul>
       </div>
        {
          click ?
          <>
                <div className=' flex-col justify-center items-center w-full'>
                <div className=' py-14'>
                     Empty div 
                </div>
               <div className=' w-full z-10 h-auto'>
                  <div className=' flex-col justify-center items-center gap-20 font-[Trispace] text-xl px-4 py-6 bg-[#F6F1F1] list-none'>
                    <div className=' flex justify-end items-end'>
                        <RxCross1 className='  ' onClick={()=>{SetClick(false)}}/>
                    </div>
                    <a href="/"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Home</li></a>
                    <a href="/sponsers"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Sponsers</li></a>
                    <a href="/tracks"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Tracks</li>
                    <a href="/people"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>People</li></a></a>
                    <a href="/schedule"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Schedule</li></a>
                    <a href="/faq"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>FAQ</li></a>
                  </div>
                </div>
                </div>
          </>
          :
          <>
          <VscThreeBars className=' text-4xl hover:text-gray-600 lg:hidden' onClick={()=>{SetClick(true)}}/>
          </>
        }
        </div>
    </>
  )
}
