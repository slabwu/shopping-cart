import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    let rating = Math.floor(product.rating.rate)
    let stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)

    return (
        <>
            <div className={styles.card}>
                <Link to={`product/${product.id}`}>
                <img src={product.image} alt={product.title} />
                
                <h3>{product.title}</h3>
                <h2>{stars} {product.rating.count}</h2>
                <h2>${product.price}</h2>
                </Link>
            </div>
        </>
    )
}