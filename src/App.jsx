import { Outlet, NavLink } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
  changeCartQuantity: () => {},
  deleteCartItem: () => {}
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

  function addToCart(product, count) {
    setCartItems({
        ...cartItems, 
        [product.id]: {
          title: product.title,
          price: product.price,
          quantity: (product.id in cartItems) ? cartItems[product.id].quantity + count : count,
          id: product.id
        }
      }
    )
  }

  function changeCartQuantity(id, count) {
    setCartItems({
        ...cartItems, 
        [id]: {
          ...cartItems[id],
          quantity: count
        }
      }
    )
  }

  function deleteCartItem(id) {
    const { [id]: _, ...items } = cartItems
    setCartItems(items)
  }

  let cartCount = 0
  Object.values(cartItems).forEach(item => {
    cartCount += item.quantity
  })

  return (
    <ShopContext value={{ products, cartItems, addToCart, changeCartQuantity, deleteCartItem }}>
      <header>
        <h1>Header</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='shop'>Shop</NavLink>
        <NavLink to='cart'>Cart {`(${cartCount})`}</NavLink>
      </header>
      <Outlet />
    </ShopContext>
  )
}

export default App
