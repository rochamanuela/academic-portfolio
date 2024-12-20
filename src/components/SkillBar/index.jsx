import React, { useEffect, useRef, useState } from 'react'
import './style.css'

export default function SkillBar({ color, backgroundColor, size }) {
  const [width, setWidth] = useState('0%')
  const skillBarRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(size)
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current)
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current)
      }
    }
  }, [size])

  return (
    <div
      ref={skillBarRef}
      className="skill-bar-background"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className="skill-bar"
        style={{
          backgroundColor: color,
          width: width,
          transition: 'width 2s ease',
        }}
      ></div>
    </div>
  )
}
