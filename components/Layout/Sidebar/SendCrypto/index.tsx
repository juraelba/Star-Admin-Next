import React from "react";
import Image from "next/image";
import { SendCryptoContainer, CloseButton, Typography, Button } from "./styles";
import CloseIcon from "../../../../assets/images/icons/remove.svg";

const SendCrypto: React.FC = () => {
  return (
    <SendCryptoContainer>
      <CloseButton>
        <Image src={CloseIcon} alt=":( Not Found" />
      </CloseButton>
      <Typography>Send Cryto to An Email Address</Typography>
      <Button>Send Now</Button>
    </SendCryptoContainer>
  );
};

export default SendCrypto;
