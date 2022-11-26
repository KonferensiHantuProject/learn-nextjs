import { useEffect } from "react"
import { useRouter } from "next/router";

export default function Custom404() {
    
    // Router Next js
    const router = useRouter();

    // Auto Redirect
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, []);

  return (
    <div>
        <h1 className="title-notfound">Oopps....</h1>
        <h1 className="title-notfound">Halaman yang Anda Cari Tidak Ditemukan</h1>
    </div>
  )
}
