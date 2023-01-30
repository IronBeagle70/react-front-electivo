import React from 'react';
import { NavLink } from 'react-router-dom';

function OneCatalogueItem({productId, productName, productPrice, productImage, addCarrito}) {

    return (
        <>
            <li className='bg-white shadow-md rounded mb-4 md:mb-6 p-3 sm:p-4 hover:shadow-2xl'>
                <NavLink to={`/catalogue/${productId}`} >
                    <img src={productImage} alt="img_producto" className='max-h-56 mb-1 sm:mb-2 sm:max-h-60' />
                </NavLink>
                <h2 className='font-bold mb-1 sm:mb-2 text-sm sm:text-base'>{productName}</h2>
                <h3 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'>${productPrice}</h3>
                <div className='flex justify-between items-center font-semibold text-white'>
                        <button onClick={()=>addCarrito(productId)} className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base hover:bg-blue-700 hover:text-blue-100 active:bg-blue-500'>Añadir al Carrito</button>
                        <NavLink to={`/catalogue/${productId}`} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base hover:bg-green-700 hover:text-green-100 active:bg-green-500'>
                            Vista
                        </NavLink>
                    </div>
            </li>
        </>
    );
};

export default OneCatalogueItem;