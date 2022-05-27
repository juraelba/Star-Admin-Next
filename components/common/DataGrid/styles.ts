import styled from "styled-components";

export const DataGridContainer = styled.div``;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 64px;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody`
  & tr {
    &:nth-child(even) {
      & > td {
        background: rgba(40, 42, 51, 0.32);

        &:first-child {
          border-top-left-radius: 12px;
          border-bottom-left-radius: 12px;
        }

        &:last-child {
          border-top-right-radius: 12px;
          border-bottom-right-radius: 12px;
        }
      }
    }
  }
`;
export const TableHeadRow = styled.tr`
  background: #353945;
  height: 60px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 2px;
    top: 2px;
    border-radius: 10px;
    background: #1f2128;
    z-index: 1;
  }
`;
export const TableHeadCol = styled.td`
  position: relative;
  z-index: 2;
  padding: 0 24px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #777e90;
  text-transform: uppercase;

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Pagination = styled.ul`
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const PaginationItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 250px;
  background: ${(props) => (props.active ? `#EBCD81` : `none`)};
  list-style: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: ${(props) => (props.active ? `none` : `2px solid #353945 `)};
  color: ${(props) => (props.active ? `#353945` : `#fcfcf9`)};
  cursor: pointer;
`;

export const PaginationActionContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const PaginationAction = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  background: none;
  outline: none;
  border: ${(props) => (props.active ? `2px solid #FCFCF9` : `none`)};
  opacity: ${(props) => (props.active ? 1 : 0.7)};
`;
