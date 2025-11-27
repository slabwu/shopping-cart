import { useContext } from 'react'
import { ShopContext } from '../App.jsx'

export default function Cart() {
  const { cartItems }  = useContext(ShopContext)

  let total = 0
  Object.values(cartItems).forEach(item => {
    total += item.price * item.quantity
  })

  return (
    <div>
      <h2>This is the cart.</h2>
      {cartItems && Object.keys(cartItems).map(id =>
        <div key={id}>
          <p>{cartItems[id].title}</p>
          <p>{cartItems[id].quantity}</p>
          <p>${cartItems[id].price * cartItems[id].quantity}</p>
        </div>
      )}
      <div>Total: ${Math.round(total * 100) / 100}</div>
    </div>
  )
}