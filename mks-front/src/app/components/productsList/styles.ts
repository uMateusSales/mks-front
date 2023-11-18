"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  background-color: #f9f9f9;
  display: grid;

  @media (max-width: 500px) {
    margin: 14px 62px;
    margin-top: 14px;
    margin-bottom: 14px;
    margin-left: 62px;
    margin-right: 62px;
    grid-template-columns: 1fr;
    gap: 18px;
  }

  gap: 20px;

  @media (min-width: 768px) {
    background-color: #f9f9f9;
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

  @media (max-width: 768px) {
    margin: 14px 62px;
    width: 250.495px !important;
    height: 328px !important;
  }
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
  @media (max-width: 600px) {
    width: 127.803px;
    height: 158.821px;
  }
`;

export const TituloProduto = styled.p`
  width: 124px;
  height: 38px;
  color: #2c2c2c;
  font-family: Montserrat;
  text-align: center;
  @media (max-width: 600px) {
    padding-top: 14px;
    padding-left: 16px;
  }
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`;

export const PrecoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #373737;

  padding: 4px;
`;
export const PrecoText = styled.p`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;

  @media (max-width: 600px) {
    padding: 5px 10.5px;
    flex-shrink: 0;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
  }
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
`;
export const ProdutoDesc = styled.p`
  color: #2c2c2c;

  font-family: Montserrat;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  @media (max-width: 500px) {
    width: 221.064px;
    height: 28.784px;
    flex-shrink: 0;
    color: #2c2c2c;

    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
  }
`;

export const ComprarContainer = styled.button`
  min-width: 218px;
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
