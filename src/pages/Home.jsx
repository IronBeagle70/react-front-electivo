import React from 'react';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';

function Home() {

    const HomeLinks=[
        {
            name: 'Catálogo',
            path: '/catalogue'
        },
        {
            name: 'Iniciar Sesión',
            path: '/login'
        },
        {
            name: 'Registrate',
            path: '/signup'
        }
    ];

    return (
        <>
            <Header bgHeader={"bg-teal-300"} enlaces={HomeLinks} />
            <div className='bg-slate-700'>Home</div>
            <FooterComponent footPosition={"absolute bottom-0"} />
        </>
    );
};

export default Home;