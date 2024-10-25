import Link from "next/link";


function Nav() {
    return (
        <div className="p-4 text-right">
            <Link href={'/'} className="text-2xl pd-2 rounded-l-full text-blue-800 mr-2">Anterior</Link>
            <Link href={'/'} className="text-2xl pd-2 rounded-l-full text-blue-300 mr-2">Siguiente</Link>
        </div>

    );
}

export default Nav;
