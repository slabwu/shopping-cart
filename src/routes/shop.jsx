import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard.jsx"

 export function loader() {
  const products = [
    {
      title: 'umbrella'
    },
    {
      title: 'book'
    },
    {
      title: 'jacket'
    }
  ]
  return products
 }

export default function Shop() {
  const products = useLoaderData()

  return (
    <div>
      <h2>This is the shop.</h2>
      <div>
        {products.map(product => (
          <ProductCard product={product} key={product.title} />
        ))}
      </div>
    </div>
  )
}