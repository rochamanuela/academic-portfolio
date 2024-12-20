import React, { useState } from 'react';
import Blur3 from '../../assets/images/blur-3.png';
import Blur4 from '../../assets/images/blur-4.png';
import Wave from '../../assets/images/wave-2.svg'
import Mac from '../../assets/images/mockup-notebook.png'
import '../../index.css';
import "animate.css"

import AnimatedSection from '../Animations/AnimatedSection';

export default function Hobby() {
    const [hasHover, setHasHover] = useState(false);

    return (
        <div className='bg-rich-black relative overflow-hidden font-poppins pt-52 py-24 xl:flex xl:items-center xl:justify-center'>

            <img src={Blur3} className='absolute left-0 top-0 w-full h-full xl:w-auto xl:h-auto z-0 object-cover opacity-60' />
            <img src={Blur4} className='absolute right-0 top-0 w-full h-full xl:w-auto z-0 object-cover opacity-60' />

            <AnimatedSection>
                <div className='xl:ml-[-100px]'>
                    <div className='element'>
                        <h1 className='relative font-sora font-medium text-4xl text-white z-10 text-center mb-10'>
                            Hobbies que <br className='sm:hidden' />aprecio
                        </h1>
                    </div>

                    <div
                        className='relative z-10 text-white flex flex-wrap gap-x-8 gap-y-9 px-14 justify-center'
                        onMouseEnter={() => setHasHover(true)}
                        onMouseLeave={() => setHasHover(false)}
                    >
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                palette
                            </span>
                            <p className='text-xs'>arte<br />desenhos</p>
                        </div>
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                ink_pen
                            </span>
                            <p className='text-xs'>escrever<br />poemas</p>
                        </div>
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                headphones
                            </span>
                            <p className='text-xs'>ouvir<br />musicas</p>
                        </div>
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                book_5
                            </span>
                            <p className='text-xs'>ler<br />livros</p>
                        </div>
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                movie
                            </span>
                            <p className='text-xs'>assistir<br />séries</p>
                        </div>
                        <div className='items-center text-center'>
                            <span className='material-symbols-outlined text-5xl'>
                                skillet
                            </span>
                            <p className='text-xs'>cozinhar<br />doces</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection animation='animate__fadeInRight'>
                <div className='relative w-80 m-auto xl:ml-28 xl:mr-0 mt-16 xl:scale-150 mb-[-50px]'>
                    <img src={Mac} className='w-full h-auto object-cover' />
                    <div className='scale-50 z-20'>
                        <iframe
                            style={{ borderRadius: '15px', border: '5px solid black', marginLeft: '-109.5px', marginTop: '-284px' }}
                            src="https://open.spotify.com/embed/playlist/4H0jXVaF1TPobzHhgWkgg6?utm_source=generator&theme=0"
                            width="535" height="361"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </AnimatedSection>

            <div className='absolute top-[-1px] z-20'>
                <img src={Wave} className='w-screen' />
            </div>

        </div>
    );
}
