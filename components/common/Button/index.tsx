import React from "react";
import Image from "next/image";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  color?: "success" | "warning" | "light";
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "large" | "small";
  children: React.ReactNode;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  color = "light",
  onClick,
  size = "large",
  children,
  style,
}) => {
  return (
    <ButtonContainer
      onClick={(e) => onClick(e)}
      color={color}
      size={size}
      style={style}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
