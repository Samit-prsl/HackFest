import React from 'react'
import Logo4 from '../assets/Logo4.png'
import { FaDiscord, FaLinkedin,FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=' bg-gray-700 h-full lg:flex lg:justify-between justify-items-end items-center p-8 px-6'>
        <div className=' p-4'>
           <div className=' flex justify-center items-center h-40'>
            <img src={Logo4} alt="Logo" className=' h-32 '/>
           </div>
            <div className=' flex justify-center items-center'>
                <p className=' text-center text-yellow-500 text-2xl'>&#169; HackFest</p>
            </div>
        </div>
        <div className='py-10 lg:py-0'>
            <ul className=' lg:flex flex-col justify-between items-center text-center font-[Trispace] text-2xl p-4 text-gray-300 '>
            <a href="/"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Home</li></a>
            <a href="/sponsers"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Sponsers</li></a>
            <a href="/tracks"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Tracks</li></a>
            <a href="/people"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>People</li></a>
            <a href="/schedule"> <li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>Schedule</li></a>
            <a href="/faq"><li className=' hover:underline hover:cursor-pointer hover:text-[#19A7CE]'>FAQ</li></a>
             </ul>
        </div>
        <div className=' flex lg:justify-between justify-center items-center text-4xl lg:gap-10 gap-6 py-5 text-gray-300'>
            <FaDiscord className=' hover:text-yellow-500 hover:cursor-pointer'/>
            <FaLinkedin className=' hover:text-yellow-500 hover:cursor-pointer'/>
            <FaGithub className=' hover:text-yellow-500 hover:cursor-pointer'/>
        </div>
    </div>
  )
}
