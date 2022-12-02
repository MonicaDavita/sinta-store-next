import React from "react";
import Sidebar from "./components/sidebar";
import { Fragment } from "react";
import Link from "next/link";
import { useState } from 'react';
import ModalIyaTidak from './components/modalIyaTidak';

export default function lihatToko(){
    const [showModal, setShowModal] = useState(false);
    return(
        <Fragment>
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <div className="ml-6">
            <Link href="/home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </Link>
            </div>
            <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
            <div className="md:ml-3 pt-3 pb-3 text-justify text-1xl font-bold max-w-md w-full divide-y divide-slate-300">
                <div className=" bg-slate-300 pt-3 pb-3">
                    <h4 className="ml-6 text-slate-900">
                        Nama Toko
                    </h4>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 1 </h4>
                    <img src="trash.png" onClick={() => {setShowModal(true)}}>
                    </img>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 2 </h4>
                    <img src="trash.png" onClick={() => setShowModal(true)}>
                    </img>
                    
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 3 </h4>
                    <img src="trash.png" onClick={() => setShowModal(true)}>
                    </img>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 4 </h4>
                    <img src="trash.png" onClick={() => setShowModal(true)}>
                    </img>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 5 </h4>
                    <img src="trash.png" onClick={() => setShowModal(true)}>
                    </img>
                </div>
            </div>
            <div className="flex justify-center md:justify-start md:ml-6">
                <button className='group relative flex justify-center py-2 px-4 mb-6 border border-transparent text-sm font-bold rounded-md text-black bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200 mt-5'>
                    Tambahkan Toko
                    <img src="bx_store.png" className="ml-2 h-6 w-6" onClick={() => setShowModal(true)}></img>
                </button>
            </div>
            <Sidebar />
        </div>
        <ModalIyaTidak isVisible={showModal} onClose={() => setShowModal(false)}/>
        </Fragment>
    )
}