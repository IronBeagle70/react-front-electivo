import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';

function Login() {

    const LoginLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Registrate',
            path: '/signup'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={LoginLinks}/>
            <div className="w-full max-w-xs m-auto">
                {/* {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center text-sm" role="alert" ><span className="sm:inline block" >{error}</span></div> } */}
                <form  className="bg-white shadow-md rounded px-7 sm:px-8 pt-5 sm:pt-6 pb-7 sm:pb-8 mt-4 sm:mt-5 mx-2" >
                    <div className="mb-3 sm:mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-bold mb-2" >Email</label>
                        <input type="email" name='email' id='email' placeholder='Ingrese su Email'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm sm:text-base leading-tight focus:outline-none focus:shadow-outline" autoComplete='off' required />
                    </div>
                    <div className="mb-3 sm:mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm sm:text-base font-bold mb-2" >Contraseña</label>
                        <input type="password" name='password' id='password' placeholder='Ingrese su constraseña'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm sm:text-base leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm sm:text-base font-bold py-1 px-3 sm:py-2 sm:px-4 rounded focus:outline-none focus:shadow-outline" type='submit' >Ingresar</button>
                        <NavLink to={'/signup'} className={'text-sky-600 underline text-sm sm:text-base'} >
                            Registrate
                        </NavLink>
                    </div>
                </form>
            </div>
            <FooterComponent footPosition={"absolute bottom-0"} />
        </>
    );
};

export default Login;