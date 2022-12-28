import { karyawanFields } from "./constants/formFields.js";
import FormAction from "./components/FormAction.js";
import Input from "./components/Input.js";
import Sidebar from "./components/sidebar";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Router from "next/router";
import BackButton from "./components/backButton"


const fields = karyawanFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function TambahKaryawan() {
    
    var token
    const [karyawanState, setKaryawanState] = useState(fieldsState);
    
    useEffect(()=>{
        token = window.localStorage.getItem("token")
        if (token == null) {
            Router.push('/')
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () => {
        async function postData(url = 'https://sinta.gdlx.live/karyawan', data = { karyawanState }) {

            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(data.karyawanState)
            });
            console.log(karyawanFields)
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
                    <h1 className="mt-6 text-justify text-2xl font-extrabold text-slate-900">Tambah Karyawan</h1>

                    <form className='mt-8 space-y-6 ' onSubmit={handleSubmit}>
                        <div className='w-full'>
                            {
                                fields.map(field =>
                                    <Input
                                        key={field.id}
                                        labelText={field.labelText}
                                        labelFor={field.labelFor}
                                        id={field.id}
                                        name={field.name}
                                        type={field.type}
                                        isRequired={field.isRequired}
                                        placeholder={field.placeholder}
                                    />

                                )
                            }
                        </div>
                        <FormAction handleSubmit={handleSubmit} text='Tambah Karyawan' />

                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    )
}