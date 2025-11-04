import Header from "../components/Header"
import Link from "next/link"
import {products} from '../data/products'
import {Product } from '../types/product'
import Producto from '../components/Producto'
import Footer from '../components/Footer'

export default function Shop(){
    return (
        <>
            <Header />
            <section className="w-[100%] bg-red-200 flex gap-2">
                <p>Tienda</p>
                {
                    products.map((product: Product, key) => {
                        return (
                            <Link key={product.id} href={`./detailedproduct/${product.id}`}>
                                <Producto
                                id={product.id}
                                prenda={product.clothe}
                                nombre={product.name}
                                precio={product.price}
                                />
                            </Link>
                        );
                    })
                }
                <Link href="./detailedproduct"><button>Ir a Producto</button></Link>
            </section>
            <Footer />
        </>
    )
}