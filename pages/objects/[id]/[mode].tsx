import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../../components/common/Button";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Col from "../../../components/common/Col";
import Dropzone from "../../../components/common/Dropzone";
import Row from "../../../components/common/Row";
import TextField from "../../../components/common/TextField";
import UnSavedModal from "../../../components/UnSavedModal";
import DeleteModal from "../../../components/DeleteModal";
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
  const readonly = !(mode === "create" || mode === "edit");
  const initialForm: SpaceObject =
    mode === "create"
      ? {
          id: 1,
          name: "",
          constellation: "",
          abbreviation: "",
          rightAccession: "",
          declination: "",
          stellar: "",
          bvColor: "",
          image: null,
        }
      : {
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
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
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
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
  };
  const handleSave = () => {
    router.push(`/objects/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/objects/${id}/view`);
    setIsOpenUnSaveModal(false);
  };

  const breadcrumbs = ["Home", "Space Objects", "Add New"];

  return (
    <SpaceObjectContainer>
      <Breadcrumb redirectURL="/objects" breadcrumbs={breadcrumbs} />
      <Title>Space Objects</Title>
      <Body>
        <DropzoneContainer>
          <Dropzone label="Star Image" readonly={readonly} />
        </DropzoneContainer>
        <DetailContainer>
          <Row>
            <Col>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Constellation"
                name="constellation"
                value={form.constellation}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Abbreviation"
                name="abbreviation"
                value={form.abbreviation}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Right Accession"
                name="rightAccession"
                value={form.rightAccession}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Declination"
                name="declination"
                value={form.declination}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Stellar Classification"
                name="stellar"
                value={form.stellar}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="BV Color"
                name="bvColor"
                value={form.bvColor}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
          </Row>
        </DetailContainer>
      </Body>
      <Footer>
        {mode === "edit" && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={handleSave}>
              Save changes
            </Button>
          </>
        )}
        {mode === "create" && (
          <Button color="success" onClick={handleSave}>
            Create object
          </Button>
        )}
        {mode === "view" && (
          <>
            <Button onClick={handleEdit}>Edit object</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete object
            </Button>
          </>
        )}
      </Footer>
      <UnSavedModal
        isOpen={isOpenUnSaveModal}
        onClose={() => setIsOpenUnSaveModal(false)}
        onSave={handleSave}
        onCancel={handleCancelSave}
      />
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </SpaceObjectContainer>
  );
};

export default Object;
