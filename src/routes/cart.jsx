import { useContext } from 'react'
import { ShopContext } from '../App.jsx'

export default function Cart() {
  const { cartItems }  = useContext(ShopContext)

  return (
    <div>
      <h2>This is the cart.</h2>
      {cartItems && Object.keys(cartItems).map(id =>
        <div key={id}>
          <p>{cartItems[id].title}</p>
          <p>{cartItems[id].price}</p>
          <p>{cartItems[id].quantity}</p>
        </div>
      )}
    </div>
  )
}