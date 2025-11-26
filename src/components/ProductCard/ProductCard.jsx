import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <h3>{product.title}</h3>
        </div>
    )
}