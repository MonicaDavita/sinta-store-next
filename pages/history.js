import React, { Fragment } from "react";
import Link from "next/link";
import SidebarKaryawan from "./components/sidebar-karyawan";
import TampilanHistory from "./components/TampilanHistory";
import { dataHistory } from "./constants/data"
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import Router from "next/router";


export default function history() {
    // fetching
    const [authToken, setAuthToken] = useState(null)
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setAuthToken(window.localStorage.getItem("token"))
        if (authToken == null) {
            Router.push('/')
        }
        else {
            setLoading(true)
            fetch('https://sinta.gdlx.live/produk')
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
        }
    }, [])

    return (
        <Fragment>
            <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="ml-6">
                    <Link href="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <h1 className="ml-6 text-justify text-2xl font-extrabold text-black mb-4">Kolam 2</h1>
                <SearchBar />
                <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                    <div className="grid grid-cols-3 border box-border border-black bg-slate-300 text-slate-900 items-center text-center font-semibold">
                        <h2>Nama</h2>
                        <h2>Terjual</h2>
                        <h2>Waktu</h2>
                    </div>
                    {data && dataHistory.map((history) => {
                        return <TampilanHistory props={history} />
                    })}
                    {!data && <div><Fragment>
                        <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                            <div className="ml-6">
                                <Link href="/home">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </Link>
                            </div>
                            <h1 className="ml-6 text-justify text-2xl font-extrabold text-black mb-4">Kolam 2</h1>
                            <div className="grid grid-rows-2 justify-center mt-40 place-items-center">
                                <img src="sad face.png"></img>
                                <h2 className="font-semibold text-center text-xl">Belum ada Transaksi</h2>
                            </div>
                            <SidebarKaryawan />
                        </div>
                    </Fragment></div>}
                </div>
                <SidebarKaryawan />
            </div>
        </Fragment>
    )
}
