import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import SidebarKaryawan from "./components/sidebar-karyawan";
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import Modal from "./components/modalRestock";
import BarangToko from "./components/BarangToko";
import Router from "next/router";
import BackButton from "./components/backButton"

export default function restockBarang() {

    var token
    const [authToken, setAuthToken] = useState(null)
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null)
    const [ajuan, setAjuan] = useState([])
    const [makeAjuan, setMakeAjuan] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        token = window.localStorage.getItem("token")
        setAuthToken(token)
        if (token == null) {
            Router.push('/')
        }
        else {
            setLoading(true)
            async function postData(url = 'https://sinta.gdlx.live/stok/produk') {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + token }),
                });

                const json = await response.json();
                console.log(json)
                return json
            }
            var response = postData()
            response.then(res => {
                // console.log(res.data.daftar_stok)
                setData(res.data)
            })
        }
    }, [])

    function checkKeyValueExist(key, value, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                // console.log(key, value, array[i][key],"checkKeyValueExist")
                return true;
            }
        }
        return false;
    }

    function changeJumlahIfKeyValueExist(key, value, array, newJumlah) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                array[i].jumlah = newJumlah;
            }
        }
    }
    const handleAjuan = (childAjuan) => {
        var buffer = ajuan
        changeJumlahIfKeyValueExist("produk_id", childAjuan.produk_id, buffer, childAjuan.jumlah)
        console.log(buffer, "buffer")
        setAjuan(!checkKeyValueExist("produk_id", childAjuan.produk_id, ajuan) ? [...ajuan, childAjuan] : buffer)


    }

    const handleSubmit = (e) => {
        if (authToken != null) {
            setShowModal(true)
            // postAjuan('https://sinta.gdlx.live/ajuan', ajuan, authToken)
        }
    }
    async function postAjuan(url = 'https://sinta.gdlx.live/ajuan', data = ajuan, token) {
        console.log(data, "data")
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + token }),
            body: JSON.stringify({ status: false, detail_ajuan: data })
        });

        console.log("SUBMIT", ajuan)
        const json = await response.json();
        return json
    }

    return (
        <Fragment>
            <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                <BackButton />
                <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-black mb-4">Restock</h1>
                <SearchBar />
                <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                    <div className="grid grid-cols-3 border box-border border-black bg-amber-300 text-black items-center text-center font-semibold">
                        <h2>Nama</h2>
                        <h2>Stok</h2>
                        <h2>Jumlah Ajuan</h2>
                    </div>
                    {
                        console.log(data)
                    }
                    {data != null && data.map((barang) => {
                        return <BarangToko props={barang} ajuanSetter={handleAjuan} ajuanState={ajuan} />
                    })}
                    <div className="flex justify-center items-center md:justify-start">
                        <button className='group relative w-1/2 flex justify-center py-2 px-4 md:ml-6 mb-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-amber-400 mt-5' onClick={handleSubmit}>
                            Restock Barang
                        </button>
                    </div>
                    <SidebarKaryawan />
                </div>
                <Modal
                    props={ajuan}
                    isVisible={showModal} onClose={() => setShowModal(false)} />
            </div>
        </Fragment>
    )
}