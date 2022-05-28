import React from "react";
import Image from "next/image";
import Router from "next/router";
import { NFT as NFTProps } from "../../types";
import {
  ActionContainer,
  Abbreviation,
  AbbreviationLabel,
  AbbreviationValue,
  AvatarContainer,
  Body,
  Owner,
  DeleteButton,
  DetailContainer,
  DetailInfo,
  EditButton,
  FormItem,
  Header,
  Label,
  NFTContainer,
  Title,
  Value,
} from "./styles";
import EditIcon from "../../assets/images/icons/edit.svg";
import TrashIcon from "../../assets/images/icons/trash.svg";

const NFT: React.FC<NFTProps> = (props) => {
  const handleRedirect = () => {
    Router.push(`/nfts/${props.id}/view`);
  };

  return (
    <NFTContainer onClick={handleRedirect}>
      <Header>
        <DetailContainer>
          <AvatarContainer>
            <Image
              src={props.image}
              width={86}
              height={86}
              alt=":( Not Found"
            />
          </AvatarContainer>
          <DetailInfo>
            <Title>{props.name}</Title>
            <Owner>{props.owner}</Owner>
          </DetailInfo>
        </DetailContainer>
        <ActionContainer>
          <EditButton>
            <Image src={EditIcon} width={24} height={24} alt=":( Not Found" />
          </EditButton>
          <DeleteButton>
            <Image src={TrashIcon} width={24} height={24} alt=":( Not Found" />
          </DeleteButton>
        </ActionContainer>
      </Header>
      <Body>
        <FormItem>
          <Label>Ranking</Label>
          <Value>{props.ranking}</Value>
        </FormItem>
        <FormItem>
          <Label>Rarity</Label>
          <Value>{props.rarity}</Value>
        </FormItem>
        <FormItem style={{ width: "100%" }}>
          <Label>Link to ralated Space Object</Label>
          <Value>{props.link}</Value>
        </FormItem>
      </Body>
    </NFTContainer>
  );
};

export default NFT;
