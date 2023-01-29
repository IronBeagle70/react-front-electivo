import React, { useState, useEffect } from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import Modal from '../components/Modal';
import OneCatalogueItem from '../components/OneCatalogueItem';

import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
// import ProductView from '../components/ProductView';


function Catalogue({dataProducts, handleModal, openModal, addCarrito, carrito, removeCarrito}) {
    // console.log(Data[0].id);
    const CatalogueLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Carrito de Compras',
            path: '/shopping'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={CatalogueLinks} iconCart={true} carrito={carrito} handleModal={handleModal} />
            {/* <div>Catalogue</div> */}
            <AllCatalogueList>
                {/* <OneCatalogueItem datos={Data} /> */}
                {
                    dataProducts.map((oneData)=>(
                        <OneCatalogueItem key={oneData.id} productId={oneData.id} productName={oneData.title} productPrice={oneData.precio} productImage={oneData.image} addCarrito={addCarrito} />
                    ))
                }
            </AllCatalogueList>
            <FooterComponent footPosition={'sticky bottom-0'} /> 
            {/* <FooterComponent footPosition={'absolute bottom-0'} /> */}
            { openModal && (
                <Modal>
                    <div className='bg-white shadow-md rounded p-3 sm:p-4 w-[800px] mx-4'>
                        <h1 className='text-black font-bold text-center mb-3 sm:mb-4 text-base sm:text-lg'>Shopping Cart - ({carrito.length}) Productos</h1>
                        {
                            carrito.length>0 ? (
                                <>
                                    <ul className='max-h-[506px]  overflow-y-scroll'>
                                        {
                                            carrito.map((oneCarrito)=>(
                                                <li key={oneCarrito.id} className='text-black flex justify-between items-center rounded p-2 sm:p-4 border border-red-600 mb-3 sm:mb-4'>
                                                    <div>
                                                        <img src={oneCarrito.image} alt="imagen_producto" className='max-h-28 sm:max-h-32 md:max-h-36' />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <h2 className='font-bold text-sm sm:text-base md:text-lg text-center'>{oneCarrito.title}</h2>
                                                        <h3 className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>${oneCarrito.precio}</h3>
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center'>
                                                        <FaPlusCircle className='text-xl sm:text-2xl text-red-700' />
                                                        <p className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>13</p>
                                                        <FaMinusCircle className='text-xl sm:text-2xl text-red-700' />
                                                    </div>
                                                    <div>
                                                        <FaTrashAlt onClick={()=>removeCarrito(oneCarrito.id)} className='text-2xl sm:text-4xl text-red-700'/>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className='flex items-center justify-evenly'>
                                        <button className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white'>Pagar</button>
                                        <button onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white'>Seguir Comprando</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className='text-sm sm:text-base md:text-lg text-black font-semibold text-center mb-3 sm:mb-4'>
                                        Aún no hay productos agregados
                                    </p>
                                    <div className='flex justify-center items-center'>
                                        <button onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white'>Comprar Productos</button>
                                    </div>
                                </>
                                
                            )
                        }
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Catalogue;