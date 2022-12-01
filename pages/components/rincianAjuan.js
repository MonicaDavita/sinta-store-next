import React from "react";

function rincianAjuan() {
  return(
    <div>
        <h1 className="text-center font-bold mb-8 mt-8 text-lg"> Rincian Ajuan </h1>
        <table className="table-auto md:w-[580px] pt-2 pl-6 mb-6 text-left">
            <thead>
                <tr  className="bg-slate-400">
                    <th>Nama</th>
                    <th>Jumlah</th>
                </tr>
            </thead>
            <tbody className="text-left">
                <tr className="border-b border-amber-700 mb-8">
                    <td>Pop Mie Ayam</td>
                    <td>2</td>
                </tr>
                <tr className="border-b border-amber-700 mb-8">
                    <td>Pop Mie Ayam Bwg</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
        <div className="text-center items-center mt-24 mb-10">
            <h1>Sudah Diproses?</h1>
            <div className="grid-cols-2 flex justify-center mt-3">
                <button type="button" className="bg-green-500 hover:bg-green-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl mr-3">Iya</button>
                <button type="button" className="bg-red-500 hover:bg-red-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl ml-3">Tidak</button>
            </div>
        </div>
    </div>
  )
}

export default rincianAjuan;