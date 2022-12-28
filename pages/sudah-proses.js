import React from "react";
import BackButton from "./components/backButton"

export default function sudahProses(){
    return(
        <div className="grid grid-rows-3 mt-20">
           <div className="flex justify-start"><BackButton /></div> 
            <h1 className="grid justify-center items-center text-2xl mx-12 font-bold text-center">
            Karyawan sudah diberitahu untuk segera mengambil barang
            </h1>
            <div className="grid justify-center items-center"><img src="sudahProses.png" className="w-40 h-48"></img></div>
        </div>
    )
}