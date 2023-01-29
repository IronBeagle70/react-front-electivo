import React, {useState ,useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import Header from './Header';
import Modal from './Modal';
// import Modal from './Modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

function ProductView({dataProducts, carrito, handleModal, openModal, addCarrito, removeCarrito, sumCantidad, resCantidad}) {

    const [productos] = dataProducts.productos; //get all Data

    const params = useParams();

    const [show, setShow] = useState([]); // show one Product state

    useEffect(()=>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setShow(producto);
            };
        });
    },[params.id, productos]);

    // console.log(show);

    const ProductsViewLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Catálogo',
            path: '/catalogue'
        },
        {
            name: 'Carrito de Compras',
            path: '/shopping'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={ProductsViewLinks} iconCart={true} carrito={carrito} handleModal={handleModal}/>
            <div className='bg-white shadow-md rounded p-3 sm:p-4 flex flex-col max-w-[1000px]  mx-4 lg:mx-auto mt-4 md:mt-6'>
                <h2 className='font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center'>{show.title}</h2>
                <img src={show.image} alt="img_producto" className='max-h-64 md:max-h-72 mb-2 sm:mb-3 lg:max-h-[350px]' />
                <h3 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'><span className='font-bold mb-1 sm:mb-2 text-sm sm:text-base'>Descripción: </span>{show.description}</h3>
                <h4 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'>${show.precio}</h4>
                <div className='flex justify-evenly items-center font-semibold text-white'>
                    <button onClick={()=>addCarrito(show.id)} className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base'>Añadir al Carrito</button>
                    <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base'>Volver</NavLink>
                </div>
            </div>
            {openModal && (
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
                                                        <FaPlusCircle onClick={()=>sumCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-700' />
                                                        <p className='font-semibold text-center sm:text-left text-sm sm:text-base md:text-lg'>{oneCarrito.cantidad}</p>
                                                        <FaMinusCircle onClick={()=>resCantidad(oneCarrito.id)} className='text-xl sm:text-2xl text-red-700' />
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
            <FooterComponent footPosition={'absolute bottom-0'} />
        </>
    );
};

export default ProductView;