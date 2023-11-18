import ProductList from "../components/productsList/ProductList";
import MainContainer from "../components/Main/MainContainer";
import NavBar from "../components/nav/nav";

export default async function Home() {
  return (
    <>
      <MainContainer>
        <NavBar />
        <ProductList />
      </MainContainer>
    </>
  );
}
