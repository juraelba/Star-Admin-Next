import React, { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import SearchField from "../../common/SearchField";
import Notification from "./Notification";
import Menu from "../../common/Menu";
import {
  MenuContainer,
  Profile,
  RightContainer,
  TopbarContainer,
} from "./styles";
import Avatar from "../../../assets/images/avatar.png";
import LogoutIcon from "../../../assets/images/icons/logout.svg";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);
  const actions = [
    {
      id: 1,
      label: "Log Out",
      icon: LogoutIcon,
      action: handleClose,
    },
  ];

  return (
    <TopbarContainer>
      <SearchField />
      <RightContainer>
        <Notification />
        <Profile>
          <Image
            src={Avatar}
            width={48}
            height={48}
            alt=":( Not Found"
            onClick={handleToggle}
          />
          {isOpen && (
            <OutsideClickHandler onOutsideClick={handleClose}>
              <MenuContainer>
                <Menu actions={actions} />
              </MenuContainer>
            </OutsideClickHandler>
          )}
        </Profile>
      </RightContainer>
    </TopbarContainer>
  );
};

export default Topbar;
