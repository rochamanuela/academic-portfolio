import React, { useState } from 'react'
import IconFigma from '../../assets/vectors/icon-figma.svg'
import IconGithub from '../../assets/vectors/icon-github.svg'
import { IoCloseSharp } from "react-icons/io5";

export default function Card({ data }) {

    const [modalDetails, setModalDetails] = useState(false)

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    }

    return (
        <>
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
                        <div
                            className='text-xs font-medium cursor-pointer px-4 py-2 rounded-md transition-all duration-300 hover:bg-slate-200'
                            onClick={() => setModalDetails(true)}>
                            Mais detalhes
                        </div>
                    </div>
                </div>
            </div>

            {modalDetails && (
                <div className='overflow-auto fixed bg-black bg-opacity-45 w-full h-full z-50 top-0 flex justify-center items-center sm:px-8'>
                    <div className='overflow-auto sm:w-[750px] h-full sm:h-auto bg-white sm:rounded-xl shadow-lg font-poppins'>
                        <div
                            className='h-64 w-full sm:rounded-t-xl bg-cover bg-center bg-no-repeat'
                            style={{
                                backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 60%), url(${data.image})`
                            }}
                        >
                            <div className='text-white flex flex-col 445:flex-row justify-between 445:items-center pt-9 px-6'>
                                <div>
                                    <p className='text-sm font-medium'>{data.institution}</p>
                                    <p className='text-xs mt-1 text-gray-300 font-light'>{data.period}</p>
                                </div>
                                <div className='mt-4 445:mt-0 text-right'>
                                    <p className='text-sm font-medium'>{data.subject}</p>
                                    <p className='text-xs mt-1 text-gray-300 font-light'>{data.lecturer}</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-6 py-9 pb-7'>
                            <div className='gap-5 445:gap-0 flex flex-col-reverse 445:flex-row 445:items-center 445:justify-between mb-3'>
                                <h1 className='font-sora font-semibold text-2xl'>{data.projectName}</h1>
                                <div className='flex flex-row gap-1 justify-end'>
                                    {data.technologies?.map((tech, index) => (
                                        <p key={index} className='py-1 px-3 bg-gray-100 rounded-3xl text-xs'>{tech}</p>
                                    ))}
                                </div>
                            </div>
                            <p className='text-sm leading-[24px] text-justify'>{data.projectDescription}</p>

                            <div className='mt-7 flex flex-col 400:flex-row 400:justify-between 400:items-center'>
                                <div className='flex flex-col 590:flex-row'>
                                    <div className='flex flex-row'>
                                        {data.developers?.map((dev, index) => (
                                            <img key={index} src={dev.devPhoto} className='h-11 w-11 object-cover rounded-3xl' style={{ marginRight: '-8px', borderColor: 'white', borderWidth: '3px' }} />
                                        ))}
                                    </div>

                                    <div className='590:ml-6 590:mt-0 mt-3 flex flex-col justify-center'>
                                        <p className='font-sora font-medium'>Desenvolvedores</p>
                                        <div className='flex flex-row gap-1'>
                                            {data.developers?.map((dev, index) => (
                                                <p key={index} className='text-xs text-gray-600'>{dev.devName}, </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-end mt-4 400:mt-0 flex-row gap-1'>
                                    <a className='w-10 h-10 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer hover:bg-slate-200' href={data.figmaLink}>
                                        <img src={IconFigma} className='h-5 w-auto' />
                                    </a>
                                    <a className='w-10 h-10 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer hover:bg-slate-200' href={data.githubLink}>
                                        <img src={IconGithub} className='h-5 w-auto' />
                                    </a>
                                    <div
                                        className='w-10 h-10 flex items-center justify-center rounded-3xl transition-all duration-300 cursor-pointer hover:bg-slate-200'
                                        onClick={() => setModalDetails(false)}>
                                        <IoCloseSharp size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
