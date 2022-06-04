import styled from "styled-components";

export const TriviaContainer = styled.div``;
export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const TableContainer = styled.div``;

export const DetailViewContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 30px;
  overflow: hidden;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 20px;
  }
`;

export const TriviaTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;
