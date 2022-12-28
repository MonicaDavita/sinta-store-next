import { produkFields } from "./constants/formFields.js";
import FormAction from "./components/FormAction.js";
import Input from "./components/Input.js";
import Sidebar from "./components/sidebar";
import Link from "next/link";
import { useState } from 'react';
import BackButton from "./components/backButton"


const fields = produkFields;
let fieldsState = {};
fields.forEach(field => {fieldsState[field.id] = null
    console.log(field.id)});

export default function TambahProduk() {
    const [produkState, setProdukState] = useState(fieldsState);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(produkState)
        authenticateUser();
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     authenticateUser();
    // }
    
    const handleChange = (e) => {
        console.log(fields,"fieldsState")
        console.log(produkState)
        setProdukState({ ...produkState, [e.target.id]: e.target.value })
    }
    //Handle Login API Integration here
    const authenticateUser = () => {
        async function postData(url = 'https://sinta.gdlx.live/produk', data = { produkState }) {

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json', 'authorization': "Bearer " + window.localStorage.getItem("token") }),
                body: JSON.stringify(data.produkState)
            });
            console.log(produkState)
            const json = await response.json();
            console.log(json)
            return json
        }
        var response = postData()
        //  response.then(res =>{
        //     if (res != null && res.status == true) {
        //         window.localStorage.setItem("token", res.data)
        //     }
        //  })
    }

    return (
        <>
            <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
               <BackButton />
                <h1 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">Admin Sinta</h1>
                <div className='flex flex-col justify-between items-center'>
                    <h1 className="mt-6 text-justify text-2xl font-extrabold text-slate-900">Tambah Produk</h1>

                    <form className='mt-8 space-y-6 ' onSubmit={handleSubmit}>
                        <div className='w-full'>
                        {
                                fields.map(field =>
                                    <Input
                                        key={field.id}
                                        handleChange={handleChange}
                                        defaultValue={fieldsState[field.id]}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />

                                )
                            }
                        </div>
                        <FormAction handleSubmit={handleSubmit} text='Tambah Produk' />

                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    )
}