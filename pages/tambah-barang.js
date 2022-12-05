import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import Sidebar from "./components/sidebar";
import Dropdown from "./components/dropdownToko";

export default function tambahBarang() {
    return (
        <Fragment>
            <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="max-w-md w-full space-y-6">
                    <h3 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">
                        Selamat datang,
                    </h3>
                    <h2 className="ml-6 text-justify text-3xl font-extrabold text-amber-700">
                        Admin Sinta
                    </h2>
                    <h3 className="ml-6 text-justify text-xl font-bold text-black">
                        Tambahkan barang pada suatu toko
                    </h3>
                </div>
                <div className="mt-10">
                <Dropdown />
                </div>
                <Sidebar />
            </div>
        </Fragment>
    )
}