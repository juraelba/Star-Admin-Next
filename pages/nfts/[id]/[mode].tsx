import React, { useState } from "react";
import { useRouter } from "next/router";
import Col from "../../../components/common/Col";
import Dropzone from "../../../components/common/Dropzone";
import Row from "../../../components/common/Row";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import {
  Body,
  Footer,
  DetailContainer,
  DropzoneContainer,
  NFTContainer,
  Title,
} from "./nft.styles";
import { NFT as NFTType } from "../../../types";
import EmailIcon from "../../../assets/images/icons/alternate-email.svg";
import ShareIcon from "../../../assets/images/icons/link.svg";
import StarImg from "../../../assets/images/star.png";

const NFT: React.FC = () => {
  const router = useRouter();
  const { id, mode } = router.query;
  const initialForm: NFTType = {
    id: 1,
    name: "Antares",
    owner: "12e45dee8po9ed5...",
    chain: "Ethereum",
    ranking: "#10",
    rarity: "#10",
    link: "https://member.starledger.org/d245jdk/",
    image: StarImg,
  };
  const [pastForm, setPastForm] = useState<NFTType>(initialForm);
  const [form, setForm] = useState<NFTType>(initialForm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/nfts/${id}/edit`);
  };
  const handleDelete = () => {};
  const handleSave = () => router.push(`/nfts/${id}/view`);
  const handleCancel = () => {
    setForm(pastForm);
    router.push(`/nfts/${id}/view`);
  };

  return (
    <NFTContainer>
      <Title>NFTs</Title>
      <Body>
        <DropzoneContainer>
          <Dropzone label="Star Image" value={form.image} />
        </DropzoneContainer>
        <DetailContainer>
          <Row>
            <Col>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col>
              <TextField
                label="Owner"
                name="owner"
                icon={EmailIcon}
                value={form.owner}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Ranking"
                name="ranking"
                value={form.ranking}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Rarity"
                name="rarity"
                value={form.rarity}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col>
              <TextField
                label="Link to related Space Object"
                name="link"
                value={form.link}
                onChange={handleChange}
                readonly={mode !== "edit"}
                icon={ShareIcon}
              />
            </Col>
          </Row>
        </DetailContainer>
      </Body>
      <Footer>
        {mode === "edit" ? (
          <>
            <Button onClick={handleCancel}>Cancel changes</Button>
            <Button color="success" onClick={handleSave}>
              Save changes
            </Button>
          </>
        ) : (
          <>
            <Button onClick={handleEdit}>Edit NFT</Button>
            <Button color="warning" onClick={handleDelete}>
              Delete NFT
            </Button>
          </>
        )}
      </Footer>
    </NFTContainer>
  );
};

export default NFT;
