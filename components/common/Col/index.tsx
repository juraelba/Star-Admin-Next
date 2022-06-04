import React, { Children } from "react";
import { ColContainer } from "./styles";

interface ColProps {
  size?: number;
  spacing?: number;
  children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ size = 12, spacing = 20, children }) => {
  return (
    <ColContainer size={size} spacing={spacing}>
      {children}
    </ColContainer>
  );
};

export default Col;
