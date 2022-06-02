import React from "react";
import Item from "./Item";
import { CreateNewContainer, Title, Body } from "./styles";

interface Props {
  id: string;
  name: string;
  icon: any;
  path: string;
}

const CreateNew: React.FC = () => {
  const items: Props[] = [
    {
      id: "spaceobj",
      name: "Space Object",
      icon: "/assets/images/object.png",
      path: "/objects/new/create",
    },
    {
      id: "nft",
      name: "NFT Listing",
      icon: "/assets/images/nft.png",
      path: "/nfts/new/create",
    },
    {
      id: "article",
      name: "News Article",
      icon: "/assets/images/article.png",
      path: "/articles/new/create",
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
