// import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

//  export function loader() {
//   const products = [
//     {
//       title: 'umbrella'
//     },
//     {
//       title: 'book'
//     }
//   ]
//   return products
//  }

const Shop = () => {
  const products = [{title:'cat'}]

  return (
    <div>
      <h2>This is the shop.</h2>
      <div>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;