import React from "react";
import Image from "next/image";
import FilterIcon from "../../../assets/images/icons/filter.svg";
import ArrowDownIcon from "../../../assets/images/icons/chevron-down.svg";
import { FilterContainer, ArrowContainer, Value } from "./styles";

const Filter: React.FC = () => {
  return (
    <FilterContainer>
      <Image src={FilterIcon} width={24} height={24} alt=":( Not Found" />
      <Value>All</Value>
      <ArrowContainer>
        <Image src={ArrowDownIcon} width={24} height={24} alt=":( Not Found" />
      </ArrowContainer>
    </FilterContainer>
  );
};

export default Filter;
