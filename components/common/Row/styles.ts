import styled from "styled-components";

export const RowContainer = styled.div<{ spacing: number }>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${(props) => props.spacing / 2}px;
  margin-right: -${(props) => props.spacing / 2}px;
`;
