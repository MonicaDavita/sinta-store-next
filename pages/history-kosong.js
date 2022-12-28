import React, { Fragment } from "react";
import Router from "next/router";

export default function historyKosong() {
    return (

            <div className="min-h-full h-screen justify-start py-6 sm:ml-40 lg:ml-60 mt-10">
                <div className="ml-6">
                    <button onClick={() => Router.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-rows-2 justify-center mt-40 place-items-center">
                    <img src="sad face.png"></img>
                    <h2 className="font-semibold text-center text-xl">Belum ada Transaksi</h2>
                </div>
            </div>

    );
}