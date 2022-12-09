import React from "react";
import { useState } from "react";
import Modal from "./modalAjuan";
import { Fragment } from "react";

export default function ajuanComp({props}){
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);
    const countStock = useState(10);

    {console.log(props)}
    return (
        <Fragment>
        <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
            <h4 className="text-justify-left"> {props.name} </h4>
            <button type="button" className="bg-blue-500 hover:bg-blue-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl" onClick={() => setShowModal(true)}>
                Lihat
            </button>
        </div>
        <Modal
        modalText="Sudah Diproses?"
        linkAjuan="/sudah-proses"
        isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}

