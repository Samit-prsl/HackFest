import React from 'react'
import Logo5 from '../../assets/Logo5.png'

export default function Info() {
  return (
    <div className=' bg-black min-h-screen font-[Trispace] text-blue-300 lg:px-10 px-8 py-12 lg:flex gap-10'>
        <img src={Logo5} alt="..." className=' h-full lg:block hidden '/>
        <h1 className=' lg:hidden block text-3xl font-[ubuntu+mono] font-bold text-blue-500 hover:text-blue-800 px-3'>HOURS</h1>
        <div className=' lg:p-6 p-3 lg:text-3xl text-xl'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore eaque vero aspernatur minus, doloremque animi ex ducimus. Adipisci nisi doloremque earum placeat temporibus, fugiat nihil deserunt exercitationem, dolor quo doloribus, saepe necessitatibus. Voluptas natus, voluptatum aut vel facilis quae vitae tenetur nostrum atque consequuntur fugit distinctio dolorem, sunt fuga!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eveniet dignissimos mollitia minus
            </p>
        </div>
    </div>
  )
}
