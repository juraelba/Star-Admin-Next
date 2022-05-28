import React, { useState } from "react";
import { useRouter } from "next/router";
import Col from "../../../components/common/Col";
import Row from "../../../components/common/Row";
import TextField from "../../../components/common/TextField";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import { Body, Footer, ArticleContainer, Title } from "./article.styles";
import { Article as ArticleType } from "../../../types";

const Article: React.FC = () => {
  const router = useRouter();
  const { id, mode } = router.query;
  const initialForm: ArticleType = {
    id: 1,
    date: "",
    title: "Article Title",
    author: "Chris Tate",
    publishedAt: "MM/DD/YYYY @ 00:00:00 AM UTC +4",
    content: "Enter article text here...",
  };
  const [pastForm, setPastForm] = useState<ArticleType>(initialForm);
  const [form, setForm] = useState<ArticleType>(initialForm);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/articles/${id}/edit`);
  };
  const handleDelete = () => {};
  const handleSave = () => router.push(`/articles/${id}/view`);
  const handleCancel = () => {
    setForm(pastForm);
    router.push(`/articles/${id}/view`);
  };

  return (
    <ArticleContainer>
      <Title>News Articles</Title>
      <Body>
        <Row spacing={60}>
          <Col size={6}>
            <Row>
              <Col>
                <TextField
                  type="date"
                  label="Date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  readonly={mode !== "edit"}
                />
              </Col>
              <Col>
                <TextField
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  readonly={mode !== "edit"}
                />
              </Col>
              <Col>
                <TextField
                  label="Author"
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  readonly={mode !== "edit"}
                />
              </Col>
              <Col>
                <TextField
                  type="datetime-local"
                  label="Published At"
                  name="publishedAt"
                  value={form.publishedAt}
                  onChange={handleChange}
                  readonly={mode !== "edit"}
                />
              </Col>
            </Row>
          </Col>
          <Col size={6}>
            <Row>
              <Col>
                <TextArea
                  label="Content"
                  name="content"
                  value={form.content}
                  onChange={handleChange}
                  readonly={mode !== "edit"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
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
            <Button onClick={handleEdit}>Edit article</Button>
            <Button color="warning" onClick={handleDelete}>
              Delete article
            </Button>
          </>
        )}
      </Footer>
    </ArticleContainer>
  );
};

export default Article;