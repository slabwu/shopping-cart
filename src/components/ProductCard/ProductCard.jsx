import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    return (
        <Link to={`product/${product.id}`} className={styles.card}>
            <h3>{product.title}</h3>
        </Link>
    )
}