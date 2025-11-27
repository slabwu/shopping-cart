import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../App.jsx'
import Counter from '../components/Counter/Counter.jsx'

export default function ProductPage() {
  const [ count, setCount ] = useState(1)
  const { products, addToCart }  = useContext(ShopContext)
  const { id } = useParams()
  const product = products[id - 1]

  return (
    <div>
      <h2>{product.title}</h2>
      <h3>${product.price}</h3>
      <h3>{product.description}</h3>
      <h3>{product.category}</h3>
      <h3>{product.rating.rate} stars from {product.rating.count} people</h3>
      <img src={product.image} alt={product.title} />
      <div>
        <Counter count={count} setCount={setCount} />
        <Link onClick={() => addToCart(product)} to='/cart'>Buy now</Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}