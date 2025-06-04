import React, { useEffect, useState } from 'react'
import Mockup from '../../assets/images/mockup-for-about.png'
import Typewriter from '../Animations/Typewriter'
import './style.css'
import { Avatar } from '@mui/material'

export default function About() {
  return (
    <div id='about' className='bg-white px-8 md:px-20 md:py-20 lg:flex lg:flex-row-reverse lg:items-center lg:justify-center lg:gap-20'>
      <div className='lg:max-w-2xl'>
        <h1 className='font-sora font-medium text-4xl mt-14 mb-6 element'>Sobre Mim</h1>
        <div className='font-poppins text-justify mb-10 text-sm leading-6 element'>
          <p>Meu nome é Manuela, mas pode me chamar de Manu. Tenho 20 anos e estou cursando o
            5° semestre do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal
            de Educação, Ciência e Tecnologia de São Paulo, no campus Hortolândia.
          </p>
          <br />
          <p>
            <Typewriter
              text="Não sei como, mas parece que do dia pra noite eu decidi que queria ser dev e aqui
            estou eu. Bom, desde criança sempre gostei de desafios e coisas que me fizessem ir
            além, e claro, coisas que impulsionassem o meu crescimento. Sempre gostei muito de
            arte (e continuo amando) e de uma maneira muito doida eu também sempre gostei muito
            de matemática, e parece que foi assim que eu consegui unir as duas coisas e me
            tornar dev e UX/UI."
              delay={10}
            />
          </p>
        </div>
      </div>

      <a href="https://manuela-souza.vercel.app/">
        <img src={Mockup} className='w-80 mx-auto lg:mx-0 lg:mb-[-50px] mb-10 element transition-all duration-200 hover:scale-110' />
      </a>
    </div>
  )
}
