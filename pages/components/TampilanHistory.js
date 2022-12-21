import React from "react";
import { useState } from "react";

export default function tampilanHistory({props}) {
    function parseDate(str_date) {
        return new Date(Date.parse(str_date));
      }
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [count, setCount] = useState(0);
    return (

        <div className="grid grid-cols-3 border box-border text-black text-center items-center">
            <h2 className="ml-2">{props.produk.nama}</h2>
            <h2 className="ml-2">{props.jumlah}</h2>
            <h2 className="ml-2">{parseDate(props.transaksi.CreatedAt).toLocaleDateString("en-US", options)}</h2>
        </div>
    )
}