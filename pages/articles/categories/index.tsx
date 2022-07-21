import React, { useEffect, useState } from 'react';
import AddNewButton from '../../../components/AddNewButton';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Button from '../../../components/common/Button';
import Tab from '../../../components/common/Tab';
import Filter from '../../../components/common/Filter';
import DataGrid, { Row, Col } from '../../../components/common/DataGrid';
import CardView from '../../../components/common/CardView';
import Article from '../../../components/Article';
import Pagination from '../../../components/common/Pagination';
import DeleteModal from '../../../components/DeleteModal';
import {
  CategoriesContainer,
  DetailViewContainer,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from './categories.styles';
import { Tab as TabType, Category as CategoryType } from '../../../types';
import Router from 'next/router';
import useIsMobile from '../../../hooks/useIsMobile';
import { client } from '../../../utils/client';

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

  const breadcrumbs = ['Home', 'News Articles'];

  useEffect(() => {
    init();
  }, []);

  const handleChangePageNumber = (index: number) => {
    setPageNum(index);
  };

  useEffect(() => {
    init();
  }, [pageNum]);

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
      <Pagination
        pageNum={pageNum}
        pageCount={pageCount}
        onPaginate={handleChangePageNumber}
      />
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </CategoriesContainer>
  );
};

export default Articles;
