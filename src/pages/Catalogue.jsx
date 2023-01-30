import React, { useState, useEffect } from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import Modal from '../components/Modal';
import OneCatalogueItem from '../components/OneCatalogueItem';

import { FaTrashAlt, FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Scart from '../components/Scart';
// import ProductView from '../components/ProductView';


function Catalogue({dataProducts, handleModal, openModal, addCarrito, carrito, removeCarrito, sumCantidad, resCantidad}) {
    // console.log(Data[0].id);
    const CatalogueLinks=[
        {
            name: 'Inicio',
            path: '/'
        },
        {
            name: 'Pagar productos',
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
                <Scart handleModal={handleModal} carrito={carrito} removeCarrito={removeCarrito} sumCantidad={sumCantidad} resCantidad={resCantidad} />
            )}
        </>
    );
};

export default Catalogue;