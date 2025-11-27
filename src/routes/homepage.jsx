import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      <h2>This is the homepage.</h2>
      <Link to='shop'>Go to shop</Link>
    </div>
  )
}