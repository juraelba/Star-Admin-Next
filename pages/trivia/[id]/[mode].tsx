import React, { useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "../../../components/common/Breadcrumb";
import Col from "../../../components/common/Col";
import Dropzone from "../../../components/common/Dropzone";
import Row from "../../../components/common/Row";
import TextField from "../../../components/common/TextField";
import Button from "../../../components/common/Button";
import UnSavedModal from "../../../components/UnSavedModal";
import DeleteModal from "../../../components/DeleteModal";
import {
  Body,
  Footer,
  DetailContainer,
  DropzoneContainer,
  TriviaContainer,
  Title,
} from "./trivia.styles";
import { Trivia as TriviaType } from "../../../types";

const Trivia: React.FC = () => {
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === "create" || mode === "edit");
  const initialForm: TriviaType =
    mode === "create"
      ? {
          id: 1,
          title: "",
          date: "",
          questionCount: 4,
          publishedAt: "",
          author: "",
          status: "Pending",
        }
      : {
          id: 1,
          title: "",
          date: "",
          questionCount: 4,
          publishedAt: "",
          author: "",
          status: "Pending",
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<TriviaType>({
    id: 1,
    title: "",
    date: "",
    questionCount: 4,
    publishedAt: "",
    author: "",
    status: "Pending",
  });
  const [form, setForm] = useState<TriviaType>(initialForm);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/trivia/${id}/edit`);
  };
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
  };
  const handleSave = () => {
    router.push(`/trivia/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/trivia/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const breadcrumbs = ["Home", "Trivia", "Add New"];

  return (
    <TriviaContainer>
      <Breadcrumb redirectURL="/trivia" breadcrumbs={breadcrumbs} />
      <Title>Trivia</Title>
      <Body>
        <DetailContainer>
          <Row>
            <Col size={6}>
              <TextField
                type="date"
                label="Date"
                name="date"
                value={form.date}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col size={6}>
              <TextField
                label="Title"
                name="title"
                value={form.title}
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
            Create NFT
          </Button>
        )}
        {mode === "view" && (
          <>
            <Button onClick={handleEdit}>Edit NFT</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete NFT
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
    </TriviaContainer>
  );
};

export default Trivia;
