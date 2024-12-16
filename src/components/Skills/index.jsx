import React from 'react'
import './style.css'

import SkillBar from '../SkillBar'
import Blur5 from '../../assets/images/blur-5.png'
import Blur6 from '../../assets/images/blur-6.png'

export default function Skills() {
    return (
        <div className='bg-rich-black relative mb-20 overflow-hidden font-poppins text-white px-6 py-16 lg:flex lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-24 lg:px-12 lg:py-24'>
            <img src={Blur5} className='absolute right-0 h-full top-0 z-0 object-cover' />
            <img src={Blur6} className='absolute left-0 bottom-0 z-0 object-cover' />
        
            <h1 className='text-3xl z-10 font-sora mt-8 mb-12 lg:max-w-sm'><span className='text-[#BC96E6]'>Habilidades</span> que estou buscando aperfeiçoar</h1>
            <div className='z-10 lg:w-1/2 lg:max-w-xl lg:mb-[-30px]'>
                <p className='mb-2'>Compreensão integral do usuário</p>
                <SkillBar color={'#DA378C'} backgroundColor={'rgba(218, 55, 140, 0.2)'} size={'50%'} />

                <p className='mb-2'>Pesquisa e análise de dados em UX</p>
                <SkillBar color={'#BC96E6'} backgroundColor={'rgba(188, 150, 230, 0.2)'} size={'88%'} />

                <p className='mb-2'>Pensamento crítico e resolução de problemas</p>
                <SkillBar color={'#63D3CA'} backgroundColor={'rgba(99, 211, 202, 0.2)'} size={'65%'} />
            </div>
        </div>
    )
}
