import React from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import OneCatalogueItem from '../components/OneCatalogueItem';

import Data from '../Data.js'; //DB simulator


function Catalogue() {

    // console.log(Data.items[0].id);


    const CatalogueLinks=[
        {
            name: 'Inicio',
            path: '/'
        }
        // {
        //     name: '',
        //     path: ''
        // }
    ];

    return (
        <>
            <Header bgHeader={"bg-green-500"} enlaces={CatalogueLinks} />
            {/* <div>Catalogue</div> */}
            <AllCatalogueList>
                {/* <OneCatalogueItem datos={Data} /> */}
                {
                    Data.map((oneData)=>(
                        <OneCatalogueItem key={oneData.id} productName={oneData.title} productPrice={oneData.precio} productImage={oneData.image} />
                    ))
                }
                {/* <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem /> */}
            </AllCatalogueList>
            <FooterComponent footPosition={'sticky bottom-0'} /> 
            {/* <FooterComponent footPosition={'absolute bottom-0'} /> */}
        </>
    );
};

export default Catalogue;