import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard.jsx"

 export async function loader() {
  let products
  try {
    const response = await fetch('https://fakestoreapi.com/products')
    if (!response.ok) {
      throw new Error(`${response.status} error`)
    }
    products = await response.json()
  } catch(err) {
    console.log(err)
  } finally {
    return products
  }
 }

export default function Shop() {
  const products = useLoaderData()

  return (
    <div>
      <h2>This is the shop.</h2>
      <section data-testid='productSection'>
        {products.map(product => (
          <ProductCard product={product} key={product.title} />
        ))}
      </section>
    </div>
  )
}