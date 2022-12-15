import { useState } from "react";


export default function ajuanBarangModal({props}) {
    return (
        <tr className="border-b border-amber-700 mb-8">
            <td>{props.nama}</td>
            <td>{props.Jumlah}</td>
        </tr>
    )
}