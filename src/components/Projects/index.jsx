import React from 'react'
import Card from '../Card'

import Teste from '../../assets/images/teste.png'

import { IoIosArrowDown } from "react-icons/io";


export default function Projects() {
  const data = [
    {
      id: 1,
      institution: "IFSP",
      period: "2° Semestre",
      lecturer: "Daiane",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online desenvolvido para ajudar na preparação para o Exame Nacional de Desempenho dos Estudantes (ENADE). A plataforma oferece uma variedade de simulados, com questões atualizadas que simulam as condições reais da prova, auxiliando na identificação de áreas de maior dificuldade e no monitoramento do progresso acadêmico.",
      developers: "",
      technologies: "",
      figmaLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      githubLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      image: Teste
    },
    {
      id: 2,
      institution: "IFSP",
      period: "2° Semestre",
      lecturer: "Daiane",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online desenvolvido para ajudar na preparação para o Exame Nacional de Desempenho dos Estudantes (ENADE). A plataforma oferece uma variedade de simulados, com questões atualizadas que simulam as condições reais da prova, auxiliando na identificação de áreas de maior dificuldade e no monitoramento do progresso acadêmico.",
      developers: "",
      technologies: "",
      figmaLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      githubLink: "https://music.youtube.com/watch?v=9A_H7oUOfUk&list=RDAMVM8yvozKR7tXs",
      image: Teste
    },
    {
      id: 3,
      institution: "IFSP",
      period: "2° Semestre",
      lecturer: "Daiane",
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
    <div>
      <div className='font-poppins'>
        <h1>Conheça meus projetos</h1>
        <p>Todas as instituições</p>
        <IoIosArrowDown />

        <p>Ordenar por</p>
        <IoIosArrowDown />

      </div>
      <div className='flex flex-row gap-5 flex-wrap justify-center'>
        {data.map((item, index) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
