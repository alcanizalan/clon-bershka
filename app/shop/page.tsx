import Header from "../components/Header"
import Link from "next/link"

export default function Shop(){
    return (
        <>
            <Header />
            <section className="">
                <p>Tienda</p>
                <Link href="/shop/detailedproduct"><button>Ir a Producto</button></Link>
            </section>
        </>
    )
}