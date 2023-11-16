"use client";
import React, { useContext } from "react";
import { ProductCard, ProductGrid } from "./styles";
import { Produto } from "@/types";
import { TransactionContext } from "@/app/GlobalContext";

const ProductList = () => {
  const { produtos } = useContext(TransactionContext);
  console.log(produtos);
  setTimeout(() => console.log(produtos), 2000);

  return (
    <>
      {produtos.map((produto) => (
        <ProductGrid>
          <ProductCard>
            <h1>{produto.name}</h1>
            <p>{produto.description}</p>
            <p>{produto.brand}</p>
            <p>{produto.price}</p>
          </ProductCard>
        </ProductGrid>
      ))}
    </>
  );
};

export default ProductList;
