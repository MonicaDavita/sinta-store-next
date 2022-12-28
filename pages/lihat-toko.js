import React from "react";
import Sidebar from "./components/sidebar";
import Link from "next/link";
import { useState, useEffect } from 'react';
import TampilanKolam from "./components/tampilanKolam";
import Router from "next/router";
import BackButton from "./components/backButton"

export default function lihatToko() {

    var token
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        token = window.localStorage.getItem("token")
        if (token == null) {
            Router.push('/')
        }
        else {
            setLoading(true)

        async function postData(url = 'https://sinta.gdlx.live/toko') {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json' }),
                headers: new Headers({ 'authorization': "Bearer " + token }),
            });

            const json = await response.json();
            console.log(json)
            return json
        }
        var response = postData()
        response.then(res => {
            console.log(res.data)
            setData(res.data)
        })
        }
    }, [])
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <BackButton />
            <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
            <div className="md:ml-3 pt-3 pb-3 text-justify text-1xl font-bold max-w-md w-full divide-y divide-slate-300">
                <div className=" bg-slate-300 pt-3 pb-3">
                    <h4 className="ml-6 text-slate-900">
                        Nama Toko
                    </h4>
                </div>
                {data != null && data.map((kolam) => {
                    return <TampilanKolam props={kolam} />
                })}


            </div>
            <Link href="/Signup" className="flex justify-center md:justify-start md:ml-6">
                <button className='group relative flex justify-center py-2 px-4 mb-6 border border-transparent text-sm font-bold rounded-md text-black bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200 mt-5'>
                    Tambahkan Toko
                </button>
            </Link>
            <Sidebar />
        </div>
    )
}