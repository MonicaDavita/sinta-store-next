import React from "react";
import Sidebar from "./components/sidebar";
import Link from "next/link";
import { useState, useEffect } from 'react';
import TampilanKolam from "./components/tampilanKolam";

export default function lihatToko() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        async function postData(url = 'https://sinta.gdlx.live/toko') {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json' }),
                headers: new Headers({ 'authorization': "Bearer " + window.localStorage.getItem("token") }),
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
    }, [])
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <div className="ml-6">
                <Link href="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>
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