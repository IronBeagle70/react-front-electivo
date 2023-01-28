import React, {useState ,useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import Header from './Header';
// import Modal from './Modal';

function ProductView({dataProducts}) {

    const [productos] = dataProducts.productos;

    const params = useParams();

    const [show, setShow] = useState([]);

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
            <Header bgHeader={"bg-green-500"} enlaces={ProductsViewLinks} />
            <div className='bg-white shadow-md rounded p-3 sm:p-4 flex flex-col max-w-[1000px]  mx-4 lg:mx-auto mt-4 md:mt-6'>
                <h2 className='font-bold mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl text-center'>{show.title}</h2>
                <img src={show.image} alt="img_producto" className='max-h-64 md:max-h-72 mb-2 sm:mb-3 lg:max-h-[350px]' />
                <h3 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'><span className='font-bold mb-1 sm:mb-2 text-sm sm:text-base'>Descripción: </span>{show.description}</h3>
                <h4 className='font-semibold mb-1 sm:mb-2 text-sm sm:text-base'>${show.precio}</h4>
                <div className='flex justify-evenly items-center font-semibold text-white'>
                    <button className='px-2 py-1 bg-blue-600 rounded text-sm sm:text-base'>Añadir al Carrito</button>
                    <NavLink to={'/catalogue'} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base'>Volver</NavLink>
                </div>
            </div>
            <FooterComponent footPosition={'absolute bottom-0'} />
        </>
    );
};

export default ProductView;