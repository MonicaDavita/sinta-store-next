import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Sidebar from "./components/sidebar";

export default function lihatKaryawan(){
    return(
        <Fragment>
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <div className="ml-6">
            <Link href="/home">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            </Link>
            </div>
            <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
            <div className="mt-10 grid grid-row-flow justify-center">
                <div className="box-border h-[128px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8">
                    <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                        <div className="flex justify-center items-center ml-2">
                            <img src="Profile Pic.png"></img>
                        </div>
                        <div className="grid grid-rows-2 justify-start ml-4">
                            <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                                <h2 className="ml-2 mb-1">Karyawan 1</h2>
                            </div>
                            <div className="ml-2">
                            <h4>Kolam 1</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border h-[128px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8">
                    <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                        <div className="flex justify-center items-center ml-2">
                            <img src="Profile Pic.png"></img>
                        </div>
                        <div className="grid grid-rows-2 justify-start ml-4">
                            <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                                <h2 className="ml-2 mb-1">Karyawan 2</h2>
                            </div>
                            <div className="ml-2">
                            <h4>Kolam 2</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border h-[128px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8">
                    <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                        <div className="flex justify-center items-center ml-2">
                            <img src="Profile Pic.png"></img>
                        </div>
                        <div className="grid grid-rows-2 justify-start ml-4">
                            <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                                <h2 className="ml-2 mb-1">Karyawan 3</h2>
                            </div>
                            <div className="ml-2">
                            <h4>Kolam 3</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border h-[128px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8">
                    <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                        <div className="flex justify-center items-center ml-2">
                            <img src="Profile Pic.png"></img>
                        </div>
                        <div className="grid grid-rows-2 justify-start ml-4">
                            <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                                <h2 className="ml-2 mb-1">Karyawan 4</h2>
                            </div>
                            <div className="ml-2">
                            <h4>Kolam 4</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-border h-[128px] w-[360px] border-2 bg-amber-400 border-black rounded-xl mb-8">
                    <div className="grid-rows-2 flex mt-4 ml-2 mr-2">
                        <div className="flex justify-center items-center ml-2">
                            <img src="Profile Pic.png"></img>
                        </div>
                        <div className="grid grid-rows-2 justify-start ml-4">
                            <div className="box-border h-[30px] w-[200px] border bg-amber-700 border-black rounded-xl text-white text-bold flex justify-start items-center">
                                <h2 className="ml-2 mb-1">Karyawan 5</h2>
                            </div>
                            <div className="ml-2">
                            <h4>Kolam 5</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center md:ml-6">
                <button className='group relative flex justify-center py-2 px-4 mb-6 border border-transparent text-sm font-bold rounded-md text-black bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-200 mt-5 w-[300px]'>
                    <h2 className="mr-2">Tambah Karyawan</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            <Sidebar />
        </div>
        </Fragment>
    )
}