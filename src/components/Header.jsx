import React from 'react';
import { NavLink } from 'react-router-dom';

function Header({bgHeader, enlaces}) {


    return (
        <header className={`${bgHeader} flex justify-between items-center w-full h-20 sm:h-12`}>
            <p className='ml-2 sm:ml-4 font-semibold text-base sm:text-lg'>LOGO</p>
            {/* <img src="" alt="logo" /> */}
            {/* <p>HEADER HOME</p> */}
            <nav className='flex justify-center items-center mr-1 sm:mr-4 flex-wrap'>
                {
                    enlaces.map((enlace, index)=>(
                        <NavLink to={enlace.path} key={index} className='px-1 '>
                            <div className='text-base sm:text-lg hover:text-slate-100 font-semibold'>{enlace.name}</div>
                        </NavLink>
                    ))
                }
            </nav>
        </header>
    );
};

export default Header;