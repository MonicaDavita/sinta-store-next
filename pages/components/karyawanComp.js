import { Fragment, useState } from "react";
import ModalIyaTidak from "./modalIyaTidak";

export default function tampilanKolam({ props }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            <div className="box-border h-[140px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8"  onClick={() => setShowModal(true)}>

                <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                    <div className="flex justify-center items-center ml-2">
                        <img src="Profile Pic.png"></img>
                    </div>
                    <div className="grid grid-rows-4 justify-start ml-4">
                        <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                            <h2 className="ml-2 mb-1">{props.nama}</h2>
                        </div>
                        <div className="ml-2">
                            <h4>Toko {props.toko_id}</h4>
                        </div>
                        <div className="ml-2">
                            <h4>{props.no_telp}</h4>
                        </div>
                        <div className="ml-2">
                            <h4>{props.alamat}</h4>
                        </div>
                    </div>
                </div>
            </div>

            <ModalIyaTidak isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}