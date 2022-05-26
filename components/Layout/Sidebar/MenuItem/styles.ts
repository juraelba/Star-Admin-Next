import styled from "styled-components";

export const MenuItemContainer = styled.li<{ active: boolean }>`
  width: 100%;
  height: 56px;
  border-radius: 12px;
  list-style: none;
  margin: 4px 0;
  background: ${(props) => (props.active ? `#31343f` : `#1F2128`)};
  display: flex;
  align-items: center;
  padding: 0 20px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: #31343f;

    & > div {
      filter: none;
    }

    & > span {
      color: #ebcd81;
    }
  }
`;

export const IconContainer = styled.div<{ active: boolean }>`
  width: 24px;
  height: 24px;
  filter: ${(props) =>
    props.active ? `none` : `brightness(100) opacity(0.4)`};
`;

export const Label = styled.span<{ active: boolean }>`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.active ? `#EBCD81` : `#777e90`)};
  margin-left: 16px;
`;
