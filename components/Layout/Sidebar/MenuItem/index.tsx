import React from "react";
import Image from "next/image";
import Router from "next/router";
import { MenuItemContainer, IconContainer, Label } from "./styles";

interface MenuProps {
  id: string;
  label: string;
  path: string;
  icon: any;
  active: boolean;
}

const MenuItem: React.FC<MenuProps> = (props) => {
  const handleRedirect = (path: string) => {
    Router.push(path);
  };
  return (
    <MenuItemContainer
      active={props.active}
      onClick={() => handleRedirect(props.path)}
    >
      <IconContainer active={props.active}>
        <Image src={props.icon} width={24} height={24} alt=":( Not Found" />
      </IconContainer>
      <Label active={props.active}>{props.label}</Label>
    </MenuItemContainer>
  );
};

export default MenuItem;
