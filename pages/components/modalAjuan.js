import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import AjuanBarang from "./ajuanBarangModal";

function modal({ isVisible, onClose, modalText, tokoID }) {
    const [count, setCount] = useState(0);
    const countStock = useState(10);
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
    
        async function postData(url = 'https://sinta.gdlx.live/ajuan/' + tokoID) {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
            });
    
            const json = await response.json();
            console.log(json, "tokoid")
            return json
        }
        var response = postData()
        response.then(res => {
            console.log(res.data)
            setData(res.data.detail_ajuan)
        })
    }, [])

    
    async function acceptAjuan(url = 'https://sinta.gdlx.live/ajuan/accept/' + data[0].ajuan_id) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
        });
        console.log(data)
        const json = await response.json();
        console.log(json, "acceptajuan")
        return json
    }
    

    async function declineAjuan(url = 'https://sinta.gdlx.live/ajuan/decline/' + data[0].ajuan_id) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
        });
        
        const json = await response.json();
        console.log(json, "decline")
        return json
    }
    
    function handleAccept(){
        acceptAjuan();
        var response = acceptAjuan()
    response.then(res => {
        console.log(res.data, "acc")
    })
    }

    function handleDecline(){
        var response = declineAjuan()
        response.then(res => {
            console.log(res.data, "dec")
        })
    
    }
    
    if (!isVisible) return null;
    
    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="md:w-[600px] sm:w-[500px] flex flex-col">
                <button className="place-self-end text-white" onClick={() => onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="bg-white p-2 rounded text-black">
                    <div>
                        <h1 className="text-center font-bold mb-8 mt-8 text-lg"> Rincian Ajuan </h1>
                        <table className="table-auto md:w-[580px] pt-2 pl-6 mb-6 text-left">
                            <thead>
                                <tr className="bg-slate-400">
                                    <th>Nama</th>
                                    <th>Jumlah</th>
                                </tr>
                            </thead>
                            <tbody className="text-left">
                                {data != null && data.map((ajuanBarang) => {
                                    return <AjuanBarang props={ajuanBarang} />
                                })}
                                {/* {
                                    !data &&
                                    <div>
                                        Kosong
                                    </div>
                                } */}
                                {/* <tr className="border-b border-amber-700 mb-8">
                                    <td>{}</td>
                                    <td>2</td>
                                </tr>
                                <tr className="border-b border-amber-700 mb-8">
                                    <td>Pop Mie Ayam Bwg</td>
                                    <td>1</td>
                                </tr> */}
                            </tbody>
                        </table>
                        <div className="text-center items-center mt-24 mb-10">
                            <h1>{modalText}</h1>
                            <div className="grid-cols-2 flex justify-center mt-3">
                                {/* <Link href="/home"> */}
                                    <button type="button" className="bg-green-500 hover:bg-green-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl mr-3" onClick={handleAccept}>Iya</button>
                                {/* </Link> */}
                                <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3" onClick={handleDecline}>Tidak</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default modal;