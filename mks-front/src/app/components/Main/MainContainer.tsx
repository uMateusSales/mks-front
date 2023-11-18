"use client";
import React, { ReactNode } from "react";
import { MainSection } from "./styles";
import NavBar from "../nav/nav";

interface IMainContainer {
  children: ReactNode;
}
const MainContainer: React.FC<IMainContainer> = ({ children }) => {
  return <MainSection>{children}</MainSection>;
};

export default MainContainer;
