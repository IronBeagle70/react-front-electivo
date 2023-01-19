import React from 'react';
import { NavLink } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';

function Signup() {

    const SignupLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Iniciar Sesión',
            path: '/login'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={SignupLinks}/>
            <div>Signup</div>
            <div className="w-full max-w-xs m-auto">
                {/* {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2 text-center text-sm" role="alert" ><span className="sm:inline block" >{error}</span></div> } */}
                <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2" >Nombre</label>
                        <input type="email" name='email' id='name' placeholder='Registre su nombre'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete='off' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2" >Email</label>
                        <input type="email" name='email' id='email' placeholder='Registre su Email'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoComplete='off' required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-base font-bold mb-2" >Contraseña</label>
                        <input type="password" name='password' id='password' placeholder='Registre su contraseña'  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                    </div>
                    <div className='flex justify-between items-center'>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' >Registrar</button>
                        <NavLink to={'/login'} className={'text-sky-600 underline'} >
                            Iniciar Sesión
                        </NavLink>
                    </div>
                </form>
            </div>
            <FooterComponent footPosition={"absolute bottom-0"} />
        </>
    );
};

export default Signup;