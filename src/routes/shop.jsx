import { useLoaderData } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard.jsx'
import { useContext } from 'react'
import { ShopContext } from '../App.jsx'

export default function Shop() {
  const { products }  = useContext(ShopContext)

  return (
    <main class='shop'>
      <h2>This is the shop.</h2>
      <section data-testid='productSection'>
        {products && products.map(product => (
          <ProductCard product={product} key={product.title} />
        ))}
      </section>
    </main>
  )
}