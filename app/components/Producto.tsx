import Image from 'next/image'

interface ProductoProps  {
  id: string;
  prenda: string;
  nombre: string;
  precio: number;
}

export default function Producto({id, prenda, nombre, precio }: ProductoProps){
      return(
        <article className='border w-sm'>
          <div>
            <Image href="" alt={nombre}/>
          </div>
            <h2>{nombre}</h2>
            <span>{precio}</span>
        </article>
      )
}