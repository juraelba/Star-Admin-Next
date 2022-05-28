import styled from "styled-components";

export const NFTContainer = styled.div`
  width: 100%;
  background: #292d36;
  border: 2px solid #31343f;
  border-radius: 12px;
  padding: 30px 30px 10px;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ffffff;
  margin-bottom: 8px;
`;

export const Owner = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-transform: capitalize;
  color: #ffffff;
`;

export const AvatarContainer = styled.div`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ActionContainer = styled.div``;

export const EditButton = styled.button`
  width: 56px;
  height: 56px;
  border: 2px solid #353945;
  border-radius: 48px;
  background: none;
  margin-right: 16px;
`;

export const DeleteButton = styled.button`
  width: 56px;
  height: 56px;
  background: rgba(228, 95, 53, 0.1);
  border-radius: 48px;
  border: none;
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormItem = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.span`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  color: #7f8596;
  margin-right: 4px;
`;

export const Value = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #fcfcf9;
`;
