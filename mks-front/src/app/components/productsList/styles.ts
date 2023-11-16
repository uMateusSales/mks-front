"use client";
import styled from "styled-components";

export const ProductGrid = styled.div`
  display: flex;

  flex-direction: column;
  border: 1px;
  border-color: black;
  background-color: beige;
  @media (min-width: 768px) {
    background-color: burlywood;

    padding: 220px 250px;
  }
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;
