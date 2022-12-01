import { Disclosure } from "@headlessui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function sidebar(){
    return(
        <div>
            <Disclosure as = "nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900">
                <GiHamburgerMenu className="block md:hidden h-6 w-6" aria-hidden="true"></GiHamburgerMenu>
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-screen bg-slate-50 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r border-slate-200">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:hidden w-6 h-6 mt-20">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
            
                <div className="text-base text-left cursor-pointer font-bold text-black border-b mt-20">
                    <h1 className="border-b border-amber-700 pt-4 pb-4">Home</h1>
                    <h1 className="border-b border-amber-700 pt-4 pb-4">Lihat Toko</h1>
                    <h1 className="border-b border-amber-700 pt-4 pb-4">Lihat Karyawan</h1>
                    <h1 className="border-b border-amber-700 pt-4 pb-4">Laporan Keuangan</h1>
                    <button className="mt-6 mb-6 pt-1 pb-1 pr-3 pl-3 rounded-lg bg-amber-700 text-white">Logout</button>
                </div>
            </div>
            </Disclosure>
        </div>
    )
}

export default sidebar;