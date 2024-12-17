import React, { useState } from 'react';
import Blur3 from '../../assets/images/blur-3.png';
import Blur4 from '../../assets/images/blur-4.png';
import Mac from '../../assets/images/mockup-notebook.png'
import '../../index.css';

export default function Hobby() {
    const [hasHover, setHasHover] = useState(false);

    return (
        <div className='bg-rich-black relative overflow-hidden font-poppins py-24 xl:flex xl:items-center xl:justify-center'>
            {/* <svg width="1280" height="127" viewBox="0 0 1280 127" fill="none" xmlns="http://www.w3.org/2000/svg" className='z-10'>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1280 127L1209 102C1138 76 996 25 853 25C711 25 569 76 427 95C284 114 142 102 71 95L0 89V0H71C142 0 284 0 427 0C569 0 711 0 853 0C996 0 1138 0 1209 0H1280V127Z" fill="white" />
            </svg> */}

            <img src={Blur3} className='absolute left-0 top-0 w-full h-full z-0 object-cover opacity-60' />
            <img src={Blur4} className='absolute right-0 top-0 w-full h-full z-0 object-cover opacity-60' />

            <div>
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

            <div className='relative w-80 m-auto xl:ml-28 xl:mr-0 mt-16 xl:scale-150 mb-[-50px]'>
                <img src={Mac} className='w-full h-auto object-cover' />
                <div className='scale-50 z-20'>
                    <iframe
                        style={{ borderRadius: '15px', border: '5px solid black', marginLeft: '-109.5px', marginTop: '-284px' }}
                        src="https://open.spotify.com/embed/playlist/4neCaH5ZFX0M6dnvjkCQJT?utm_source=generator&theme=0"
                        width="535" height="361"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

        </div>
    );
}
