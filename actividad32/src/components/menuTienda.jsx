import Link from "next/link";
function menuTienda() {
   return(
    <aside class="p-5 bg-blue-700 text-white w-[200]">
        <ul>
            <li><Link href="/tienda/electronica">Electrónica</Link></li>
            <li><Link href="/tienda/decoracion">Decoración</Link></li>
            <li><Link href="/tienda/mobiliario">Mobiliario</Link></li>
            <li><Link href="/tienda/libros"></Link>Libros</li>
        </ul>
    </aside>
   )
}
export default menuTienda

 // return (
    //     <div>
    //         <nav className="bg-blue-700 text-white">
    //             <ul>
    //                 <div className="flex gap-4">
    //                     <li><Link href="/">Inicio</Link></li>
    //                     <li><Link href="/tienda">Tienda</Link></li>
    //                 </div>
    //                 <div className="flex gap-4">
    //                     <li><Link href="/acerca">Acerca de...</Link></li>
    //                     <li><Link href="/registro">Registrar</Link></li>
    //                 </div>


    //             </ul>
    //         </nav>

    //     </div>

    // );