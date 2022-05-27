import React from "react";
import { RowContainer } from "./styles";

interface RowProps {
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return <RowContainer>{children}</RowContainer>;
};

export default Row;
