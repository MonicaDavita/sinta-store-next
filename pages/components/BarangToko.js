import React, { use } from "react";
import { useState, useEffect } from "react";
export default function BarangToko({ props, ajuanSetter, ajuan = true }) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(function (count) {
            return (count += 1);
        });
    }
    function decrement() {
        setCount(function (count) {
            if (count > 0) {
                return (count -= 1);
            } else {
                return (count = 0);
            }
        });
    }

    useEffect(() => {
        ajuanSetter && ajuan && ajuanSetter({ produk_id: props.id, jumlah: count })
    }, [count])

    useEffect(() => {
        ajuanSetter && !ajuan && ajuanSetter({ produk_id: props.produk_id, jumlah: count, harga: props.produk.harga })
    }, [count])

    { console.log("INI PROPS MODAL", props) }
    return (
        <div>
            <div className="grid grid-cols-3 border box-border text-black text-center items-center">
                <h2 className="ml-2">{!ajuan ? props.produk.nama : props.nama}</h2>
                <h2 className="ml-2">{props.jumlah}</h2>
                <div className="grid grid-cols-3 justify-center place-items-center">
                    <button onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </button>
                    <div className="flex justify-center items-center border rounded-lg bg-slate-400 text-slate-700 w-8 h-6">
                        <h3>{count}</h3>
                    </div>
                    <button onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

