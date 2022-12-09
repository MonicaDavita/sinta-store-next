import { useState } from 'react';
import { Fragment } from "react";
import Sidebar from "./components/sidebar";
import Modal from "./components/modalAjuan";
import { dataAjuan } from "./constants/data";
import TampilanAjuan from "./components/ajuanComp";

export default function homeAdmin() {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="max-w-md w-full space-y-6">
                    <h3 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">
                        Selamat datang,
                    </h3>
                    <h2 className="ml-6 text-justify text-3xl font-extrabold text-amber-700">
                        Admin Sinta
                    </h2>
                    <h4 className="ml-6 mt-8 text-justify text-2xl font-bold text-black">
                        Ajuan Restock
                    </h4>
                </div>
                <div className="md:ml-3 pt-3 pb-3 text-justify text-1xl font-bold w-full divide-y divide-slate-300">
                    <div className=" bg-slate-300 pt-3 pb-3">
                        <h4 className="ml-6 text-slate-900">
                            TOKO
                        </h4>
                    </div>
                </div>
                {dataAjuan.map((ajuan) => {
                    return <TampilanAjuan props={ajuan} />
                })}  
            </div>
            <Sidebar />
            <Modal
                modalText="Sudah Diproses?"
                linkAjuan="/sudah-proses"
                isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}