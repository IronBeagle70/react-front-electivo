import React from 'react';
import { NavLink } from 'react-router-dom';

function OneCatalogueItem({productName, productPrice, productImage}) {
    return (
        <li className='bg-white shadow-md rounded mb-4 md:mb-6 p-3 sm:p-4'>
            <img src={productImage} alt="img_producto" className='max-h-56 mb-1 sm:mb-2 sm:max-h-60' />
            <h2 className='font-bold mb-1 sm:mb-2 text-sm sm:text-base'>{productName}</h2>
            <h3 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'>${productPrice}</h3>
            <div className='flex justify-between items-center font-semibold text-white'>
                <button className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base'>Añadir al Carrito</button>
                <NavLink to={'/'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base'>
                    Vista
                </NavLink>
            </div>
        </li>
    );
};

export default OneCatalogueItem;