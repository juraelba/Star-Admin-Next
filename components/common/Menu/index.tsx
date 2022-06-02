import React from "react";
import Image from "next/image";
import { Action } from "../../../types";
import { IconContainer, MenuContainer, MenuItem } from "./styles";

interface MenuProps {
  actions: Action[];
}

const Menu: React.FC<MenuProps> = ({ actions }) => {
  return (
    <MenuContainer>
      {actions.map((action: Action) => (
        <MenuItem onClick={() => action.action()}>
          {action.icon && (
            <IconContainer>
              <Image src={action.icon} />
            </IconContainer>
          )}
          {action.label}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;
