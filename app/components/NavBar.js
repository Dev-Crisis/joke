import Link from "next/link";

export default function NavBar() {
    return (
      <header>
          <menu className="flex gap-4 justify-center items-center p-3 bg-red-700 text-white uppercase font-bold">
              <Link href="/">Accueil</Link>
              <Link href="/admin">Admin</Link>
          </menu>
      </header>
    );
}