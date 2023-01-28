import React, { useState, useEffect } from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
// import Modal from '../components/Modal';
import OneCatalogueItem from '../components/OneCatalogueItem';
// import ProductView from '../components/ProductView';


function Catalogue({dataProducts}) {

    // console.log(Data[0].id);

    // const [open, setOpen] = useState(true);

    const [productos] = dataProducts.productos;

    const [carrito, setCarrito] = useState([]);

    const addCarrito=(id)=>{
        const check = carrito.every(item =>{
            return item.id !==id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito, ...data]);
            console.log(data);
        } else {
            alert('El producto ha sido añadido')
        }
    }
    
    // const handleModal=()=>{
    //     setOpen(!open);
    // };

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
            <Header bgHeader={"bg-green-500"} enlaces={CatalogueLinks} />
            {/* <div>Catalogue</div> */}
            <AllCatalogueList>
                {/* <OneCatalogueItem datos={Data} /> */}
                {
                    productos.map((oneData)=>(
                        <OneCatalogueItem key={oneData.id} productId={oneData.id} productName={oneData.title} productPrice={oneData.precio} productImage={oneData.image} addCarrito={addCarrito} />
                    ))
                }
            </AllCatalogueList>
            <FooterComponent footPosition={'sticky bottom-0'} /> 
            {/* <FooterComponent footPosition={'absolute bottom-0'} /> */}
            {/* {open && (
                <Modal>
                    <p>probando modal</p>
                    <p>el id del producto es</p>
                    <button onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base'>Cerrar</button>
                </Modal>
            )} */}
        </>
    );
};

export default Catalogue;