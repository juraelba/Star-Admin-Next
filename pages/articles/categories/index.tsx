import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddNewButton from '../../../components/AddNewButton';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Button from '../../../components/common/Button';
import Tab from '../../../components/common/Tab';
import Filter from '../../../components/common/Filter';
import DataGrid, { Row, Col } from '../../../components/common/DataGrid';
import CardView from '../../../components/common/CardView';
import Article from '../../../components/Article';
import DeleteModal from '../../../components/DeleteModal';
import {
  CategoriesContainer,
  DetailViewContainer,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from './categories.styles';
import { Tab as TabType, Article as ArticleType } from '../../../types';
import Router from 'next/router';
import useIsMobile from '../../../hooks/useIsMobile';
import { client } from '../../../utils/client';

const Articles: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
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
  const [rows, setRows] = useState<ArticleType[]>([]);
  const cols: string[] = ['Title', 'Slug'];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: string,
  ) => {
    event.stopPropagation();
    Router.push(`/articles/categories/${rowID}/edit`);
  };
  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  const handleDelete = () => {
    setIsOpen(false);
  };

  const handleRedirect = (id: string) => {
    Router.push(`/articles/categories/${id}/view`);
  };

  const init = async () => {
    const { results: newsCategories } = await client.listNewsCategories();
    console.log(newsCategories);

    // setRows(
    //   newsCategories.map((newsCategories) => ({
    //     id: newsCategories.id,
    //     title: newsCategories.title,
    //     slug: newsCategories.slug,
    //   })),
    // );
  };

  const renderRow = (row: ArticleType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>{row.title}</Col>
        <Col>{row.author}</Col>
        <Col>{row.date}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.id)
            }
            style={{ marginRight: '10px' }}
          >
            Edit
          </Button>
          <Button size="xs" color="light-danger" onClick={handleOpenModal}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ['Home', 'Categories'];

  useEffect(() => {
    init();
  }, []);

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
          <CardView rows={rows} renderCard={Article} />
        </DetailViewContainer>
      ) : (
        <>
          {selectedTab !== 'list' ? (
            <DetailViewContainer>
              <CardView rows={rows} renderCard={Article} />
            </DetailViewContainer>
          ) : (
            <TableContainer>
              <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
            </TableContainer>
          )}
        </>
      )}
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </CategoriesContainer>
  );
};

export default Articles;
