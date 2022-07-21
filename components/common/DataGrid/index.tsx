import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Row from './Row';
import Col from './Col';
import {
  DataGridContainer,
  DataTable,
  TableHead,
  TableBody,
  TableHeadRow,
  TableHeadCol,
  PaginationContainer,
  Pagination,
  PaginationItem,
  PaginationActionContainer,
  PaginationAction,
} from './styles';

interface DataGridProps {
  rows: object[];
  cols: string[];
  renderRow: any;
  pageRowCount?: number;
  pageCount: number;
  pageNum: number;
  onChangePageNumber: (index: number) => void;
}

const DataGrid: React.FC<DataGridProps> = ({
  rows,
  cols,
  renderRow,
  pageCount,
  pageNum,
  pageRowCount = 10,
  onChangePageNumber,
}) => {
  const handlePaginate = (index: number) => {
    onChangePageNumber(index);
  };

  const handleBack = () => {
    if (pageNum !== 1) onChangePageNumber(pageNum - 1);
  };
  const handleNext = () => {
    if (pageNum !== pageCount) onChangePageNumber(pageNum + 1);
  };
  return (
    <DataGridContainer>
      <DataTable>
        <TableHead>
          <TableHeadRow>
            {cols.map((col: string, index: number) => (
              <TableHeadCol key={index}>{col}</TableHeadCol>
            ))}
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {rows.map((row: object, index: number) => (
            <React.Fragment key={index}>{renderRow(row)}</React.Fragment>
          ))}
        </TableBody>
      </DataTable>
      <PaginationContainer>
        <Pagination>
          {Object.keys(Array.from(Array(pageCount))).map((item: string) => {
            const index = Number(item) + 1;
            return (
              <PaginationItem
                key={item}
                active={index === pageNum}
                onClick={() => handlePaginate(index)}
              >
                {index}
              </PaginationItem>
            );
          })}
        </Pagination>
        <PaginationActionContainer>
          <PaginationAction active={pageNum !== 1} onClick={handleBack}>
            <Image
              src="/assets/images/icons/arrow-left-light.svg"
              width={24}
              height={24}
            />
          </PaginationAction>
          <PaginationAction active={pageNum !== pageCount}>
            <Image
              src="/assets/images/icons/arrow-right-light.svg"
              width={24}
              height={24}
              onClick={handleNext}
            />
          </PaginationAction>
        </PaginationActionContainer>
      </PaginationContainer>
    </DataGridContainer>
  );
};

export default DataGrid;
export { Col, Row };
