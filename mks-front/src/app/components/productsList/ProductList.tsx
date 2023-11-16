"use client";
import React, { useContext } from "react";
import { ProductGrid } from "./styles";
import { Produto } from "@/types";
import { TransactionContext } from "@/app/GlobalContext";

const ProductList = () => {
  const { produtos } = useContext(TransactionContext);
  console.log(produtos);
  return (
    <ProductGrid>
      {produtos.map((produto) => (
        <h1>{produto.name}</h1>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
