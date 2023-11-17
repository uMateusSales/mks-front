import ProductList from "../components/productsList/ProductList";
import MainContainer from "../components/Main/MainContainer";

export default async function Home() {
  return (
    <>
      <MainContainer>
        <ProductList />
      </MainContainer>
    </>
  );
}
