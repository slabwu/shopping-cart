import { Link, useLoaderData } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../App.jsx'

export async function loader({ params }) {
  return params.id
 }

export default function ProductPage() {
  const id = useLoaderData()
  const { products }  = useContext(ShopContext)
  const product = products[id]

  return (
    <div>
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <h3>{product.description}</h3>
      <h3>{product.category}</h3>
      <h3>{product.rating.rate} stars from {product.rating.count} people</h3>
      <img src={product.image} alt={product.title} />
      <div>
        <Link to='/cart'>Buy now</Link>
        <Link to='/'>Add to Cart</Link>
      </div>
    </div>
  )
}