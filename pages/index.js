import Link from 'next/link'
import LoginPage from './Login'
import HomeAdmin from './home'

export default function Index() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
    <LoginPage />
    <Link href="/home" element={<HomeAdmin />}></Link>
    </div>
  </div>
  );
}
