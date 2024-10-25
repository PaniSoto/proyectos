
import Link from "next/link";
import { menu, slug } from '@/lib/utils'


const classlink = "bg-green-200 mb-1 rounded-2xl p-2"

function MenuPrincipal() {

    return (
        <div className="w-[300px] bg-blue-200 p-3 h-full overflow-y-auto">

            <Link className={`${classlink} block`} href={slug(menu[0])}>{menu[0]}</Link>

            <details>
                <summary className={`${classlink}`}>
                    <Link href={slug(menu[1])}>{menu[1]}</Link>
                </summary>

                <details>
                    <summary className={`${classlink} ml-2`}>
                    <Link href={slug(menu[2])}>{menu[2]}</Link>
                    </summary>
                    <Link className={`${classlink} ml-4 block`} href={slug(menu[3])}>{menu[3]}</Link>
                    <Link className={`${classlink} ml-4 block`} href={slug(menu[4])}>{menu[4]}</Link>
                </details>

               <details>
                <summary className={`${classlink} ml-2`}>
                <Link href={slug(menu[5])}>{menu[5]}</Link>
                </summary>
                
                <Link className={`${classlink} ml-4 block`} href={slug(menu[6])}>{menu[6]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[7])}>{menu[7]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[8])}>{menu[8]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[9])}>{menu[9]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[10])}>{menu[10]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[11])}>{menu[11]}</Link>
                <Link className={`${classlink} ml-4 block`} href={slug(menu[12])}>{menu[12]}</Link>

               </details>
                
                
                
                <Link className={`${classlink} ml-2 block`} href={slug(menu[13])}>{menu[13]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[14])}>{menu[14]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[15])}>{menu[15]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[16])}>{menu[16]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[17])}>{menu[17]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[18])}>{menu[18]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[19])}>{menu[19]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[20])}>{menu[20]}</Link>
            </details>

            <details>
                <summary className={`${classlink} `}>
                    <Link href={slug(menu[21])}>{menu[21]}</Link>
                </summary>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[22])}>{menu[22]}</Link>
                <Link className={`${classlink} ml-2 block`} href={slug(menu[23])}>{menu[23]}</Link>
            </details>

            <Link className={`${classlink} block`} href={slug(menu[24])}>{menu[24]}</Link>

        </div>
    );
}

export default MenuPrincipal;