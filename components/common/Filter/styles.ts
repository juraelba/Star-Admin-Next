import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 156px;
  height: 48px;
  border-radius: 250px;
  border: 2px solid #494e5b;
  padding: 12px;
  cursor: pointer;
`;

export const Value = styled.span`
  padding: 0 8px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #7f8596;
`;

export const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;
