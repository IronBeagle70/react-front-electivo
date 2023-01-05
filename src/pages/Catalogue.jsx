import React from 'react';
import AllCatalogueList from '../components/AllCatalogueList';
import FooterComponent from '../components/FooterComponent';
import Header from '../components/Header';
import OneCatalogueItem from '../components/OneCatalogueItem';

function Catalogue() {

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
                <OneCatalogueItem />
                <OneCatalogueItem />
                <OneCatalogueItem />
            </AllCatalogueList>
            <FooterComponent footPosition={'sticky bottom-0'} /> 
            {/* <FooterComponent footPosition={'absolute bottom-0'} /> */}
        </>
    );
};

export default Catalogue;