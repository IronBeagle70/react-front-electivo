import React, { useState } from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import Modal from '../components/Modal';
import OneCatalogueItem from '../components/OneCatalogueItem';

import Data from '../Data.js'; //DB simulator


function Catalogue() {

    // console.log(Data[0].id);

    const [open, setOpen] = useState(false);
    const [vista, setVista] = useState([]);

    const addVista=(id)=>{
        const check = vista.every(item =>{
            return item.id !==id;
        })
        if (check) {
            const data = Data.filter(producto => {
                return producto.id === id
            })
            setVista([...vista, ...data]);
            console.log(data);
        } else {
            alert('El producto ha sido añadido')
        }
    }

    const handleModal=()=>{
        setOpen(!open);
    }

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
                    Data.map((oneData)=>(
                        <OneCatalogueItem key={oneData.id} productId={oneData.id} productName={oneData.title} productPrice={oneData.precio} productImage={oneData.image} handleModal={handleModal} addVista={addVista} open={open} />
                    ))
                }
            </AllCatalogueList>
            <FooterComponent footPosition={'sticky bottom-0'} /> 
            {/* <FooterComponent footPosition={'absolute bottom-0'} /> */}
            {open && (
                <Modal>
                    <p>probando modal</p>
                    <p>el id del producto es</p>
                    <button onClick={handleModal} className='px-2 py-1 rounded bg-green-600 text-sm sm:text-base'>Cerrar</button>
                </Modal>
            )}
        </>
    );
};

export default Catalogue;