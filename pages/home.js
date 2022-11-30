import Sidebar from "./components/sidebar";

export default function homeAdmin() {
    return (
        
        <div className="min-h-full h-screen justify-right py-6 sm:ml-40 lg:ml-60 mt-10">
            <div className="max-w-md w-full space-y-6">
                <h3 className="ml-6 mt-6 text-justify text-2xl font-extrabold text-amber-700">
                    Selamat datang,
                </h3>
                <h2 className="ml-6 text-justify text-3xl font-extrabold text-amber-700">
                    Admin Sinta
                </h2>
                <h4 className="ml-6 mt-8 text-justify text-2xl font-bold text-black">
                    Ajuan Restock
                </h4>
            </div>
            <div className="md:ml-3 pt-3 pb-3 text-justify text-1xl font-bold max-w-md w-full divide-y divide-slate-300">
                <div className=" bg-slate-300 pt-3 pb-3">
                    <h4 className="ml-6 text-slate-900">
                        Toko
                    </h4>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2" >
                    <h4 className="text-justify-left"> Kolam 2 </h4>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl">
                        Lihat
                    </button>
                </div>
                <div className="ml-6 mr-10 grid-cols-2 flex justify-between pt-2 mb-2">
                    <h4> Kolam 3 </h4>
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 pt-1 pb-1 pr-3 pl-3 rounded-lg text-white text-0.5xl">
                        Lihat
                    </button>
                </div>
            </div>
            <Sidebar />
        </div>
    )
}