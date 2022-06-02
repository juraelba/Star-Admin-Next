import React, { useState } from "react";
import AddNewButton from "../../components/AddNewButton";
import Breadcrumb from "../../components/common/Breadcrumb";
import Badge from "../../components/common/Badge";
import Tab from "../../components/common/Tab";
import SortBy from "../../components/common/SortBy";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import {
  ActivityContainer,
  ActivityDate,
  ActivityTitle,
  Header,
  TableContainer,
  Title,
  Toolbar,
} from "./activity.styles";
import { Tab as TabType, Activity as ActivityType } from "../../types";
import Router from "next/router";

const Activity: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const tabs: TabType[] = [
    {
      id: "all",
      name: "All Activity",
    },
    {
      id: "object",
      name: "Space Objects",
    },
    {
      id: "nft",
      name: "NFT’s",
    },
    {
      id: "article",
      name: "News Articles",
    },
  ];
  const rows: ActivityType[] = [
    {
      id: 1,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 2,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 3,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 4,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 5,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 6,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 7,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 8,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 9,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 10,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 11,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 12,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 13,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 14,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 15,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 16,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 17,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 18,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 19,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
    {
      id: 20,
      title: "Space Object Edited",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Pending",
    },
    {
      id: 21,
      title: "New NFT Listed",
      author: "Chris Tate",
      date: "May 17th, 2022 10:56:41",
      status: "Completed",
    },
  ];
  const cols: string[] = ["Title", "Author", "Date", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/nfts/${rowID}/edit`);
  };

  const renderRow = (row: ActivityType) => {
    return (
      <Row>
        <Col>
          <ActivityTitle>{row.title}</ActivityTitle>
        </Col>
        <Col>{row.author}</Col>
        <Col>
          <ActivityDate>{row.date}</ActivityDate>
        </Col>
        <Col>
          <Badge color={row.status === "Completed" ? "success" : "warning"}>
            {row.status}
          </Badge>
        </Col>
      </Row>
    );
  };

  const breadcrumbs = ["Home", "Activity"];

  return (
    <ActivityContainer>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Header>
        <Title>Activity</Title>
        <AddNewButton url="/nfts/new/create" />
      </Header>
      <Toolbar>
        <SortBy />
        <Tab
          size="small"
          tabs={tabs}
          active={selectedTab}
          onChange={handleChangeTab}
        />
      </Toolbar>
      <TableContainer>
        <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
      </TableContainer>
    </ActivityContainer>
  );
};

export default Activity;
