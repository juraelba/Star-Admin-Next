import React from "react";
import Image from "next/image";
import SearchIcon from "../../../assets/images/icons/search.svg";
import { SearchFieldContainer, IconContainer, Input } from "./styles";

const SearchField = () => {
  return (
    <SearchFieldContainer>
      <IconContainer>
        <Image src={SearchIcon} width={24} height={24} alt=":( Not Found" />
      </IconContainer>
      <Input placeholder="Search..." />
    </SearchFieldContainer>
  );
};

export default SearchField;
