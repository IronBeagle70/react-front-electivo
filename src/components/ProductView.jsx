import React, {useState ,useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import Header from './Header';
import Modal from './Modal';
// import Modal from './Modal';
import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Scart from './Scart';

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
            name: 'Pagar productos',
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
                    <button onClick={()=>addCarrito(show.id)} className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base hover:bg-blue-700 hover:text-blue-100 active:bg-blue-500'>Añadir al Carrito</button>
                    <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base hover:bg-green-700 hover:text-green-100 active:bg-green-500'>Volver</NavLink>
                </div>
            </div>
            {openModal && (
                <Scart handleModal={handleModal} carrito={carrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} />
            )}
            <FooterComponent footPosition={'absolute bottom-0'} />
        </>
    );
};

export default ProductView;