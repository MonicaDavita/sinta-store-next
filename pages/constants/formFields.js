const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Nama Toko",
        labelFor:"nama-toko",
        id:"nama",
        name:"toko",
        type:"toko",
        autoComplete:"toko",
        isRequired:true,
        placeholder:"Nama Toko"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const produkFields=[
    {
        labelText:"nama",
        labelFor:"nama",
        id:"nama",
        name:"nama",
        type:"text",
        autoComplete:"nama",
        isRequired:true,
        placeholder:"Nama"   
    },
    {
        labelText:"Harga",
        labelFor:"harga",
        id:"harga",
        name:"harga",
        type:"number",
        autoComplete:"harga",
        isRequired:true,
        placeholder:"Harga"   
    }
]
const karyawanFields=[
    {
        labelText:"Nama Karyawan",
        labelFor:"nama karyawan",
        id:"nama",
        name:"nama",
        type:"text",
        autoComplete:"nama",
        isRequired:true,
        placeholder:"Nama Karyawan"   
    },
    {
        labelText:"Nomor Telepon",
        labelFor:"nomor telepon",
        id:"no_telp",
        name:"no_telp",
        type:"Nomor Telepon",
        autoComplete:"Nomor Telepon",
        isRequired:true,
        placeholder:"Nomor Telepon"   
    },
    {
        labelText:"Alamat",
        labelFor:"alamat",
        id:"alamat",
        name:"alamat",
        type:"Alamat",
        autoComplete:"Alamat",
        isRequired:true,
        placeholder:"Alamat"   
    }
]
export {loginFields,signupFields, produkFields, karyawanFields}