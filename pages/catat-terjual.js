import React from "react";
import Modal from "./components/modalTerjual";
import { Fragment } from "react";
import BackButton from "./components/backButton";
import SidebarKaryawan from "./components/sidebar-karyawan";
import SearchBar from "./components/searchBar";
import { useState, useEffect } from "react";
import BarangToko from "./components/BarangToko";
import { useRouter } from "next/router";

export default function CatatTerjual( {namaToko} ) {
    var token
    const [query, setQuery] = useState("")
    const [authToken, setAuthToken] = useState(null)
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [catat, setCatat] = useState([])
    const router = useRouter()
    // const finalSlashIndex = router.asPath.lastIndexOf('/')
    // const previousPath = router.asPath.slice(0, finalSlashIndex)

    useEffect(() => {
        token = window.localStorage.getItem("token")
        setAuthToken(token)
        // console.log(token, "token")
        if (token == null){
            // Router.push('/')
        }
        else {
            setLoading(true)
            async function postData(url = 'https://sinta.gdlx.live/stok') {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
                    // headers: new Headers({ 'authorization': "Bearer " + token }),
                });
        
                const json = await response.json();
                console.log(json, "ini di catat terjual")
                // console.log(json)

                return json
            }
        var response = postData()
        response.then(res => {
            // console.log(res.data.daftar_stok)
            setData(res.data.daftar_stok)
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

    const handleCatat = (childAjuan) => {
        var buffer = catat
        changeJumlahIfKeyValueExist("produk_id", childAjuan.produk_id, buffer, childAjuan.jumlah)
        // console.log(buffer, "buffer")
        setCatat(!checkKeyValueExist("produk_id", childAjuan.produk_id, catat) ? [...catat, childAjuan] : buffer)

    }

    const handleSubmit = (e) => {
        setShowModal(true)
        // postAjuan('https://sinta.gdlx.live/transaksi', catat, authToken)
    }

    async function postAjuan(url = 'https://sinta.gdlx.live/transaksi', data = catat, token ) {
        // console.log(data)
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + token }),
            body: JSON.stringify({ detail_transaksi: data })
        });
        const json = await response.json();
        return json
    }
    // var response = postAjuan()
    // response.then(res => {
    //     // console.log(res)
    // })



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
                <BackButton />
                <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-black mb-4">Catat Terjual</h1>
                <SearchBar querySetter={setQuery} query={query}/>
                <div className="grid grid-rows-3 md:justify-start sm:justify-center position mt-4 md:ml-6">
                    <div className="grid grid-cols-3 border box-border border-black bg-amber-300 text-black items-center text-center font-semibold">
                        <h2>Nama</h2>
                        <h2>Stok</h2>
                        <h2>Terjual</h2>
                    </div>
                    {/* {console.log(data.data)} */}
                    {data && data.map((barang) => {
                        if(barang.jumlah>0 && barang.produk.nama.replace(/\s/g, "").toLowerCase().includes(query.replace(/\s/g, "").toLowerCase())) return <BarangToko props={barang} ajuanSetter={handleCatat} ajuan={false} />
                        else console.log(barang.produk.nama.replace(/\s/g, ""), " vs ", query.replace(/\s/g, ""))
                    })}
                    {
                        !data &&
                        <div>
                            Kosong
                        </div>
                    }
                </div>
                <div className="flex justify-center items-center md:justify-start">
                    <button className='group relative w-1/2 flex justify-center py-2 px-4 md:ml-6 mb-6 border border-transparent text-sm font-medium rounded-md text-white bg-amber-700 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-amber-400 mt-5' onClick={handleSubmit}>
                        Catat Terjual
                    </button>
                </div>
                <SidebarKaryawan />
                <Modal isVisible={showModal} props={catat} onClose={() => setShowModal(false)} />
            </div>
        </Fragment>
    )
}