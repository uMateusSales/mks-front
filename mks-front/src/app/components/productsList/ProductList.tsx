"use client";
import React, { useContext } from "react";
import {
  ComprarContainer,
  ImgBox,
  NameAndPrice,
  PrecoBox,
  ProductCard,
  ProductGrid,
  ProdutoDesc,
  TituloProduto,
} from "./styles";
import { TransactionContext } from "@/app/GlobalContext";
import Image from "next/image";
import ShoppingBagIcon from "../../../../public/ShoppingBagIcon";

const ProductList = () => {
  const { produtos } = useContext(TransactionContext);
  console.log(produtos);
  setTimeout(() => console.log(produtos), 2000);

  return (
    <>
      <ProductGrid>
        {produtos.map((produto) => (
          <ProductCard>
            <ImgBox>
              <Image
                width={127}
                height={138}
                alt={produto.name}
                src={produto.photo}
              />
            </ImgBox>
            <NameAndPrice>
              <TituloProduto>{produto.name}</TituloProduto>
              <PrecoBox>{produto.price}</PrecoBox>
            </NameAndPrice>

            <ProdutoDesc>{produto.description}</ProdutoDesc>
            <ComprarContainer>
              <ShoppingBagIcon />
            </ComprarContainer>
          </ProductCard>
        ))}
      </ProductGrid>
    </>
  );
};

export default ProductList;
