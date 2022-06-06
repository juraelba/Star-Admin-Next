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

const News: React.FC = () => {
  return (
    <NewsContainer>
      <CloseButton>
        <Image
          src="/assets/images/icons/remove.svg"
          width={12}
          height={12}
          alt=":( Not Found"
        />
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
        <Image
          src="/assets/images/news-bg.png"
          width={520}
          height={444}
          alt=":( Not Found"
        />
      </ImageContainer>
    </NewsContainer>
  );
};

export default News;
