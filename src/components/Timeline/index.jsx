import React from 'react';

const timelineData = [
    {
        id: 1,
        institution: 'Instituto Federal de São Paulo, Hortolândia - SP',
        course: 'Curso Técnico em Informática integrado ao Ensino Médio',
        date: 'Janeiro de 2019 a dezembro de 2022',
        color: 'bg-[#950952]',
    },
    {
        id: 2,
        institution: 'Escola e Faculdade Senai Roberto Mange, Campinas - SP',
        course: 'Curso Técnico em Desenvolvimento de Sistemas',
        date: 'Janeiro de 2023 a junho de 2024',
        color: 'bg-[#950952]',
    },
    {
        id: 3,
        institution: 'Instituto Federal de São Paulo, Hortolândia - SP',
        course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
        date: 'Cursando desde março de 2023',
        color: 'bg-black',
    },
    {
        id: 4,
        institution: 'Cubos Academy',
        course: 'Minicurso de Product Design',
        date: 'Cursando desde agosto de 2024',
        color: 'bg-black',
    },
]

export default function Timeline() {
    return (
        <div className='flex flex-col ml-7 mt-10 font-poppins'>
            <div className='relative w-full border-l-2 bg-white h-100 pr-6'>
                {timelineData.map((item, index) => (
                    <div key={item.id} className='flex items-start mb-10 relative element2'>
                        <div className={`${item.color} w-4 h-4 rounded-full absolute -left-2`}></div>
                        <div className='ml-8'>
                            <h3 className='text-sm font-regular text-[#424D57] mb-1'>{item.institution}</h3>
                            <p className='text-lg font-semibold'>{item.course}</p>
                            <p className='text-xs text-[#950952] mt-2.5'>{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
