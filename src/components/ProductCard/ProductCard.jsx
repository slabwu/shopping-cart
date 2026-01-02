import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    let rating = Math.floor(product.rating.rate)
    let stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)

    return (
        <>
            <Link to={`product/${product.id}`} className={styles.card}>
                <img src={product.image} alt={product.title} />
                
                <h2>{product.title}</h2>
                <h3><span>{stars}</span> {product.rating.count}</h3>
                <h4>${product.price}</h4>
            </Link>
        </>
    )
}