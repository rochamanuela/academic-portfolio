import React from 'react'
import Timeline from '../Timeline'
import School from '../../assets/images/school.png'

export default function Education() {
  return (
    <div className='mb-32 mt-20 px-4 lg:flex lg:justify-center lg:items-center lg:px-12 lg:gap-10 lg:mb-48 md:px-20'>
      <div className='lg:mb-[-100px]'>
        <img src={School} className='element mx-auto' />
        <h1 className='font-sora font-medium text-3xl mt-7 mb-10 text-center element'>Formação Acadêmica</h1>
      </div>
      <Timeline />
    </div>
  )
}
