import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import DeleteModal from "../DeleteModal";
import { SpaceObject as SpaceObjectProps } from "../../types";
import {
  ActionContainer,
  Abbreviation,
  AbbreviationLabel,
  AbbreviationValue,
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
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/objects/${props.id}/view`);
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    Router.push(`/objects/${props.id}/edit`);
  };
  const handleDelete = () => setIsOpen(true);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(true);
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
            <Abbreviation>
              <AbbreviationLabel>Abbreviation</AbbreviationLabel>
              <AbbreviationValue>{props.abbreviation}</AbbreviationValue>
            </Abbreviation>
          </DetailInfo>
        </DetailContainer>
        <ActionContainer>
          <EditButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEdit(e)}
          >
            <Image src={EditIcon} width={24} height={24} alt=":( Not Found" />
          </EditButton>
          <DeleteButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOpen(e)}>
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
          <Value>{props.stellar}</Value>
        </FormItem>
        <FormItem>
          <Label>BV Color</Label>
          <Value>{props.bvColor}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </SpaceObjectContainer>
  );
};

export default SpaceObject;
