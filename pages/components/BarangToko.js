import React, { use } from "react";
import { useState, useEffect } from "react";
export default function BarangToko({props, ajuanSetter}){
    const [count, setCount] = useState(0);
    const countStock = useState(10);

    function increment(){
        setCount(function (prevCount){
            return (prevCount += 1);
        });

    }
    function decrement(){
        setCount(function (prevCount){
            if (prevCount > 0){
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }

    useEffect(()=>{
        ajuanSetter && ajuanSetter({produk_id:props.id, jumlah:count})
    }, [count])

    // {console.log(props)}
    return (
    <div className="grid grid-cols-3 border box-border text-black text-center items-center">
                        <h2 className="ml-2">{props.produk.nama}</h2>
                        <h2 className="ml-2">{props.Jumlah}</h2>
                        <div className="grid grid-cols-3 justify-center place-items-center">
                            <button onClick={increment}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                                </svg>
                            </button>
                            <div className="flex justify-center items-center border rounded-lg bg-slate-400 text-slate-700 w-8 h-6">
                                <h3>{count}</h3>
                            </div>
                            <button onClick={decrement}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )
}

