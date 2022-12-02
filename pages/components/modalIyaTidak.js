import React from "react";

function modalIyaTidak( { isVisible, onClose, namaKolam }){
    if ( !isVisible ) return null;

    const handleClose = (e) => {
        if( e.target.id === "wrapper" ) onClose();
    }

    return(
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id = "wrapper" onClick={handleClose}>
            <div className="md:w-[600px] sm:w-[500px] flex flex-col justify-center">
                <button className="place-self-end text-white" onClick={() => onClose()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <div className="bg-white p-2 rounded text-black flex">
                    <h1 className="text-center">Hapus Toko?</h1>
                    <div className="grid-cols-2 mt-12 flex justify-end">
                        <button type="button" className="bg-green-500 hover:bg-green-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl mr-3">Iya</button>
                        <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3">Tidak</button>
                     </div>
                </div>
            </div>

        </div>
    )
}

export default modalIyaTidak;