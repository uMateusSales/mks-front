import { json } from "stream/consumers";
import ProductList from "../components/productsList/ProductList";
import { ProductGrid } from "../components/productsList/styles";

export default async function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <ProductList />
    </main>
  );
}
