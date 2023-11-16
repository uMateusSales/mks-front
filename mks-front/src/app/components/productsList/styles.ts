"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  border: 1px;
  border-color: black;
  background-color: beige;
  gap: 20px;
  @media (min-width: 768px) {
    background-color: burlywood;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 220px 250px;
  }
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`;

export const NameAndPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
`;
export const ImgBox = styled.div`
  display: flex;
  align-self: center;
`;

export const TituloProduto = styled.p`
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

export const PrecoBox = styled.div`
  border-radius: 5px;
  background: #373737;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  padding: 4px;
`;

export const ProdutoDesc = styled.p`
  color: #2c2c2c;

  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
`;

export const ComprarContainer = styled.div`
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
`;
