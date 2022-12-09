import React, { Fragment } from "react";
import Link from "next/link";
import SidebarKaryawan from "./components/sidebar-karyawan";
import TampilanHistory from "./components/TampilanHistory";
import { dataHistory } from "./constants/data"
import SearchBar from "./components/searchBar";

export default function history() {
    const historyStatus = 1;
    if (historyStatus == 0) {
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
                    <h1 className="ml-6 text-justify text-2xl font-extrabold text-black mb-4">Kolam 2</h1>
                    <div className="grid grid-rows-2 justify-center mt-40 place-items-center">
                        <img src="sad face.png"></img>
                        <h2 className="font-semibold text-center text-xl">Belum ada Transaksi</h2>
                    </div>
                    <SidebarKaryawan />
                </div>
            </Fragment>
        )
    }
    else {
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
                    <h1 className="ml-6 text-justify text-2xl font-extrabold text-black mb-4">Kolam 2</h1>
                    <SearchBar />
                    <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                        <div className="grid grid-cols-3 border box-border border-black bg-slate-300 text-slate-900 items-center text-center font-semibold">
                            <h2>Nama</h2>
                            <h2>Terjual</h2>
                            <h2>Waktu</h2>
                        </div>
                        {dataHistory.map((history) => {
                            return <TampilanHistory props={history} />
                        })}
                    </div>
                    <SidebarKaryawan />
                </div>
            </Fragment>
        )
    }
}