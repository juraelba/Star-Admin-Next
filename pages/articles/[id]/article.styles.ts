import styled from "styled-components";

export const ArticleContainer = styled.div`
  color: #fff;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;
  margin-bottom: 48px;
`;

export const Body = styled.div`
  display: flex;
  gap: 60px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    margin-left: 24px;
  }
`;
