import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  padding: 6px 4px;
  background: #282a33;
  border-radius: 250px;
`;

export const TabItem = styled.div<{ active: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 167.5px;
  height: 36px;
  padding: 0 20px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.active ? `#FCFCF9` : `#7f8596`)};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active
      ? `0px 2px 4px -2px rgba(0, 0, 0, 0.31),
    inset 0px 1px 1px rgba(255, 255, 255, 0.05)`
      : `none`};
  background: ${(props) => (props.active ? `#31343f` : `none`)};
  border-radius: 250px;
`;
