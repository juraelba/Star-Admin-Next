import React, { useState } from "react";
import Image from "next/image";
import Button from "../components/common/Button";
import Tab from "../components/common/Tab";
import Filter from "../components/common/Filter";
import DataGrid, { Row, Col } from "../components/common/DataGrid";
import {
  SpaceObjectsContainer,
  Title,
  Toolbar,
  TableContainer,
  AvatarContainer,
} from "./objects.styles";
import { Tab as TabType, SpaceObject } from "../types";
import AvatarImage from "../assets/images/material.png";

const SpaceObjects: React.FC = () => {
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
  const rows: SpaceObject[] = [
    {
      id: 1,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 2,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 3,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 4,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 5,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 6,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 7,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 8,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 9,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 10,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 11,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 12,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 13,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 14,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 15,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 16,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 17,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 18,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 19,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 20,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
    {
      id: 21,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
    },
  ];
  const cols: string[] = ["Image", "Name", "Constellation", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = () => {};
  const handleDelete = () => {};

  const renderRow = (row: SpaceObject) => {
    return (
      <Row>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.id}</Col>
        <Col>{row.constellation}</Col>
        <Col>
          <Button
            size="small"
            onClick={handleEdit}
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
    <SpaceObjectsContainer>
      <Title>Space Objects</Title>
      <Toolbar>
        <Filter />
        <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
      </Toolbar>
      <TableContainer>
        <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
      </TableContainer>
    </SpaceObjectsContainer>
  );
};

export default SpaceObjects;
