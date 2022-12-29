import { React, useState, useEffect } from "react";
import { Fragment } from "react";
import Link from "next/link";
import Sidebar from "./components/sidebar";
import { data } from "autoprefixer";
import LaporanTokoButton from "./components/LaporanTokoButton";
import TransaksiComponent from "./components/TransaksiComponent";
import { clippingParents } from "@popperjs/core";
import Router from "next/router";
import BackButton from "./components/backButton"
import TransaksiTotal from "./components/transaksiTotal";

export default function laporanKeuangan() {

    var token

    const [dataToko, setDataToko] = useState(null);
    const [dataTransaksi, setDataTransaksi] = useState([])

    const [freq, setFreq] = useState("harian");
    const [transaksiTarget, setTransaksiTarget] = useState("1");

    async function getToko(url = 'https://sinta.gdlx.live/toko') {
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

    async function getTransaksi(url = 'https://sinta.gdlx.live/transaksi', param1 = freq, param2 = transaksiTarget) {
        const response = await fetch(url + '/' + param1 + '/' + param2, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json' }),
            headers: new Headers({ 'authorization': "Bearer " + token }),
        });

        const json = await response.json();
        console.log(json)
        return json
    }

    useEffect(() => {
        token = window.localStorage.getItem("token")
        if (token == null) {
            Router.push('/')
        }
        else {
            var response = getToko()
            response.then(res => {
                console.log(res.data)
                setDataToko(res.data)
            })
        }

        // var response = getTransaksi()
        // response.then(res => {
        //     console.log(res.data)
        //     setDataTransaksi(res.data)
        // })

    }, [])

    useEffect(() => {
        var response = getTransaksi()
        response.then(res => {
            console.log(freq)
            console.log(transaksiTarget)
            setDataTransaksi(res.data)
        })


    }, [freq, transaksiTarget])
    console.log(dataTransaksi, "ini  dtr")
    return (
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <BackButton />
            <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
            <div className="ml-6 grid grid-cols-3 justify-center">
                <button onClick={() => setFreq("harian")} className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Harian</h2>
                </button>
                <button onClick={() => setFreq("mingguan")} className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Mingguan</h2>
                </button>
                <button onClick={() => setFreq("bulanan")} className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Bulanan</h2>
                </button>
            </div>
            <div className="md:ml-6 grid items-start">
                <div className="flex justify-start text-center overflow-x-scroll">
                    {
                        dataToko != null && dataToko.map((toko) => {
                            return <LaporanTokoButton props={toko} transaksiSetter={setTransaksiTarget} />
                        })
                    }
                    {/* <button className="mt-2 px-3 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold" onClick={()=>setTransaksiTarget("total")}>
                        <h3>TOTAL</h3>
                    </button> */}
                </div>
                <div className="grid grid-rows-3 justify-start items-start text-center mt-4">
                    <div className="grid grid-cols-4 border box-border border-black bg-amber-300 text-black text-center font-semibold">
                        <h2 className="ml-2">Nama</h2>
                        <h2 className="ml-2">Terjual</h2>
                        <h2 className="ml-2">Harga Satuan</h2>
                        <h2 className="ml-2">Harga Total</h2>
                    </div>
                    {
                        dataTransaksi && transaksiTarget!="total" && dataTransaksi.map((trxdata) => {
                            if(trxdata.jumlah!=0) return <TransaksiComponent props={trxdata} />
                        })
                        
                    }
                    {/* {
                        dataTransaksi && transaksiTarget=="total" && dataTransaksi.map((trxdata) => {
                            if(trxdata.jumlah!=0) return <TransaksiTotal props={trxdata} />
                        })
                        
                    } */}
                    <div className="grid grid-cols-2 font-bold justify-end text-bold text-end">
                    <h2 className="pr-10">{dataTransaksi ? dataTransaksi.reduce((key, val) => { return key + parseInt(val.jumlah) }, 0) : null}</h2>
                    <h2 className="pr-6">{dataTransaksi ? dataTransaksi.reduce((key, val) => { return key + (parseInt(val.harga) * parseInt(val.jumlah)) }, 0) : null}</h2>
                </div>
                </div>
                
            </div>
            <Sidebar />
        </div>
    )
}