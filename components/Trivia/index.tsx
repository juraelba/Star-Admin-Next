import React, { useState } from "react";
import Image from "next/image";
import Router from "next/router";
import DeleteModal from "../DeleteModal";
import { Trivia as TriviaType } from "../../types";
import {
  ActionContainer,
  Body,
  DeleteButton,
  EditButton,
  FormItem,
  Header,
  Label,
  TriviaContainer,
  Title,
  Value,
} from "./styles";

const Trivia: React.FC<TriviaType> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/trivia/${props.id}/view`);
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    Router.push(`/trivia/${props.id}/edit`);
  };
  const handleDelete = () => setIsOpen(true);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <TriviaContainer onClick={handleRedirect}>
      <Header>
        <Title>{props.title}</Title>
        <ActionContainer>
          <EditButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEdit(e)}
          >
            <Image
              src="/assets/images/icons/edit.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </EditButton>
          <DeleteButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleOpen(e)}
          >
            <Image
              src="/assets/images/icons/trash.svg"
              width={24}
              height={24}
              alt=":( Not Found"
            />
          </DeleteButton>
        </ActionContainer>
      </Header>
      <Body>
        <FormItem>
          <Label>Date</Label>
          <Value>{props.date}</Value>
        </FormItem>
        <FormItem>
          <Label>Questions</Label>
          <Value>{props.questionCount}</Value>
        </FormItem>
        <FormItem>
          <Label>Author</Label>
          <Value>{props.author}</Value>
        </FormItem>
        <FormItem>
          <Label>Published At</Label>
          <Value>{props.publishedAt}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </TriviaContainer>
  );
};

export default Trivia;
