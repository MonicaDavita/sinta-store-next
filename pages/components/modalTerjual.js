import React from "react";
import Link from "next/link";
import { useState, useEffect } from 'react';
import CatatTerjual from "./catatTerjual";
import Router from "next/router";

function modalTerjual({ isVisible, onClose, modalText, props }) {
    var token
    const [authToken, setAuthToken] = useState(null)
    const [count, setCount] = useState(0);
    const countStock = useState(10);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    console.log(props, "props modal  catat")
    useEffect(() => {
        token = window.localStorage.getItem("token")
        setAuthToken(token)
        if (token == null) {
            Router.push('/')
        }
        else {
            setLoading(true)
            async function postData(url = 'https://sinta.gdlx.live/transaksi') {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
                });

                const json = await response.json();
                console.log(json, "MODAL TERJUAL")
                return json
            }
            var response = postData()
            response.then(res => {
                console.log(res.data)
                setData(res.data)
            })
        }
    }, [])
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    const handleSubmit = (e) => {
        // setShowModal(true)
        postAjuan('https://sinta.gdlx.live/transaksi', props, authToken)
        Router.push("/catat-terjual")
    }

    async function postAjuan(url = 'https://sinta.gdlx.live/transaksi', data = props, token ) {
        // console.log(data)
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + token }),
            body: JSON.stringify({ detail_transaksi: data })
        });
        const json = await response.json();
        console.log(json, "MODAL TERJUAL")
        return json
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
                                {props!= null && props.map((catatTerjual) => {
                                    if(catatTerjual.jumlah>0) return <CatatTerjual props={catatTerjual} />
                                })}
                                {
                                    !data &&
                                    <div>
                                        Kosong
                                    </div>
                                }
                            </tbody>
                        </table>
                        <div className="text-center items-center mt-24 mb-10">
                            <h1>{modalText}</h1>
                            <div className="grid-cols-2 flex justify-center mt-3">
                                {/* <Link href="/sudah-proses"> */}
                                <button type="button" className="bg-green-500 hover:bg-green-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl mr-3" onClick={handleSubmit}>Iya</button>
                                <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3" onClick={handleClose}>Tidak</button>
                                {/* </Link> */}
                                {/* <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3">Tidak</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default modalTerjual;