import React from 'react'
import Card from '../Card'

import Teste from '../../assets/images/teste.png'
import Teste2 from '../../assets/images/jungkook.png'

import Acodemy from '../../assets/images/covers/acodemy-image.png'
import Artes from '../../assets/images/covers/artes-image.png'
import DevComunica from '../../assets/images/covers/dev-comunica-image.png'
import FNBook from '../../assets/images/covers/fn-book-image.png'
import IncluIF from '../../assets/images/covers/incluif-image.png'
import LPGEES from '../../assets/images/covers/lpgees-image.png'
import Magazu from '../../assets/images/covers/magazu-image.png'
import NaturezaViva from '../../assets/images/covers/natureza-viva-image.png'
import Starbuzz from '../../assets/images/covers/starbuzz-image.png'
import YoungBank from '../../assets/images/covers/youngbank-image.png'


import { IoIosArrowDown } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";

export default function Projects() {
  const data = [
    {
      id: 1,
      institution: "IFSP Hortolândia",
      period: "4° semestre",
      lecturer: "André Constantino",
      subject: "Práticas em Sociedade e Informática 2",
      projectName: "FN Book",
      projectDescription: "Portal desenvolvido com o propósito de identificar a veracidade de notícias, como uma ferramenta de combate à disseminação de fake news. O sistema apresenta um mapa interativo que permite visualizar a concentração geográfica de compartilhamentos dessas notícias. Além disso, está conectado a um chatbot no Telegram, onde o usuário pode enviar uma notícia e receber, em tempo real, uma análise sobre a veracidade do conteúdo.",
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
        devName: 'Camilly',
        devPhoto: Teste2
      },
      {
        devId: 4,
        devName: 'Vitória',
        devPhoto: Teste2
      }],
      technologies: ["REACT", "HTML", "CSS"],
      figmaLink: "https://www.figma.com/design/ksMMMRUEDcX21hOTEcRpSa/FN-Book?m=auto&t=Nu4CZ63bRoiNUxuH-6",
      githubLink: "https://github.com/rochamanuela/fn-book-frontend",
      image: FNBook
    },
    {
      id: 2,
      institution: "IFSP Hortolândia",
      period: "4° semestre",
      lecturer: "Leandro Ledel",
      subject: "Extracurricular",
      projectName: "IncluIF",
      projectDescription: "Plataforma digital criada para a divulgação de uma exposição de artes organizada pelo professor Ledel, com foco em tornar a arte acessível a todos os públicos. O site inclui recursos importantes de acessibilidade, como opções para ajustar o contraste de cores, aumentar e diminuir o tamanho da fonte e tradução para Libras. Essa abordagem busca permitir uma apreciação inclusiva, abrangendo pessoas com baixa visão ou outras necessidades específicas.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      },
      {
        devId: 2,
        devName: 'Pablo',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS", "JS"],
      figmaLink: "https://www.figma.com/design/7iWjsaKFUT0XpC6NJoV9SI/Projeto-IncluIF?m=auto&t=Nu4CZ63bRoiNUxuH-6",
      githubLink: "https://github.com/rochamanuela/inclu-if-project",
      image: IncluIF
    },
    {
      id: 3,
      institution: "IFSP Hortolândia",
      period: "4° semestre",
      lecturer: "Daiane Tomazetti",
      subject: "Desenvolvimento de Sistemas Web 2",
      projectName: "Natureza Viva",
      projectDescription: "Sistema desenvolvido para auxiliar a ONG Natureza Viva no gerenciamento de seus espaços para eventos.A plataforma permite que os usuários visualizem detalhes sobre os espaços disponíveis, realizem o aluguel e compartilhem suas avaliações.O objetivo é otimizar a gestão dos recursos e fomentar a realização de eventos sociais e culturais no local.",
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
        devName: 'Kalil',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS", "JS", "JSP", "JAVA"],
      figmaLink: "https://www.figma.com/design/3XLL93Rno7xZtT1qwLxYXx/Projeto-Final---DSW2?m=auto&t=Nu4CZ63bRoiNUxuH-6",
      githubLink: "https://github.com/rochamanuela/natureza-viva-front",
      image: NaturezaViva
    },
    {
      id: 4,
      institution: "IFSP Hortolândia",
      period: "4° semestre",
      lecturer: "Samuel VInente",
      subject: "Extracurricular",
      projectName: "LPGEES",
      projectDescription: "Website criado para apoiar a divulgação do Laboratório de Política e Gestão da Educação Especial(LPGEES), um projeto do IFSP dedicado a promover uma educação mais inclusiva.O laboratório oferece formação contínua para educadores, além de desenvolver pesquisas e soluções práticas para tornar a educação acessível a todos.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      }],
      technologies: ["REACT", "CSS"],
      figmaLink: "https://www.figma.com/design/ynKaukQ51I1kMOkWgqqFYO/LPGEEs?m=auto&t=Nu4CZ63bRoiNUxuH-6",
      githubLink: "https://github.com/rochamanuela/lpgees",
      image: LPGEES
    },
    {
      id: 5,
      institution: "IFSP Hortolândia",
      period: "4° semestre",
      lecturer: "Fernando Sambinelli",
      subject: "Desenvolvimento para Dispositivos Móveis",
      projectName: "Lótus",
      projectDescription: "Aplicativo mobile voltado ao suporte emocional de usuários em momentos difíceis, como crises de ansiedade.A plataforma oferece funcionalidades diversas, incluindo exercícios de respiração guiada, músicas relaxantes, dicas de alimentação e sugestões práticas para ajudar na recuperação do bem - estar.O objetivo é fornecer uma ferramenta acessível que funcione como um 'assistente emocional' portátil.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      },
      {
        devId: 2,
        devName: 'Elisa',
        devPhoto: Teste2
      }],
      technologies: ["XML", "JAVA", "ANDROID STUDIO"],
      figmaLink: "https://www.figma.com/design/syjC9rp0OGeR1A6W4h3VzG/Mobile?m=auto&t=Nu4CZ63bRoiNUxuH-6",
      githubLink: "null",
      image: null
    },
    {
      id: 6,
      institution: "IFSP Hortolândia",
      period: "3° semestre",
      lecturer: "André Constantino",
      subject: "Práticas em Sociedade e Informática 1",
      projectName: "Dev Comunica",
      projectDescription: "Website desenvolvido para apresentar a disciplina extensionista PSI(Práticas em Sociedade e Informática).A plataforma explica os objetivos dessa iniciativa, que busca conectar o conhecimento acadêmico com a sociedade, e exibe os projetos realizados pelos estudantes ao longo do curso nesta disciplina.",
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
        devName: 'Elisa',
        devPhoto: Teste2
      }],
      technologies: ["REACT", "HTML", "CSS"],
      figmaLink: "https://www.figma.com/design/IAuZARjFk4y6CNTcSBvAqn/website---dev-comunica?m=auto&t=DD5YFsGCzRldeD5n-6",
      githubLink: "https://github.com/dev-comunica/dev-ifsp",
      image: DevComunica
    },
    {
      id: 7,
      institution: "SENAI",
      period: "3° semestre",
      lecturer: "Lindomar Batistao",
      subject: "Integrador",
      projectName: "Chaeso",
      projectDescription: "Aplicativo mobile inspirado no modelo do iFood, mas com foco exclusivo na venda de produtos hortifrúti.Com uma interface amigável e prática, o app permite que os usuários comprem diretamente de uma única loja especializada em vegetais e produtos naturais, garantindo uma experiência eficiente e sustentável.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      },
      {
        devId: 2,
        devName: 'Kethelyn',
        devPhoto: Teste2
      }],
      technologies: ["REACT NATIVE", "DJANGO"],
      figmaLink: "null",
      githubLink: "https://github.com/ChaesoProject",
      image: null
    },
    {
      id: 8,
      institution: "SENAI",
      period: "2° semestre",
      lecturer: "Lindomar Batistao",
      subject: "Integrador",
      projectName: "YoungBank",
      projectDescription: "Banco digital voltado para atender as necessidades do público jovem.Inspirado nos conceitos de design visual do Nubank e Inter, oferece uma interface moderna e intuitiva, com serviços financeiros acessíveis e descomplicados, ideal para quem busca praticidade e controle financeiro digital.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      }],
      technologies: ["REACT NATIVE", "DJANGO"],
      figmaLink: "https://www.figma.com/design/9r2zq1Yp7UsLRZMa6G6oVu/Projeto-Integrador---SENAI?node-id=0-1&p=f",
      githubLink: "https://github.com/rochamanuela/youngbank-senai",
      image: YoungBank
    },
    {
      id: 9,
      institution: "IFSP Hortolândia",
      period: "2° semestre",
      lecturer: "Daiane Tomazetti",
      subject: "Desenvolvimento de Sistemas Web 1",
      projectName: "Artes",
      projectDescription: "Plataforma digital que visa apresentar obras de arte de artistas negros, com curadoria baseada em coleções do Google.Além de destacar as obras, o site oferece informações detalhadas sobre a vida e a trajetória artística dos criadores, promovendo a valorização da cultura negra por meio da arte.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      },
      {
        devId: 2,
        devName: 'Jennifer',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS", "JS"],
      figmaLink: "https://www.figma.com/design/pb0QauSJcKcjswdRewJQF0/Site-Artistico?node-id=0-1&p=f&t=FMhQrYrVX1u6jCp2-0",
      githubLink: "",
      image: Artes
    },
    {
      id: 10,
      institution: "IFSP Hortolândia",
      period: "2° semestre",
      lecturer: "Daiane Tomazetti",
      subject: "Desenvolvimento de Sistemas Web 1",
      projectName: "Acodemy",
      projectDescription: "Sistema de simulados online projetado para ajudar estudantes na preparação para o ENADE.A plataforma conta com uma variedade de questões atualizadas, que simulam condições reais da prova.Os usuários podem acompanhar seu progresso, identificar áreas de maior dificuldade e otimizar seus estudos para obter melhores resultados no exame.",
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
        devName: 'Henrique',
        devPhoto: Teste2
      },
      {
        devId: 4,
        devName: 'Eduardo',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS", "JS"],
      figmaLink: "https://www.figma.com/design/kS6cfXVQMBqho8rGVW0zXv/Acodemy?node-id=0-1&p=f&t=HOsSTiO5bNkNeTVZ-0",
      githubLink: "https://github.com/rochamanuela/acodemy-enade-ifsp",
      image: Acodemy
    },
    {
      id: 11,
      institution: "IFSP Hortolândia",
      period: "1° semestre",
      lecturer: "Daiane Tomazetti",
      subject: "Desenvolvimento Web",
      projectName: "Startbuzz",
      projectDescription: "Website criado para apresentar uma cafeteria e destacar seus diferenciais.Além de contar a história da empresa, o site oferece uma vitrine digital dos produtos disponíveis, como cafés especiais, doces e salgados, além de informações sobre o ambiente acolhedor do local.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS"],
      figmaLink: "https://www.figma.com/design/XouJrtTiv5anmkySq17V1r/site-starbuzz?m=auto&t=LCvrcz4pflwa1UZC-6",
      githubLink: "",
      image: Starbuzz
    },
    {
      id: 12,
      institution: "SENAI",
      period: "1° semestre",
      lecturer: "Docentes diversos",
      subject: "Integrador",
      projectName: "magazu",
      projectDescription: "Proposta de um e - commerce focado em tecnologia, projetado para oferecer uma experiência de compra eficiente.O site deve ser integrado a um bot inteligente, que realiza buscas em tempo real por produtos disponíveis, tornando a experiência do usuário mais dinâmica e personalizada.",
      developers: [{
        devId: 1,
        devName: 'Manuela',
        devPhoto: Teste2
      }],
      technologies: ["HTML", "CSS", "JS"],
      figmaLink: "https://www.figma.com/design/HXj4w1AYbHwv57vfKRpKU1/projeto-integrador---senai?m=auto&t=LCvrcz4pflwa1UZC-6",
      githubLink: null,
      image: Magazu
    }

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