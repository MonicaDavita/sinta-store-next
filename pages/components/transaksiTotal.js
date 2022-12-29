export default function TransaksiTotal({props}){
    return (
        <div className="grid grid-cols-4 border box-border text-black">
            <h2 className="ml-2">{props.nama_toko}</h2>
            <h2 className="ml-2">{props.total}</h2>
        </div>
    )
}
// console log a string

