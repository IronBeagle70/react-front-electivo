import React from 'react';
import { NavLink } from 'react-router-dom';

function OneCatalogueItem() {
    return (
        <li className='bg-white shadow-md rounded mb-4 md:mb-6 p-3 sm:p-4'>
            <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg" alt="img_producto" className='h-60 mb-1 sm:mb-2' />
            <h2 className='font-bold mb-1 sm:mb-2'>Nombre del Producto</h2>
            <h3 className='font-semibold mb-1 sm:mb-2'>$322</h3>
            <div className='flex justify-between items-center font-semibold text-white'>
                <button className='px-2 py-1 bg-blue-600 rounded'>Añadir al Carrito</button>
                <NavLink to={'/'} className='px-2 py-1 rounded bg-green-600'>
                    Vista
                </NavLink>
            </div>
        </li>
    );
};

export default OneCatalogueItem;