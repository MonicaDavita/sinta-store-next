import Link from 'next/link'
import LoginPage from './Login'
import HomeAdmin from './home'
import LihatToko from './lihatToko'
import LihatKaryawan from './karyawan'

export default function Index() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <LoginPage />
    <Link href="/home" element={<HomeAdmin />}></Link>
    <Link href="/toko" element={<LihatToko />}></Link>
    <Link href="/karyawan" element={<LihatKaryawan />}></Link>    
    
    </div>
  </div>
  );
}
