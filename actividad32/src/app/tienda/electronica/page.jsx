import Link from "next/link";
function Electronica() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/tienda/electronica">Electronica</Link>
                </li>
                <li>
                    <Link href="/tienda/decoracion">Decoración</Link>
                </li>
                <li>
                    <Link href="/tienda/mobiliario">Mobiliario</Link>
                </li>
                <li>
                    <Link href="/tienda/libros">Libros</Link>
                </li>
            </ul>

                <h1 class="electronica">Electronica</h1>
            
        </div>
    );
}
export default Electronica;
