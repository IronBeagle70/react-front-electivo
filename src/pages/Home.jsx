import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';

import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";

function Home() {

    const HomeLinks=[
        {
            name: 'Catálogo',
            path: '/catalogue'
        },
        {
            name: 'Iniciar Sesión',
            path: '/login'
        },
        {
            name: 'Registrate',
            path: '/signup'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-teal-300"} enlaces={HomeLinks} />
            <div className='flex flex-col items-center justify-evenly h-[calc(100vh-80px)] sm:h-[calc(100vh-48px)]'>
                <div className='flex justify-center items-center flex-wrap'>
                    <h1 className='text-lg sm:text-xl md:text-2xl text-center font-semibold mr-1 sm:mr-2'>Static Shopping Cart with </h1>
                    <FaReact className='text-5xl  sm:text-6xl md:text-7xl text-bg-react rotate-infinite' />
                </div>
                <img src="/public/wallpaperSC.jpg" className='w-[400px] mx-auto' alt="wallpaper_home" />
                <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-blue-600 text-base sm:text-lg md:text-xl font-semibold text-white hover:bg-blue-700 hover:text-blue-100 active:bg-blue-500'>
                    Ir al Catálogo
                </NavLink>
                <div className='flex items-center justify-evenly text-4xl md:text-5xl w-48 '>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alvaro-mateo-mendoza-capcha-27907a248/">
                        <FaLinkedin className='text-bg-linkedin hover:text-blue-600 active:text-blue-700' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/IronBeagle70/react-front-electivo">
                        <FaGithub className='text-bg-github hover:text-stone-800 active:text-stone-900 ' />
                    </a>
                </div>
            </div>
            {/* <FooterComponent footPosition={"absolute bottom-0"} /> */}
        </>
    );
};

export default Home;