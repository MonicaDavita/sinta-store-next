export default function BarangToko({props, transaksiSetter}){
    return (
        <button onClick={() => transaksiSetter(props.id)} className="mt-2 px-3 box-border border border-black bg-amber-400 focus:bg-amber-600 text-black focus:text-white text-bold">
            <h3>{props.nama}</h3>
        </button>
    )
}

// make a card component using tailwindcss