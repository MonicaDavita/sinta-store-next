import { Fragment, useState } from "react";
import ModalIyaTidak from "./modalIyaTidak";
import Link from "next/link";

export default function tampilanKolam({props}) {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <Fragment>
        <div className="ml-6 mr-10 grid grid-cols-3 justify-between items-center pt-2 mb-2" >
            <h4 className="text-justify-left"> {props.nama} </h4>
            <div className="flex justify-end">
            <img src="trash.png" className="w-8 h-8 mr-6" onClick={() => setShowModal(true)}></img>
            </div>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 pt-1 pb-1 pl-1 pr-1 rounded-lg text-white text-xs">
                <Link href="/tambah-karyawan">Tambah Karyawan</Link>
            </button>
        </div>
        <ModalIyaTidak isVisible={showModal} onClose={() => setShowModal(false)} propID={props.id} />
        </Fragment>
    )
}