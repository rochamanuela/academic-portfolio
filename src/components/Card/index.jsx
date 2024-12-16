import React from 'react'
import IconFigma from '../../assets/vectors/icon-figma.svg'
import IconGithub from '../../assets/vectors/icon-github.svg'

export default function Card({data}) {

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <div className='font-poppins w-80 rounded-xl border-gray-300 border'>
            <div className='image rounded-t-xl bg-cover h-48 flex flex-row text-white justify-between text-xxs px-6 py-5' style={{ backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url(${data.image})` }}>
                <p>{data.period}</p>
                <p>{data.lecturer}</p>
            </div>
            <div className='p-6'>
                <p className='font-sora font-semibold text-xl'>{data.projectName}</p>
                <p className='mt-3 text-xs'>{truncateText(data.projectDescription, 116)}</p>
                <div className='flex flex-row justify-between items-center mt-5'>
                    <div className='flex flex-row gap-1'>
                        <a className='w-8 h-8 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer hover:bg-slate-200' href={data.figmaLink}>
                            <img src={IconFigma} />
                        </a>
                        <a className='w-8 h-8 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer hover:bg-slate-200' href={data.githubLink}>
                            <img src={IconGithub} />
                        </a>
                    </div>
                    <div className='text-xs font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-200'>Mais detalhes</div>
                </div>
            </div>
        </div>
    )
}
