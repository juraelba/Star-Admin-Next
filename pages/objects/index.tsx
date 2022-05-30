import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import SpaceObject from "../../components/SpaceObject";
import {
  AvatarContainer,
  DetailViewContainer,
  SpaceObjectsContainer,
  TableContainer,
  Title,
  Toolbar,
} from "./objects.styles";
import { Tab as TabType, SpaceObject as SpaceObjectType } from "../../types";
import AvatarImage from "../../assets/images/material.png";
import Router from "next/router";

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
  const rows: SpaceObjectType[] = [
    {
      id: 1,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 2,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 3,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 4,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 5,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 6,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 7,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 8,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 9,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 10,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 11,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 12,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 13,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 14,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 15,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 16,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 17,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 18,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 19,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 20,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
    {
      id: 21,
      name: "Polaris",
      constellation: "Ursa Minor",
      image: AvatarImage,
      abbreviation: "UMA",
      rightAccession: "Placeholder",
      declination: "Placeholder",
      stellar: "Placeholder",
      bvColor: "Placeholder",
    },
  ];
  const cols: string[] = ["Image", "Name", "Constellation", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/objects/${rowID}/edit`);
  };
  const handleDelete = () => {};

  const handleRedirect = (rowID: number) => {
    Router.push(`/objects/${rowID}/view`);
  };

  const renderRow = (row: SpaceObjectType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.constellation}</Col>
        <Col>
          <Button
            size="xs"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
              handleEdit(event, row.id)
            }
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button size="xs" color="light-warning" onClick={handleDelete}>
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
      {selectedTab !== "list" ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={SpaceObject} />
        </DetailViewContainer>
      ) : (
        <TableContainer>
          <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
        </TableContainer>
      )}
    </SpaceObjectsContainer>
  );
};

export default SpaceObjects;
