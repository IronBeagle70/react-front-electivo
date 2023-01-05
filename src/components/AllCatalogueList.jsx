import React from 'react';

function AllCatalogueList(props) {
    return (
        <section className='max-w-[1300px] flex items-center justify-center mx-auto mt-4 md:mt-6'>
            <ul className='flex justify-evenly flex-wrap'>
                {props.children}
            </ul>
        </section>
    );
};

export default AllCatalogueList;