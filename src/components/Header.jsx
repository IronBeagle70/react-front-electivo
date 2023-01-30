import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";

function Header({bgHeader, enlaces, iconCart, carrito, handleModal}) {


    return (
        <header className={`${bgHeader} flex justify-between items-center w-full h-20 sm:h-12 sticky top-0`}>
            <p className='ml-2 sm:ml-4 font-semibold text-base sm:text-lg'>LOGO</p>
            {/* <img src="" alt="logo" /> */}
            {/* <p>HEADER HOME</p> */}
            <nav className='flex justify-center items-center mr-1 sm:mr-4 flex-wrap'>
                {
                    enlaces.map((enlace, index)=>(
                        <NavLink to={enlace.path} key={index} className='px-1'>
                            <div className='text-base sm:text-lg hover:text-slate-100 font-semibold active:text-slate-200'>{enlace.name}</div>
                        </NavLink>
                    ))
                }
                {
                    iconCart && (
                        <div onClick={handleModal} className='px-1 hover:text-slate-100 active:text-slate-200 font-semibold flex justify-center items-center cursor-pointer'>
                            <FaShoppingCart className='text-lg sm:text-xl' />
                            <div className=' flex justify-center items-center text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-500 rounded-full h-5 w-5 relative bottom-1'>{carrito.length}</div>
                        </div>
                    )
                }
            </nav>
        </header>
    );
};

export default Header;