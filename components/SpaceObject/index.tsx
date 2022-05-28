import React from "react";
import Image from "next/image";
import Router from "next/router";
import { SpaceObject as SpaceObjectProps } from "../../types";
import {
  ActionContainer,
  Appreviation,
  AppreviationLabel,
  AppreviationValue,
  AvatarContainer,
  Body,
  Constellation,
  DeleteButton,
  DetailContainer,
  DetailInfo,
  EditButton,
  FormItem,
  Header,
  Label,
  SpaceObjectContainer,
  Title,
  Value,
} from "./styles";
import EditIcon from "../../assets/images/icons/edit.svg";
import TrashIcon from "../../assets/images/icons/trash.svg";

const SpaceObject: React.FC<SpaceObjectProps> = (props) => {
  const handleRedirect = () => {
    Router.push(`/objects/${props.id}/view`);
  };

  return (
    <SpaceObjectContainer onClick={handleRedirect}>
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
            <Constellation>{props.constellation}</Constellation>
            <Appreviation>
              <AppreviationLabel>Appreviation</AppreviationLabel>
              <AppreviationValue>{props.appreviation}</AppreviationValue>
            </Appreviation>
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
          <Label>Right Accession</Label>
          <Value>{props.rightAccession}</Value>
        </FormItem>
        <FormItem>
          <Label>Declination</Label>
          <Value>{props.declination}</Value>
        </FormItem>
        <FormItem>
          <Label>Stellar Constellation</Label>
          <Value>{props.stellarConstellation}</Value>
        </FormItem>
        <FormItem>
          <Label>BV Color</Label>
          <Value>{props.bvColor}</Value>
        </FormItem>
      </Body>
    </SpaceObjectContainer>
  );
};

export default SpaceObject;
