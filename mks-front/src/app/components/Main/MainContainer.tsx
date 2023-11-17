"use client";
import React, { ReactNode } from "react";
import { MainSection } from "./styles";

interface IMainContainer {
  children: ReactNode;
}
const MainContainer: React.FC<IMainContainer> = ({ children }) => {
  return <MainSection>{children}</MainSection>;
};

export default MainContainer;
