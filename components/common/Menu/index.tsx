import React from "react";
import Image from "next/image";
import { Action } from "../../../types";
import { IconContainer, Label, MenuContainer, MenuItem } from "./styles";

interface MenuProps {
  label?: string;
  actions: Action[];
}

const Menu: React.FC<MenuProps> = ({ actions, label }) => {
  return (
    <MenuContainer>
      {label && <Label>{label}</Label>}
      {actions.map((action: Action) => (
        <MenuItem onClick={() => action.action()}>
          {action.icon && (
            <IconContainer>
              <Image width={24} height={24} src={action.icon} />
            </IconContainer>
          )}
          {action.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
