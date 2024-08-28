import React from 'react'
import Avatar from '../../assets/images/avatar.png'
import './style.css'

export default function Header() {
  return (
    <div className='bg-rich-black min-h-screen relative overflow-hidden'>
      <h1 className='font-sora font-semibold text-7xl leading-[1.2] text-white relative top-20 left-8'>
        Hi, I'm <span className='text-wisteria'>Manu</span>
      </h1>
      <div className='absolute bottom-0 right-11 transform translate-x-1/4'>
        <img src={Avatar} className='w-72 md:w-80 lg:w-96 object-cover' />
      </div>
    </div>
  )
}
