import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-0 z-50 flex flex-row w-full justify-between items-center py-6 px-10 transition-all duration-300 ${isScrolled ? 'bg-custom-gradient text-white shadow-xl' : 'bg-transparent text-white'}`}>
            <p className='text-base font-sora'>Manuela Souza</p>
            <div className='font-poppins text-xs flex gap-10'>
                <a href="#about" className='hover:text-wisteria transition-all duration-200'>Sobre mim</a>
                <a href="#education" className='hover:text-wisteria transition-all duration-200'>Trilha acadêmica</a>
                <a href="#projects" className='hover:text-wisteria transition-all duration-200'>Projetos</a>
            </div>
        </div>
    )
}
