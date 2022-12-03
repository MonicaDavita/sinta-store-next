import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function laporanKeuangan(){
    return(
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <div className="ml-6">
            <Link href="/home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </Link>
            </div>
            <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
            <div className="ml-6 grid grid-cols-3 justify-center">
                <button className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Harian</h2>
                </button>
                <button className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Mingguan</h2>
                </button>
                <button className="box-border border md:w-40 sm:w-20 bg-amber-400 focus:bg-amber-700 border-black rounded-xl text-black focus:text-white text-bold flex justify-center items-center mt-2 mr-4">
                    <h2 className="mb-1 font-bold">Bulanan</h2>
                </button>
            </div>
            <div className="md:ml-6 grid grid-rows-3">
                <div className="grid grid-cols-6 justify-start">
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>K1</h3>
                    </button>
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>K2</h3>
                    </button>
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>K3</h3>
                    </button>
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>K4</h3>
                    </button>
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>K5</h3>
                    </button>
                    <button className="mt-2 mb-2 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
                        <h3>Total</h3>
                    </button>
                </div>
                <div className="grid grid-rows-3 justify-start">
                    <div className="grid grid-cols-4 border box-border border-black bg-amber-300 text-black justify-center items-center">
                        <h2 className="ml-2">Nama</h2>
                        <h2 className="ml-2">Terjual</h2>
                        <h2 className="ml-2">Harga Satuan</h2>
                        <h2 className="ml-2">Harga Total</h2>
                    </div>
                    <div className="grid grid-cols-4 border box-border text-black">
                        <h2 className="ml-2">Pop Mie Ayam</h2>
                        <h2 className="ml-2">2</h2>
                        <h2 className="ml-2">15.000</h2>
                        <h2 className="ml-2">30.000</h2>
                    </div>
                    <div className="grid grid-cols-4 border box-border text-black">
                        <h2 className="ml-2">Pop Mie Ayam Bawang</h2>
                        <h2 className="ml-2">1</h2>
                        <h2 className="ml-2">15.000</h2>
                        <h2 className="ml-2">45.000</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-right font-bold justify-start text-bold">
                    <h2 className="ml-10 md:text-center">Total</h2>
                    <h2 className="mr-10 md:text-left md:pl-4">45.000</h2>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}