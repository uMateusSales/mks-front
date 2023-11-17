"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
background-color: #F9F9F9;
  display: grid;
  grid-template-columns: 1fr;
 

  gap: 20px;
  @media (min-width: 768px) {
    background-color: #F9F9F9;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 220px 250px;
  }
`;
export const ProductCard = styled.div`
min-width: 218px;
min-height: 285px;
  display: grid;
  grid-template-columns: 1fr;
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
  justify-self: center;
`;

export const TituloProduto = styled.p`
width: 124px;
height: 38px;
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

export const ComprarContainer = styled.button`
max-width: 218px;
max-height: 31.907px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  align-items: center;
  border-radius: 0px 0px 8px 8px;
border-color: #0f52ba;
  background-color: #0f52ba;
`;
export const ComprarTexto = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;
