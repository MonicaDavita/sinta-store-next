import React, { Fragment } from "react";
import SidebarKaryawan from "./components/sidebar-karyawan";
import Link from "next/link";
export default function sudahProses() {
    const status = 0;
    if (status == 0) {
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
                    <div className="grid grid-rows-4 justify-center place-items-center">
                        <h2 className="font-semibold text-center text-xl">Barang sedang <br></br> DIPROSES</h2>
                        <img src="sedang proses.png"></img>
                        <h2 className="font-semibold text-center text-xl">Silahkan datang ke Kolam Utama jika warna tombol “Restock” sudah berubah menjadi merah</h2>
                    </div>
                    <SidebarKaryawan />
                </div>
            </Fragment>
        )
    } else {
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
                    <div className="grid grid-rows-4 justify-center place-items-center m-4">
                        <h2 className="font-semibold text-center text-xl">Barang telah <br></br>SELESAI DIPROSES</h2>
                        <img src="sudah proses.png"></img>
                        <h2 className="font-semibold text-center text-xl">Silakan mengambil barang ke Toko Utama. Pengajuan Restock dapat dilakukan kembali ketika tombol Restock berubah menjadi kuning</h2>
                    </div>
                    <SidebarKaryawan />
                </div>
            </Fragment>
        )
    }
}