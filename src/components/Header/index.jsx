import React from 'react'
import Avatar from '../../assets/images/avatar.png'
import Blur1 from '../../assets/images/blur-1.png'
import Blur2 from '../../assets/images/blur-2.png'

export default function Header() {
  return (
    <div className='bg-rich-black min-h-screen relative overflow-hidden'>
      <img src={Blur1} className='absolute left-0 top-0 w-full h-full z-0 object-cover opacity-60' />
      <img src={Blur2} className='absolute right-0 top-0 w-full h-full z-0 object-cover opacity-60' />

      <h1 className='relative font-sora font-semibold text-7xl leading-[1.2] text-white z-10 mt-28 ml-7 md:mt-36 md:ml-14'>
        Hi, I'm <span className='text-wisteria'>Manu</span>
      </h1>

      <p className='text-white font-poppins font-regular ml-7 mt-2 md:ml-14 text-xl'>
        Front end Developer <br className='md:hidden'/>and UI/UX Designer
        </p>

      <div className='absolute bottom-0 right-11 transform translate-x-1/4 z-10'>
        <img src={Avatar} className='w-72 md:w-80 lg:w-96 object-cover' />
      </div>
    </div>
  )
}
