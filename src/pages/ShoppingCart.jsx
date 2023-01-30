import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Modal from '../components/Modal';

import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import FooterComponent from '../components/FooterComponent';
import Scart from '../components/Scart';

function ShoppingCart({openModal, handleModal, carrito, sumCantidad, resCantidad, removeCarrito, total}) {

    const ShoppingLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Catálogo',
            path: '/catalogue'
        }
    ];

    // const posFooter = carrito.length>=3 ? 'sticky bottom-0' : 'absolute bottom-0';

    const [change, setChange] = useState(false);
    const [eliminate, setEliminate] = useState(false)

    const handleChangeProduct=()=>{
        setChange(!change);
    };

    const handleEliminateProduct=()=>{
        setEliminate(!eliminate)
    };

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={ShoppingLinks} iconCart={true} carrito={carrito} handleModal={handleModal} />
            <div className='bg-white shadow-md rounded p-3 sm:p-4 max-w-[800px] mx-2 sm:mx-4 md:mx-auto mt-3 sm:mt-4'>
                <h1 className='text-black font-bold text-center mb-3 sm:mb-4 text-base sm:text-lg'>Shopping Cart - ({carrito.length}) Productos</h1>
                <p className=' text-black font-bold text-center mb-3 sm:mb-4 text-base sm:text-lg'>Total: <span className='font-semibold'>${total}</span></p>
                {
                    carrito.length>0 ? (
                        <>
                            <div className='flex items-center justify-evenly flex-wrap mb-3 sm:mb-4'>
                                <button onClick={handleChangeProduct} className='px-2 py-1 bg-yellow-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white m-1 hover:bg-yellow-700 hover:text-yellow-100 active:bg-yellow-500'>{change ? 'Quitar Cambiar Cantidad' : 'Cambiar Cantidad'}</button>
                                <button onClick={handleEliminateProduct} className='px-2 py-1 bg-red-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white m-1 hover:bg-red-700 hover:text-red-100 active:bg-red-500'>{eliminate ? 'Quitar Eliminar Productos' : 'Eliminar Productos'}</button>
                                <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white m-1 hover:bg-green-700 hover:text-green-100 active:bg-green-500'>Seguir Comprando</NavLink>
                                <button onClick={()=>{setChange(false); setEliminate(false)}} className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white m-1 hover:bg-blue-700 hover:text-blue-100 active:bg-blue-500'>Pagar</button>
                            </div>
                            <ul className='max-h-[506px] overflow-y-scroll'>
                                {
                                    carrito.map((oneCarrito)=>(
                                        <li key={oneCarrito.id} className='text-black flex justify-between items-center rounded p-2 sm:p-4 border border-red-600 mb-3 sm:mb-4'>
                                            <NavLink to={`/catalogue/${oneCarrito.id}`}>
                                                <img src={oneCarrito.image} alt="imagen_producto" className='max-h-28 sm:max-h-32 md:max-h-36' />
                                            </NavLink>
                                            <div className='flex flex-col'>
                                                <h2 className='font-bold text-sm sm:text-base md:text-lg text-center'>{oneCarrito.title}</h2>
                                                <h3 className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>${oneCarrito.precio*oneCarrito.cantidad}</h3>
                                            </div>
                                            <div className='flex flex-col justify-center items-center'>
                                                {
                                                    change && (
                                                        <FaPlusCircle onClick={()=>sumCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500' />
                                                    )
                                                }
                                                {
                                                    !change && (
                                                        <p className='font-bold text-sm sm:text-base md:text-lg text-center'>Cantidad</p>
                                                    )
                                                }
                                                <p className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>{oneCarrito.cantidad}</p>
                                                {
                                                    change && (
                                                        <FaMinusCircle onClick={()=>resCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500' />
                                                    )
                                                }
                                            </div>
                                            {
                                                eliminate && (
                                                    <div>
                                                        <FaTrashAlt onClick={()=>removeCarrito(oneCarrito.id)} className='text-2xl sm:text-4xl text-red-600 cursor-pointer hover:text-red-700 active:text-red-500'/>
                                                    </div>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                            {/* <div className='flex items-center justify-evenly'>
                                <button className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base md:text-lg font-semibold text-white'>Pagar</button>
                                <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white'>Seguir Comprando</NavLink>
                            </div> */}
                        </>
                    ) : (
                        <>
                            <p className='text-sm sm:text-base md:text-lg text-black font-semibold text-center mb-3 sm:mb-4'>
                                Aún no hay productos agregados
                            </p>
                            <div className='flex justify-center items-center'>
                                <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base md:text-lg font-semibold text-white hover:bg-green-700 hover:text-green-100 active:bg-green-500'>Comprar Productos</NavLink>
                            </div>
                        </>
                    )
                }
            </div>
            {
                openModal && (
                    <Scart handleModal={handleModal} carrito={carrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} />
                )
            }
        </>
    );
};

export default ShoppingCart;