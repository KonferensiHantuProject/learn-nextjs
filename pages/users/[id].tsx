import { useRouter } from "next/router"

export default function UserDetail() {
  // Memanggil Router
  const router = useRouter();

  // Mendapatkan Query (id)
  const { id } = router.query;
  
  return (
    <div>
        <p>Halaman User Detail {' '}{id}{' '}</p>
    </div>
  )
}
