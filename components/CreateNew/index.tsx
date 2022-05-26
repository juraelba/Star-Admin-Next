import React from "react";
import Item from "./Item";
import SpaceObjIcon from "../../assets/images/object.png";
import NFTIcon from "../../assets/images/nft.png";
import ArticleIcon from "../../assets/images/article.png";
import { CreateNewContainer, Title, Body } from "./styles";

interface Props {
  id: string;
  name: string;
  icon: any;
}

const CreateNew: React.FC = () => {
  const items: Props[] = [
    {
      id: "spaceobj",
      name: "Space Object",
      icon: SpaceObjIcon,
    },
    {
      id: "nft",
      name: "NFT Listing",
      icon: NFTIcon,
    },
    {
      id: "article",
      name: "News Article",
      icon: ArticleIcon,
    },
  ];
  return (
    <CreateNewContainer>
      <Title>Create New</Title>
      <Body>
        {items.map((item: Props) => (
          <Item key={item.id} {...item} />
        ))}
      </Body>
    </CreateNewContainer>
  );
};

export default CreateNew;
