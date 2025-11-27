import styles from './Counter.module.css'

export default function Counter({ count, setCount }) {
    function decreaseCount() {
        if (count > 1) setCount(count - 1)
    }

    function increaseCount() {
        setCount(count + 1)
    }

    return (
        <div className={styles.counter}>
            <button onClick={decreaseCount}>-</button>
            <input type='number' value={count} onChange={e => setCount(Number(e.target.value))} />
            <button onClick={increaseCount}>+</button>
        </div>
    )
}