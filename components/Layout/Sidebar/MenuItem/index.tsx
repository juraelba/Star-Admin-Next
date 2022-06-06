import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  ArrowContainer,
  ChildMenuContainer,
  MenuItemContainer,
  IconContainer,
  Label,
} from "./styles";
import { Route } from "../../../../types";

interface MenuProps {
  id: string;
  label: string;
  path: string;
  icon?: any;
  active?: boolean;
  children?: Route[];
  isChild?: boolean;
}

const MenuItem: React.FC<MenuProps> = ({ isChild = false, ...props }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleRedirect = (path: string) => {
    !props.children ? router.push(path) : setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") return router.pathname === path;
    return router.pathname.indexOf(path) > -1;
  };
  const active = isActive(props.path);

  return (
    <>
      <MenuItemContainer
        active={active}
        isChild={isChild}
        onClick={() => handleRedirect(props.path)}
      >
        {!isChild && (
          <IconContainer active={active}>
            <Image src={props.icon} width={24} height={24} alt=":( Not Found" />
          </IconContainer>
        )}
        <Label isChild={isChild} active={active}>
          {props.label}
        </Label>
        {props.children && (
          <ArrowContainer>
            <Image
              src="/assets/images/icons/sidebar/chevron-down.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </ArrowContainer>
        )}
      </MenuItemContainer>
      {props.children && (
        <ChildMenuContainer length={props.children.length} isOpen={isOpen}>
          {props.children.map((child: Route) => (
            <MenuItem isChild={true} key={child.id} {...child} />
          ))}
        </ChildMenuContainer>
      )}
    </>
  );
};

export default MenuItem;
