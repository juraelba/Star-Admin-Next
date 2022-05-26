import React from "react";
import Image from "next/image";
import SpaceObjIcon from "../../assets/images/object.png";
import NFTIcon from "../../assets/images/nft.png";
import ArticleIcon from "../../assets/images/article.png";
import { ItemContainer, Name, IconContainer } from "./styles";

interface Props {
  id: string;
  name: string;
  icon: any;
}

const Item: React.FC<Props> = (props) => {
  const { name, icon } = props;
  return (
    <ItemContainer>
      <IconContainer>
        <Image src={icon} alt=":( Not Found" />
      </IconContainer>
      <Name>{name}</Name>
    </ItemContainer>
  );
};

export default Item;
