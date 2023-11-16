"use client";

import { Produto } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionContextType {
  produtos: Produto[];
  getProducts: (data: Produto) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

interface TransactionsProviderProps {
  children: ReactNode;
}
export const GlobalProvider = ({ children }: TransactionsProviderProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  async function getProducts() {
    const res = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
    );

    const produtos = await res.json();
    setProdutos(produtos.products);

    return produtos;
  }
  useEffect(() => {
    getProducts();
    console.log(produtos);
  }, []);
  return (
    <TransactionContext.Provider value={{ getProducts, produtos }}>
      {children}
    </TransactionContext.Provider>
  );
};
