import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import Article from "../../components/Article";
import {
  ArticlesContainer,
  DetailViewContainer,
  TableContainer,
  Title,
  Toolbar,
} from "./articles.styles";
import { Tab as TabType, Article as ArticleType } from "../../types";
import Router from "next/router";

const Articles: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("list");
  const tabs: TabType[] = [
    {
      id: "list",
      name: "List View",
    },
    {
      id: "detail",
      name: "Detail View",
    },
  ];
  const rows: ArticleType[] = [
    {
      id: 1,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 2,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 3,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 4,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 5,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 6,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 7,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 8,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 9,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 10,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 11,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 12,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 13,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 14,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 15,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 16,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 17,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 18,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 19,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 20,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
    {
      id: 21,
      title: "How Crypto Enables Economic Freedom",
      author: "Chris Tate",
      date: "May 23, 2022",
      content: "Crypto",
      publishedAt: "Blog",
    },
  ];
  const cols: string[] = ["Title", "Author", "Date", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/articles/${rowID}/edit`);
  };
  const handleDelete = () => {};

  const handleRedirect = (id: number) => {
    Router.push(`/articles/${id}/view`);
  };

  const renderRow = (row: ArticleType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>{row.title}</Col>
        <Col>{row.author}</Col>
        <Col>{row.date}</Col>
        <Col>
          <Button
            size="small"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.id)
            }
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button size="small" color="warning" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
    );
  };

  return (
    <ArticlesContainer>
      <Title>News Articles</Title>
      <Toolbar>
        <Filter />
        <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
      </Toolbar>
      {selectedTab !== "list" ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={Article} />
        </DetailViewContainer>
      ) : (
        <TableContainer>
          <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
        </TableContainer>
      )}
    </ArticlesContainer>
  );
};

export default Articles;
