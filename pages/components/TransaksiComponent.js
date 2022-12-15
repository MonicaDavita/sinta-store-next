export default function TransaksiComponent({props}){
    return (
        <div className="grid grid-cols-4 border box-border text-black">
            <h2 className="ml-2">{props.produk.nama}</h2>
            <h2 className="ml-2">{props.jumlah}</h2>
            <h2 className="ml-2">{props.harga}</h2>
            <h2 className="ml-2">{(parseInt(props.harga)*parseInt(props.jumlah))}</h2>
        </div>
    )
}
// console log a string

