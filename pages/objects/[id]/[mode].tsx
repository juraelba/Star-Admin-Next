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
  SpaceObjectContainer,
  Title,
} from "./object.styles";
import { SpaceObject } from "../../../types";

const Object: React.FC = () => {
  const router = useRouter();
  const { id, mode } = router.query;
  const initialForm: SpaceObject = {
    id: 1,
    name: "Polaris",
    constellation: "Ursa Minor",
    abbreviation: "UMA",
    rightAccession: "02h 31m 49.09s",
    declination: "+89° 15′ 50.8″",
    stellar: "Spectral Class F7",
    bvColor: "0.636",
    image: null,
  };
  const [pastForm, setPastForm] = useState<SpaceObject>(initialForm);
  const [form, setForm] = useState<SpaceObject>(initialForm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/objects/${id}/edit`);
  };
  const handleDelete = () => {};
  const handleSave = () => router.push(`/objects/${id}/view`);
  const handleCancel = () => {
    setForm(pastForm);
    router.push(`/objects/${id}/view`);
  };

  return (
    <SpaceObjectContainer>
      <Title>Space Objects</Title>
      <Body>
        <DropzoneContainer>
          <Dropzone label="Star Image" />
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
            <Col size={6}>
              <TextField
                label="Constellation"
                name="constellation"
                value={form.constellation}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Abbreviation"
                name="abbreviation"
                value={form.abbreviation}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Right Accession"
                name="rightAccession"
                value={form.rightAccession}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Declination"
                name="declination"
                value={form.declination}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Stellar Classification"
                name="stellar"
                value={form.stellar}
                onChange={handleChange}
                readonly={mode !== "edit"}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="BV Color"
                name="bvColor"
                value={form.bvColor}
                onChange={handleChange}
                readonly={mode !== "edit"}
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
            <Button onClick={handleEdit}>Edit object</Button>
            <Button color="warning" onClick={handleDelete}>
              Delete object
            </Button>
          </>
        )}
      </Footer>
    </SpaceObjectContainer>
  );
};

export default Object;
