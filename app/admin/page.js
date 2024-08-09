import NavBar from "../components/NavBar";
import Link from "next/link";

const Admin = () => {
  return (
      <>
          <NavBar/>
      <main className="p-4 flex flex-col items-start justify-center gap-5">
        <h1 className="text-3xl">Admin - Dashboard</h1>
        <Link href="/admin/create" className="px-5 py-3 rounded bg-red-600 hover:bg-red-700 transition-all duration-300 text-white">Create</Link>
        <Link href="/admin/show" className="px-5 py-3 rounded bg-red-600 hover:bg-red-700 transition-all duration-300 text-white">Show</Link>
      </main>
      </>
  )
}

export default Admin;
