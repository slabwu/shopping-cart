import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../App.jsx'
import Counter from '../components/Counter/Counter.jsx'
import '../index.css'

export default function ProductPage() {
  const [ count, setCount ] = useState(1)
  const { products, addToCart }  = useContext(ShopContext)
  const { id } = useParams()
  const product = products[id - 1]

  let rating = Math.floor(product.rating.rate)
  let stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)
 
  return (
    <main className='productPage'>
      <img src={product.image} alt={product.title} />
      <div className='productInfo'>
        <h2>{product.title}</h2>
        <h4>{product.category}</h4>
        <h4>{stars} {product.rating.count}</h4>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <div>
            <Counter count={count} setCount={setCount} />
            <Link onClick={() => addToCart(product, count)} to='/cart' className='purchase'>Buy now</Link>
            <button onClick={() => addToCart(product, count)} className='purchase'>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}