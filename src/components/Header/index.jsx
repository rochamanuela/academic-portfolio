import React from 'react'
import Avatar from '../../assets/images/avatar.png'
import Blur1 from '../../assets/images/blur-1.png'
import Blur2 from '../../assets/images/blur-2.png'
import Wave from '../../assets/images/wave-1.svg'

import "animate.css"
import './style.css'

export default function Header() {
  return (
    <div className='bg-rich-black h-90vh lg:min-h-screen relative overflow-hidden'>
      <img src={Blur1} className='absolute left-0 top-0 h-full z-0 object-cover opacity-60' />
      <img src={Blur2} className='absolute right-0 top-0 h-full z-0 object-cover' />

      <div className='animate__animated animate__fadeInUp'>
        <h1 className='relative font-sora font-semibold text-7xl leading-[1.2] text-white z-10 mt-28 ml-7 sm:mt-44 sm:ml-28'>
          Hi, I'm <span className='text-wisteria'>Manu</span>
        </h1>

        <p className='text-white font-poppins font-regular ml-7 mt-2 sm:ml-28 text-xl z-10'>
          Front end Developer <br className='sm:hidden' />and UI/UX Designer
        </p>
      </div>


      <div className='absolute bottom-0 sm:bottom-20 right-11 lg:right-24 lg:mr-24 transform translate-x-1/4 z-10 animate__fadeIn'>
        <img src={Avatar} className='w-80  sm:w-72  lg:w-[460px] object-cover' />
      </div>

      <div className='absolute bottom-0 z-20'>
        <img src={Wave} className='w-screen' />
      </div>
    </div>
  )
}
