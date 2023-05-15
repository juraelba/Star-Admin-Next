import React, { useEffect, useState } from 'react';
import AddNewButton from '../../../components/AddNewButton';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Button from '../../../components/common/Button';
import Tab from '../../../components/common/Tab';
import Filter from '../../../components/common/Filter';
import DataGrid, { Row, Col } from '../../../components/common/DataGrid';
import CardView from '../../../components/common/CardView';
import Category from '../../../components/Category';
import Pagination from '../../../components/common/Pagination';
import DeleteModal from '../../../components/DeleteModal';
import styled from 'styled-components';
// import {
//   CategoriesContainer,
//   DetailViewContainer,
//   Header,
//   TableContainer,
//   Title,
//   Toolbar,
// } from './categories.styles';
import { Tab as TabType, Category as CategoryType } from '../../../types';
import Router from 'next/router';
import useIsMobile from '../../../hooks/useIsMobile';
import { client } from '../../../utils/client';
import { Loader } from '../../../components/Loader/Loader';
import { SpinnerCircular } from 'spinners-react';


const Articles: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState('');
  const [selectedTab, setSelectedTab] = useState('list');
  const tabs: TabType[] = [
    {
      id: 'list',
      name: 'List View',
    },
    {
      id: 'detail',
      name: 'Detail View',
    },
  ];
  const [rows, setRows] = useState<CategoryType[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const cols: string[] = ['Title', 'Author', 'Status'];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: string,
  ) => {
    event.stopPropagation();
    Router.push(`/articles/categories/${rowID}/edit`);
  };
  const handleOpenModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    setSelectedRowId(id);
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    client.deleteNewsCategory({ id: selectedRowId }).then(() => {
      setIsOpen(false);
      init();
    });
  };

  const handleRedirect = (slug: string) => {
    Router.push(`/articles/categories/${slug}/view`);
  };

  const init = async () => {
    setIsLoading(true)
    const { results: newsCategories, maxPages } =
      await client.listNewsCategories({
        page: pageNum,
        limit: 10,
      });

    setRows(
      newsCategories.map((newsCategory) => ({
        id: newsCategory.id,
        title: newsCategory.title,
        slug: newsCategory.slug,
      })),
    );
      setIsLoading(false)
    setPageCount(maxPages);
  };

  const renderRow = (row: CategoryType) => {
    return (
      <Row onClick={() => handleRedirect(row.slug)}>
        <Col>{row.title}</Col>
        <Col>{row.slug}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.slug)
            }
            style={{ marginRight: '10px' }}
          >
            Edit
          </Button>
          <Button
            size="xs"
            color="light-danger"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleOpenModal(e, row.id)
            }
          >
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ['Home', 'News Articles', 'Categories'];

  useEffect(() => {
    init();
  }, []);

  const handleChangePageNumber = (index: number) => {
    setPageNum(index);
  };

  useEffect(() => {
    init();
  }, [pageNum]);

  const renderCard = (row: CategoryType, init: () => void) => {
    return <Category init={init} {...row} />;
  };

  return (
    <CategoriesContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Categories</Title>
        <AddNewButton url="/articles/categories/new/create" />
      </Header>
      <Toolbar>
        <Filter />
        {!isMobile && (
          <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
        )}
      </Toolbar>
      {isMobile ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={renderCard} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== 'list' ? (
            <DetailViewContainer>
              <CardView rows={rows} init={init} renderCard={renderCard} />
            </DetailViewContainer>
          ) : (
            <>
            {
            isLoading ? <SpinnerCircular style={{marginLeft: "auto", marginRight:"auto", display:"block"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" /> :
            <TableContainer>
              <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
            </TableContainer>
            }
            </>
          )}
        </>
      )}
      <Pagination
        pageNum={pageNum}
        pageCount={pageCount}
        onPaginate={handleChangePageNumber}
      />
      <DeleteModal
        pageName="category"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </CategoriesContainer>
  );
};

export default Articles;

export const CategoriesContainer = styled.div`
  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
    font-size: 36px;
    text-align: center;
  }
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    & > div {
      width: 100%;
    }
  }
`;

export const TableContainer = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
    flex-direction: column;
  }
`;

export const DetailViewContainer = styled.div`
  display: flex;
`;

export const AvatarContainer = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 30px;
  overflow: hidden;
`;

