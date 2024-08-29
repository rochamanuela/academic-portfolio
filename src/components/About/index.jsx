import React from 'react'
import Mockup from '../../assets/images/mockup-for-about.png'

export default function About() {
  return (
    <div className='bg-white'>
      <h1 className='font-sora font-medium text-4xl px-6 mt-14 mb-6'>Sobre Mim</h1>
      
      <div className='font-poppins text-justify px-6 mb-10 text-sm leading-6'>
        <p>Meu nome é Manuela, mas pode me chamar de Manu. Tenho 20 anos e estou cursando o 
          4° semestre do curso de Análise e Desenvolvimento de Sistemas no Instituto Federal 
          de Educação, Ciência e Tecnologia de São Paulo, no campus Hortolândia.</p>
        <br />
        <p>Não sei como, mas parece que do dia pra noite eu decidi que queria ser dev e aqui 
          estou eu. Bom, desde criança sempre gostei de desafios e coisas que me fizessem ir 
          além, e claro, coisas que impulsionassem o meu crescimento. Sempre gostei muito de 
          arte (e continuo amando) e de uma maneira muito doida eu também sempre gostei muito 
          de matemática, e parece que foi assim que eu consegui unir as duas coisas e me 
          tornar dev e UX/UI.</p>
      </div>

      <img src={Mockup} className='w-80 mx-auto mb-14' />
    </div>
  )
}
