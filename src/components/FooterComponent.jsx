import React from 'react';

import { FaRegCopyright, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function FooterComponent({footPosition}) {
    return (
        <footer className={`bg-green-700 w-full  flex flex-wrap items-center justify-evenly ${footPosition} py-2 sm:py-3 `}>
            <div className='flex items-center justify-between text-xl sm:text-2xl w-28 sm:w-40 mx-1'>
                <a href="#" target="_blank" rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-bg-fb hover:bg-blue-200 hover:text-blue-600 active:text-blue-700' >
                    <FaFacebookF /> 
                </a>
                <a href="https://www.linkedin.com/in/alvaro-mateo-mendoza-capcha-27907a248/" target="_blank" rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-bg-linkedin hover:bg-blue-200 hover:text-blue-500 active:text-blue-700 '>
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/IronBeagle70" target="_blank" rel="noopener noreferrer" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-bg-github hover:bg-blue-200 hover:text-stone-800 active:text-stone-900'>
                    <FaGithub />
                </a>
            </div>
            <div className='flex items-center justify-center flex-col text-base sm:text-lg font-semibold my-2 sm:my-3 mx-1 text-black hover:text-white'>
                <p className='flex items-center justify-center' ><FaRegCopyright className='mr-1 sm:mr-2' />2023 All Rigths Reserved Terms</p>
            </div>
        </footer>
    );
};

export default FooterComponent;