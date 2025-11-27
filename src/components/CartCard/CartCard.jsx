import styles from './CartCard.module.css'
import Counter from '../Counter/Counter'
import { useState, useContext } from 'react'
import { ShopContext } from '../../App'

export default function CartCard({ product }) {
    const [ count, setCount ] = useState(product.quantity)
    const { changeCartQuantity, deleteCartItem }  = useContext(ShopContext)

    function updateCount(newCount) {
        setCount(newCount)
        changeCartQuantity(product.id, newCount)
    }

    return (
        <div className={styles.card}>
          <p>{product.title}</p>
          <p>{product.quantity}</p>
          <p>${product.price * product.quantity}</p>
          <Counter count={ count } setCount={ updateCount } />
          <button onClick={() => deleteCartItem(product.id)}>✕</button>
        </div>
    )
}