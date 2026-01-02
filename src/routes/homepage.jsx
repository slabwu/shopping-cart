import { Link } from 'react-router-dom'
import trolley from '../assets/trolley-cart.avif'

export default function Homepage() {
  return (
    <main class='homepage'>
      <img src={trolley} alt="Trolley Cart" />
      <h2>The best deals, always.</h2>
      <Link to='shop'>Go to shop</Link>
    </main>
  )
}