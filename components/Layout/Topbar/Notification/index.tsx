import React from "react";
import Image from "next/image";
import NotificationIcon from "../../../../assets/images/icons/bell.svg";
import { NotificationContainer, Dot } from "./styles";

interface NotificationProps {
  active?: boolean;
}

const Notification: React.FC<NotificationProps> = ({ active = true }) => {
  return (
    <NotificationContainer>
      <Image src={NotificationIcon} alt=":( Not Found" />
      {active && <Dot />}
    </NotificationContainer>
  );
};

export default Notification;
