"use client";

import { IProduto } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

interface GlobalContextType {
  produtos: IProduto[];
  getProducts: (data: IProduto) => Promise<void>;
}

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType
);

interface GlobalProviderProps {
  children: ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
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
    setTimeout(() => console.log(produtos), 2000);
  }, []);
  return (
    <GlobalContext.Provider value={{ getProducts, produtos }}>
      {children}
    </GlobalContext.Provider>
  );
};
