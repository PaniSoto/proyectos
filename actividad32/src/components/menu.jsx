import Link from "next/link";
function Menu() {
    return (
        <div>
            <nav className="bg-blue-700 text-white">
                <ul className='flex justify-between items-center h-20 mx-10'>
                    <div className="flex gap-4">
                        <li><Link href="/">Inicio</Link></li>
                        <li><Link href="/tienda">Tienda</Link></li>
                    </div>
                    <div className="flex gap-4">
                        <li><Link href="/acerca">Acerca de...</Link></li>
                        <li><Link href="/registro">Registrar</Link></li>
                    </div>


                </ul>
            </nav>

        </div>

    );
}
export default Menu