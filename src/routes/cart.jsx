import { useContext, useState } from 'react'
import { ShopContext } from '../App.jsx'
import CartCard from '../components/CartCard/CartCard.jsx'

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
        <CartCard key={id} product={cartItems[id]} />
      )}
      {cartItems && <>
        <div>Total: ${Math.round(total * 100) / 100}</div>
        <button onClick={() => alert('Thank you!')}>Checkout</button>
      </>}
    </div>
  )
}