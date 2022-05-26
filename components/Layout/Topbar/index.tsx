import React from "react";
import Image from "next/image";
import SearchField from "../../common/SearchField";
import Notification from "./Notification";
import { TopbarContainer, RightContainer } from "./styles";
import Avatar from "../../../assets/images/avatar.png";

const Topbar = () => {
  return (
    <TopbarContainer>
      <SearchField />
      <RightContainer>
        <Notification />
        <Image src={Avatar} alt=":( Not Found" />
      </RightContainer>
    </TopbarContainer>
  );
};

export default Topbar;
