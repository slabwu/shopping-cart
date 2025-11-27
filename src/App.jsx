import { Outlet, NavLink } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {}
})

async function fetchProducts() {
      let productData
      try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if (!response.ok) {
          throw new Error(`${response.status} error`)
        }
        productData = await response.json()
      } catch(err) {
        console.log(err)
      } finally {
        setProducts(productData)
      }
}

function App() {
  const [cartItems, setCartItems] = useState({})
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    async function fetchProducts() {
      let productData
      try {
        const response = await fetch(`https://fakestoreapi.com/products`)
        if (!response.ok) {
          throw new Error(`${response.status} error`)
        }
        productData = await response.json()
      } catch(err) {
        console.log(err)
      } finally {
        setProducts(productData)
      }
    }

    fetchProducts()
  }, [])

  function addToCart(product) {
    setCartItems({
        ...cartItems, 
        [product.id]: {
          title: product.title,
          price: product.price,
          quantity: (product.id in cartItems) ? cartItems[product.id].quantity + 1 : 1
        }
      }
    )
  }

  let cartCount = 0
  Object.values(cartItems).forEach(item => {
    cartCount += item.quantity
  })

  return (
    <ShopContext value={{ products, cartItems, addToCart }}>
      <header>
        <h1>Header</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='shop'>Shop</NavLink>
        <NavLink to='cart'>Cart {`(${cartCount})`}</NavLink>
      </header>
      <div>
        <Outlet />
      </div>
    </ShopContext>
  )
}

export default App
