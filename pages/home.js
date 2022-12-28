import { useState, useEffect } from 'react';
import { Fragment } from "react";
import Sidebar from "./components/sidebar";
import Modal from "./components/modalAjuan";
import TampilanAjuan from "./components/ajuanComp";
import Router from 'next/router'

export default function homeAdmin() {
    var token
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        token = window.localStorage.getItem("token")
        if (token == null) {
            Router.push('/')
        }
        else {
            setLoading(true)
            async function postData(url = 'https://sinta.gdlx.live/ajuan') {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: new Headers({ 'content-type': 'application/json' }),
                    headers: new Headers({ 'authorization': "Bearer " + token }),
                });

                const json = await response.json();
                // console.log(json)
                return json
            }
            var response = postData()
            response.then(res => {
                // console.log(res.data)
                setData(res.data)
            })
        }
    }, [])
    return (
        <Fragment>
            <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="max-w-md w-full space-y-6">
                    <h3 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">
                        Selamat datang,
                    </h3>
                    <h2 className="ml-6 text-justify text-3xl font-extrabold text-amber-700">
                        Admin Sinta
                    </h2>
                    <h4 className="ml-6 mt-8 text-justify text-2xl font-bold text-black">
                        Ajuan Restock
                    </h4>
                </div>
                <div className="md:ml-3 pt-3 pb-3 text-justify text-1xl font-bold w-full divide-y divide-slate-300">
                    <div className=" bg-slate-300 pt-3 pb-3">
                        <h4 className="ml-6 text-slate-900">
                            TOKO
                        </h4>
                    </div>
                </div>
                {data != null && data.map((ajuan) => {
                    return <TampilanAjuan props={ajuan} />
                })}
            </div>
            <Sidebar />
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
        </Fragment>
    )
}