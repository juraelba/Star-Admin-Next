import styled from "styled-components";

export const ColContainer = styled.div<{ size: number; spacing: number }>`
  flex-basis: ${(props) => (props.size / 12) * 100}%;
  padding-left: ${(props) => props.spacing}px;
`;
