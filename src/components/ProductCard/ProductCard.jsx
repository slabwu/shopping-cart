import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    return (
        <Link to='/' className={styles.card}>
            <h3>{product.title}</h3>
        </Link>
    )
}