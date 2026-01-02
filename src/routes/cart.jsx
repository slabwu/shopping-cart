import { useContext } from 'react'
import { ShopContext } from '../App.jsx'
import CartCard from '../components/CartCard/CartCard.jsx'

export default function Cart() {
  const { cartItems }  = useContext(ShopContext)

  let round = (price) => price.toFixed(2)
  let itemsExist = Boolean(Object.keys(cartItems).length)

  let total = 0
  Object.values(cartItems).forEach(item => {
    total += item.price * item.quantity
  })

  let vat = total * 0.06
  let shipping = total ? 10 : 0
  
  return (
    <main className='cartPage'>
      <div className='purchases'>
        <h2>This is the cart.</h2>
        { !itemsExist && <p>No items in cart.</p> }
        {itemsExist && Object.keys(cartItems).map(id =>
          <CartCard key={id} product={cartItems[id]} />
        )}
      </div>
      <div className='payment'>
        {itemsExist && 
        <>
          <div>
            <span>Subtotal</span>
            <span>${round(total)}</span>
          </div>
          <div>
            <span>VAT</span>
            <span>${round(vat)}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>${round(shipping)}</span>
          </div>
          <div>
            <span>Total</span>
            <span>${round(total + vat + shipping)}</span>
          </div>
          <button onClick={() => alert('Thank you!')} className='checkout'>Checkout</button>
        </> }
      </div>
    </main>
  )
}