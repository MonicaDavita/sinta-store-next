import { Fragment, useState } from "react";
import ModalIyaTidak from "./modalIyaTidak";

export default function tampilanKolam({props}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
        <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
            <h4 className="text-justify-left"> {props.name} </h4>
            <img src="trash.png" onClick={() => setShowModal(true)}>
            </img>

        </div>
        <ModalIyaTidak isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}