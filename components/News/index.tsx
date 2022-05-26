import React from "react";
import Image from "next/image";
import {
  NewsContainer,
  CloseButton,
  ImageContainer,
  Bold,
  Role,
  Title,
  Description,
} from "./styles";
import CloseIcon from "../../assets/images/icons/remove.svg";
import BGImage from "../../assets/images/news-bg.png";

const News: React.FC = () => {
  return (
    <NewsContainer>
      <CloseButton>
        <Image src={CloseIcon} alt=":( Not Found" />
      </CloseButton>
      <Role>starledger admin</Role>
      <Title>
        Welcome back, <Bold>Chris Tate!</Bold>
      </Title>
      <Description>
        You’ve completed 80% of your tasks for this week! Keep it up and improve
        your score!
      </Description>
      <ImageContainer>
        <Image src={BGImage} />
      </ImageContainer>
    </NewsContainer>
  );
};

export default News;
