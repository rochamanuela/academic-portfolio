import React, { useState } from 'react';
import Blur3 from '../../assets/images/blur-3.png';
import Blur4 from '../../assets/images/blur-4.png';
import Mac from '../../assets/images/mockup-notebook.png'
import '../../index.css';

export default function Hobby() {
    const [hasHover, setHasHover] = useState(false);

    return (
        <div className='bg-rich-black min-h-screen relative overflow-hidden font-poppins'>
            <img src={Blur3} className='absolute left-0 top-0 w-full h-full z-0 object-cover opacity-60' />
            <img src={Blur4} className='absolute right-0 top-0 w-full h-full z-0 object-cover opacity-60' />

            <div className='element'>
                <h1 className='relative font-sora font-medium text-4xl text-white z-10 text-center mt-14 mb-10'>
                    Hobbies que <br />aprecio
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
                        palette
                    </span>
                    <p className='text-xs'>arte<br />desenhos</p>
                </div>
                <div className='items-center text-center'>
                    <span className='material-symbols-outlined text-5xl'>
                        palette
                    </span>
                    <p className='text-xs'>arte<br />desenhos</p>
                </div>
                <div className='items-center text-center'>
                    <span className='material-symbols-outlined text-5xl'>
                        palette
                    </span>
                    <p className='text-xs'>arte<br />desenhos</p>
                </div>
                <div className='items-center text-center'>
                    <span className='material-symbols-outlined text-5xl'>
                        palette
                    </span>
                    <p className='text-xs'>arte<br />desenhos</p>
                </div>
                <div className='items-center text-center'>
                    <span className='material-symbols-outlined text-5xl'>
                        palette
                    </span>
                    <p className='text-xs'>arte<br />desenhos</p>
                </div>
            </div>

            <div className='relative w-80 m-auto mt-16 xl:scale-150'>
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
