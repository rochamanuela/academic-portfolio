import React from 'react'
import Card from '../Card'

import Teste from '../../assets/images/teste.png'
import Teste2 from '../../assets/images/jungkook.png'

import { IoIosArrowDown } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";

export default function Projects() {
  const data = [
    {
      id: 1,
      institution: "IFSP Hortolândia",
      period: "2° Semestre",
      lecturer: "Daiane",
      subject: "Desenvolvimento de Sistemas Web 1",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online desenvolvido para ajudar na preparação para o Exame Nacional de Desempenho dos Estudantes (ENADE). A plataforma oferece uma variedade de simulados, com questões atualizadas que simulam as condições reais da prova, auxiliando na identificação de áreas de maior dificuldade e no monitoramento do progresso acadêmico.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      },
      {
        devId: 2,
        devName: 'Jennifer',
        devPhoto: Teste2
      },
      {
        devId: 3,
        devName: 'Trifena',
        devPhoto: Teste2
      },
      {
        devId: 4,
        devName: 'Trifosa',
        devPhoto: Teste2
      }],
      technologies: ["PHP", "JS", "HTML", "CSS", "SQL",],
      figmaLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      githubLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      image: Teste
    },
    {
      id: 2,
      institution: "IFSP",
      period: "2° Semestre",
      lecturer: "Daiane",
      subject: "Desenvolvimento de Sistemas Web 1",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online desenvolvido para ajudar na preparação para o Exame Nacional de Desempenho dos Estudantes (ENADE). A plataforma oferece uma variedade de simulados, com questões atualizadas que simulam as condições reais da prova, auxiliando na identificação de áreas de maior dificuldade e no monitoramento do progresso acadêmico.",
      developers: "",
      technologies:  ["PHP", "JS"],
      figmaLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      githubLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      image: Teste
    },
    {
      id: 3,
      institution: "IFSP",
      period: "2° Semestre",
      lecturer: "Daiane",
      subject: "Desenvolvimento de Sistemas Web 1",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online desenvolvido para ajudar na preparação para o Exame Nacional de Desempenho dos Estudantes (ENADE). A plataforma oferece uma variedade de simulados, com questões atualizadas que simulam as condições reais da prova, auxiliando na identificação de áreas de maior dificuldade e no monitoramento do progresso acadêmico.",
      developers: "",
      technologies: "",
      figmaLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      githubLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      image: Teste
    },
  ]

  return (
    <div id='projects' className='px-8 pt-32 md:px-20 in:px-32 mb-32'>
      {/* <div className='font-poppins lg:flex lg:flex-row justify-between items-center mb-10'> */}
      <div className='mb-10'>
        <h1 className='text-2xl font-sora font-semibold text-center mb-5 lg:mb-0'>Conheça meus <span className='text-[#950952]'>projetos</span></h1>
        {/* <div className='flex flex-row items-center gap-6'>
          <div className='flex flex-row items-center gap-1'>
            <p className='text-xs'>Todas as instituições</p>
            <IoIosArrowDown />
          </div>
          <div className='flex flex-row items-center gap-1'>
            <p className='text-xs'>Ordenar por</p>
            <IoIosArrowDown />
          </div>
          <IoGridOutline size={24} />
          <IoListOutline size={24} />
        </div> */}

      </div>
      <div className='flex flex-row gap-5 flex-wrap justify-center'>
        {data.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
