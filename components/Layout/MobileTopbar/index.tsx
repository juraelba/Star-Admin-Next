import React from "react";
import Image from "next/image";
import {
  Count,
  MenuButton,
  MobileTopbarContainer,
  Notification,
} from "./styles";

interface MobileTopbarProps {
  onOpen: () => void;
}

const MobileTopbar: React.FC<MobileTopbarProps> = ({ onOpen }) => {
  return (
    <MobileTopbarContainer>
      <MenuButton onClick={onOpen}>
        <Image
          src="/assets/images/icons/bugger.svg"
          width={32}
          height={32}
          alt=":( Not Found"
        />
      </MenuButton>
      <Image
        src="/assets/images/logo.svg"
        width={164}
        height={30}
        alt=":( Not Found"
      />
      <Notification>
        <Count>3</Count>
        <Image
          src="/assets/images/icons/notification.svg"
          width={24}
          height={24}
          alt="( Not Found"
        />
      </Notification>
    </MobileTopbarContainer>
  );
};

export default MobileTopbar;
