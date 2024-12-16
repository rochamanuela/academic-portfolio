import React from 'react'
import './style.css'

export default function SkillBar({color, backgroundColor, size}) {
  return (
    <div className='skill-bar-background' style={{backgroundColor: backgroundColor}}>
        <div className='skill-bar' style={{backgroundColor: color, width: size}}></div>
    </div>
  )
}
