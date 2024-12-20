import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-0 z-50 w-full flex items-center py-4 px-8 sm:px-10 sm:py-6 transition-all duration-300 ${isScrolled ? 'bg-white text-gray-900 shadow-xl' : 'bg-transparent text-white'}`}>
            <p className='text-base font-sora'>Manuela Souza</p>
            <button
                className="sm:hidden ml-auto text-lg focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>
            <div
                className={`sm:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col sm:flex-row sm:items-center sm:gap-10 font-poppins text-xs ml-auto gap-4`}
            >
                <a href="#about" className='hover:text-wisteria transition-all duration-200'>Sobre mim</a>
                <a href="#education" className='hover:text-wisteria transition-all duration-200'>Trilha acadêmica</a>
                <a href="#projects" className='hover:text-wisteria transition-all duration-200'>Projetos</a>
            </div>
        </div>
    )
}
