import React from "react";
import Image from "next/image";
import Router from "next/router";
import { Article as ArticleProps } from "../../types";
import {
  ActionContainer,
  Body,
  DeleteButton,
  EditButton,
  FormItem,
  Header,
  Label,
  ArticleContainer,
  Title,
  Value,
} from "./styles";
import EditIcon from "../../assets/images/icons/edit.svg";
import TrashIcon from "../../assets/images/icons/trash.svg";

const Article: React.FC<ArticleProps> = (props) => {
  const handleRedirect = () => {
    Router.push(`/articles/${props.id}/view`);
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    Router.push(`/articles/${props.id}/edit`);
  };

  return (
    <ArticleContainer onClick={handleRedirect}>
      <Header>
        <Title>{props.title}</Title>
        <ActionContainer>
          <EditButton
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleEdit(e)}
          >
            <Image src={EditIcon} width={24} height={24} alt=":( Not Found" />
          </EditButton>
          <DeleteButton>
            <Image src={TrashIcon} width={24} height={24} alt=":( Not Found" />
          </DeleteButton>
        </ActionContainer>
      </Header>
      <Body>
        <FormItem>
          <Label>Date</Label>
          <Value>{props.date}</Value>
        </FormItem>
        <FormItem>
          <Label>Content</Label>
          <Value>{props.content}</Value>
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
    </ArticleContainer>
  );
};

export default Article;
