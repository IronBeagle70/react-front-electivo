import React from 'react';
import Modal from './Modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle, FaWindowClose } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Scart({handleModal, carrito, sumCantidad, resCantidad, removeCarrito}) {
    return (
        <Modal>
            <div className='bg-white shadow-md rounded p-3 sm:p-4 w-[800px] mx-4'>
                <div onClick={handleModal} className='flex justify-end items-center'>
                    <FaWindowClose className='text-xl sm:text-2xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500' />
                </div>
                <h1 className='text-black font-bold text-center mb-3 sm:mb-4 text-base sm:text-lg'>Shopping Cart - ({carrito.length}) Productos</h1>
                {
                    carrito.length>0 ? (
                        <>
                            <ul className='max-h-[506px]  overflow-y-scroll'>
                                {
                                    carrito.map((oneCarrito)=>(
                                        <li key={oneCarrito.id} className='text-black flex justify-between items-center rounded p-2 sm:p-4 border border-red-600 mb-3 sm:mb-4'>
                                            <NavLink onClick={handleModal} to={`/catalogue/${oneCarrito.id}`} >
                                                <img src={oneCarrito.image} alt="imagen_producto" className='max-h-28 sm:max-h-32 md:max-h-36' />
                                            </NavLink>
                                            <div className='flex flex-col'>
                                                <h2 className='font-bold text-sm sm:text-base md:text-lg text-center'>{oneCarrito.title}</h2>
                                                <h3 className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>${oneCarrito.precio*oneCarrito.cantidad}</h3>
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                <FaPlusCircle onClick={()=>sumCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500' />
                                                <p className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>{oneCarrito.cantidad}</p>
                                                <FaMinusCircle onClick={()=>resCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500' />
                                            </div>
                                            <div>
                                                <FaTrashAlt onClick={()=>removeCarrito(oneCarrito.id)} className='text-2xl sm:text-4xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500'/>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='flex items-center justify-evenly'>
                                <NavLink to={'/shopping'} onClick={handleModal} className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white hover:bg-blue-700 hover:text-blue-100 active:bg-blue-500'>Pagar</NavLink>
                                <NavLink to={'/catalogue'} onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white hover:bg-green-700 hover:text-green-100 active:bg-green-500'>Seguir Comprando</NavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='text-sm sm:text-base md:text-lg text-black font-semibold text-center mb-3 sm:mb-4'>
                                Aún no hay productos agregados
                            </p>
                            <div className='flex justify-center items-center'>
                                <NavLink to={'/catalogue'} onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white hover:bg-green-700 hover:text-green-100 active:bg-green-500'>Comprar Productos</NavLink>
                            </div>
                        </>
                    )
                }
            </div>
        </Modal>
    );
};

export default Scart;