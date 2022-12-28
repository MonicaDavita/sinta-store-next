import { useState, useEffect } from "react";
import Router from "next/router";
import BarangToko from "./BarangToko";

export default function modalRestock({ isVisible, ajuanSetter, count, onClose, props }) {
    if (!isVisible) return null;
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
    useEffect(() => {
        ajuanSetter && ajuan && ajuanSetter({ produk_id: props.produk_id, jumlah: count })
    }, [count])

    useEffect(() => {
        ajuanSetter && !ajuan && ajuanSetter({ produk_id: props.produk_id, jumlah: count, harga: props.produk.harga })
    }, [count])

    const handleSubmit = (e) => {
        if (authToken != null) {
            postAjuan('https://sinta.gdlx.live/ajuan', ajuan, authToken);
            < BarangToko ajuanSetter = { handleAjuan } ajuanState = { ajuan } />
            Router.push('/home')
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
        const json = await response.json();
        return json
    }
    const handleClose = (e) => {
        onClose();
    }

    const [visible, setVisible] = useState(isVisible);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="md:w-[600px] sm:w-[500px] flex flex-col justify-center">
                <button className="place-self-end text-white" onClick={() => onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="bg-white p-2 rounded text-black grid grid-rows-2 gap-0 justify-center place-items-center">
                    <h1 className="text-center">Ajukan Barang?</h1>
                    <table className="table-auto md:w-[580px] pt-2 pl-6 mb-6 text-left">
                        <thead>
                            <tr className="bg-slate-400">
                                <th>Nama</th>
                                <th>Jumlah</th>
                            </tr>
                        </thead>
                        <tbody className="text-left font-normal">
                            <tr>
                                <th>BARANG 1</th>
                                <th>BARANG 2</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="grid grid-cols-2 mt-6 mb-4 justify-center place-items-center">
                        <button type="button" className="bg-green-500 hover:bg-green-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl mr-3" onClick={handleSubmit}>Iya</button>
                        <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3" onClick={handleClose}>Tidak</button>
                    </div>
                </div>
            </div>

        </div>
    )
}