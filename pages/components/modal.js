import React from "react";
import RincianAjuan from "./rincianAjuan";

function modal( { isVisible, onClose }){
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === "wrapper" ) onClose();
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id = "wrapper" onClick={handleClose}>
            <div className="md:w-[600px] sm:w-[500px] flex flex-col">
                <button className="place-self-end text-white" onClick={() => onClose()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <div className="bg-white p-2 rounded text-black">
                    <RincianAjuan />
                </div>
            </div>

        </div>
    )
}

export default modal;