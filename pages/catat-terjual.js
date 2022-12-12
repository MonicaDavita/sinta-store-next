import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import SidebarKaryawan from "./components/sidebar-karyawan";
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import BarangToko from "./components/BarangToko";
export default function CatatTerjual() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // fetch('https://sinta.gdlx.live/stok')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data)
        //         setLoading(false)
        //     })
        async function postData(url = 'https://sinta.gdlx.live/stok') {
            const response = await fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: new Headers({'content-type': 'application/json'}),
                headers: new Headers({'authorization': "Bearer "+ window.localStorage.getItem("token")}),
            });
            
            console.log(response)
            const json = await response.json();
            return json
         }
         var response = postData()
         response.then(res => {
            console.log(res.data.daftar_stok)
            setData(res.data.daftar_stok)
         })
    }, [])


    const [count, setCount] = useState(0);

    function increment() {
        setCount(function (prevCount) {
            return (prevCount += 1);
        });
    }
    function decrement() {
        setCount(function (prevCount) {
            if (prevCount > 0) {
                return (prevCount -= 1);
            } else {
                return (prevCount = 0);
            }
        });
    }
    return (
        <Fragment>
            <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="ml-6">
                    <Link href="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-black mb-4">Kolam 2</h1>
                <SearchBar />
                <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                    <div className="grid grid-cols-3 border box-border border-black bg-amber-300 text-black items-center text-center font-semibold">
                        <h2>Nama</h2>
                        <h2>Stok</h2>
                        <h2>Terjual</h2>
                    </div>
                    {/* <div className="grid grid-cols-3 border box-border text-black text-center items-center">
                        <h2 className="ml-2">Pop Mie Ayam Bawang</h2>
                        <h2 className="ml-2">{countStock}</h2>
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
                                </div> */}
                    {/* {console.log(data.data)} */}
                    {data && data.map((barang) => {
                        return <BarangToko props={barang} />
                    })}
                    {
                        !data &&
                        <div>
                            Kosong
                        </div>
                    }
                </div>
                <div className="flex justify-center items-center md:justify-start">
                    <button className='group relative w-1/2 flex justify-center py-2 px-4 md:ml-6 mb-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-amber-400 mt-5'>
                        Catat Terjual
                    </button>
                </div>
                <SidebarKaryawan />
            </div>
        </Fragment>
    )
}