import React, { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import Menu from "../Menu";
import FilterIcon from "../../../assets/images/icons/filter.svg";
import ArrowDownIcon from "../../../assets/images/icons/chevron-down.svg";
import {
  ArrowContainer,
  FilterContainer,
  MenuContainer,
  Value,
  Selector,
} from "./styles";
import { Action } from "../../../types";

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const actions: Action[] = [
    {
      id: 1,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 2,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 3,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 4,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
    {
      id: 5,
      label: "Placeholder",
      action: handleClose,
      icon: "/assets/images/icons/star.svg",
    },
  ];

  return (
    <FilterContainer>
      <Selector onClick={handleToggle}>
        <Image src={FilterIcon} width={24} height={24} alt=":( Not Found" />
        <Value>All</Value>
        <ArrowContainer>
          <Image
            src={ArrowDownIcon}
            width={24}
            height={24}
            alt=":( Not Found"
          />
        </ArrowContainer>
      </Selector>
      {isOpen && (
        <OutsideClickHandler onOutsideClick={handleClose}>
          <MenuContainer>
            <Menu actions={actions} label="Consellation" />
          </MenuContainer>
        </OutsideClickHandler>
      )}
    </FilterContainer>
  );
};

export default Filter;
