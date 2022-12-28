import React, { Fragment } from "react";
import Link from "next/link";
import SidebarKaryawan from "./components/sidebar-karyawan";
import TampilanHistory from "./components/TampilanHistory";
import { dataHistory } from "./constants/data"
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import Router from "next/router";
import BackButton from "./components/backButton"


export default function history() {
    // fetching

    function parseJwt(token) {
        return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    }


    var token
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        token = parseJwt(window.localStorage.getItem("token"))
        if (token == null) {
            Router.push('/')
        }
        else {
            setLoading(true)
            fetch('https://sinta.gdlx.live/transaksi/harian/' + token.toko_id)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.data)
                    setData(data.data)
                    setLoading(false)
                })
            // if (data == null) Router.push('/history-kosong')
        }
    }, [])

    return (
        <Fragment>
            <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                <BackButton />
                <h1 className="ml-6 text-justify text-2xl font-extrabold text-black mb-4">History</h1>
                <SearchBar />
                <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                    <div className="grid grid-cols-3 border box-border border-black bg-slate-300 text-slate-900 items-center text-center font-semibold">
                        <h2>Nama</h2>
                        <h2>Terjual</h2>
                        <h2>Waktu</h2>
                    </div>
                    {data && data.map((history) => {
                        if (history.jumlah != 0) return <TampilanHistory key={history.id} props={history} />
                        // else if (history.jumlah == 0) Router.push('/history-kosong')
                    })}
                    {!data && <div>
                        Router.push('/history-kosong')
                    </div>}
                </div>
                <SidebarKaryawan />
            </div>
        </Fragment>
    )
}
