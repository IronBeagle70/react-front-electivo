import React from 'react';
import Header from '../components/Header';

function ShoppingCart() {

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

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={ShoppingLinks} />
        </>
    );
};

export default ShoppingCart;