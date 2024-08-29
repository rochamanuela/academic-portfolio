import React from 'react'
import Timeline from '../Timeline'
import School from '../../assets/images/school.png'

export default function Education() {
  return (
    <div className='mb-32 mt-20'>
        <img src={School} className='element mx-auto' />
        <h1 className='font-sora font-medium text-4xl mt-7 mb-10 text-center element'>Formação <br/>Acadêmica</h1>
        <Timeline/>
    </div>
  )
}
