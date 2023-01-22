import React from 'react';
import ReactDOM from 'react-dom';

function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="bg-slate-800/80 fixed flex items-center justify-center top-[-10px] left-[-10px] right-[-10px] bottom-[-10px] text-white">
            {children}
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;