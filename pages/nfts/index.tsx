import React, { useState } from "react";
import Image from "next/image";
import Button from "../../components/common/Button";
import Tab from "../../components/common/Tab";
import Filter from "../../components/common/Filter";
import DataGrid, { Row, Col } from "../../components/common/DataGrid";
import CardView from "../../components/common/CardView";
import NFT from "../../components/NFT";
import {
  AvatarContainer,
  DetailViewContainer,
  NFTsContainer,
  TableContainer,
  Title,
  Toolbar,
} from "./nfts.styles";
import { Tab as TabType, NFT as NFTType } from "../../types";
import AvatarImage from "../../assets/images/material.png";
import Router from "next/router";

const NFTs: React.FC = () => {
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
  const rows: NFTType[] = [
    {
      id: 1,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 2,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 3,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 4,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 5,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 6,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 7,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 8,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 9,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 10,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 11,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 12,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 13,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 14,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 15,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 16,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 17,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 18,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 19,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 20,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Metis",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
    {
      id: 21,
      name: "Antares",
      owner: "12e45dee8po9sve8bd6g67j",
      chain: "Ethereum",
      ranking: "Placeholder",
      rarity: "Placeholder",
      link: "https://member.starledger.org/d245jdk/",
      image: AvatarImage,
    },
  ];
  const cols: string[] = ["Image", "Name", "Owner", "Chain", "Status"];

  const handleChangeTab = (id: string) => setSelectedTab(id);
  const handleEdit = (
    event: React.MouseEvent<HTMLButtonElement>,
    rowID: number
  ) => {
    event.stopPropagation();
    Router.push(`/nfts/${rowID}/edit`);
  };
  const handleDelete = () => {};

  const handleRedirect = (id: number) => {
    Router.push(`/nfts/${id}/view`);
  };

  const renderRow = (row: NFTType) => {
    return (
      <Row onClick={() => handleRedirect(row.id)}>
        <Col>
          <AvatarContainer>
            <Image src={row.image} width={53} height={53} alt=":( Not Found" />
          </AvatarContainer>
        </Col>
        <Col>{row.name}</Col>
        <Col>{row.owner}</Col>
        <Col>{row.chain}</Col>
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
    <NFTsContainer>
      <Title>NFTs</Title>
      <Toolbar>
        <Filter />
        <Tab tabs={tabs} active={selectedTab} onChange={handleChangeTab} />
      </Toolbar>
      {selectedTab !== "list" ? (
        <DetailViewContainer>
          <CardView rows={rows} renderCard={NFT} />
        </DetailViewContainer>
      ) : (
        <TableContainer>
          <DataGrid cols={cols} rows={rows} renderRow={renderRow} />
        </TableContainer>
      )}
    </NFTsContainer>
  );
};

export default NFTs;