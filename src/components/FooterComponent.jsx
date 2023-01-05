import React from 'react';

function FooterComponent({footPosition}) {
    return (
        <footer className={`bg-green-900 w-full h-20 sm:h-12 flex items-center justify-evenly ${footPosition} `}>
            <p>link 1</p>
            <p>link 2</p>
        </footer>
    );
};

export default FooterComponent;