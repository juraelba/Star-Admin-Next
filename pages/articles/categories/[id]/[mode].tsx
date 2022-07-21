import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../../components/common/Breadcrumb';
import Col from '../../../../components/common/Col';
import Row from '../../../../components/common/Row';
import TextField from '../../../../components/common/TextField';
import TextArea from '../../../../components/common/TextArea';
import Button from '../../../../components/common/Button';
import UnSavedModal from '../../../../components/UnSavedModal';
import DeleteModal from '../../../../components/DeleteModal';
import { Body, Footer, CategoryContainer, Title } from './category.styles';
import { Category as CategoryType } from '../../../../types';
import useIsMobile from '../../../../hooks/useIsMobile';
import { observer } from 'mobx-react-lite';
import { client } from '../../../../utils/client';

const Category: React.FC = observer(() => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: CategoryType =
    mode === 'create'
      ? {
          id: 'a',
          title: '',
          slug: '',
        }
      : {
          id: 'a',
          title: 'SpaceX',
          slug: 'https://news.starledger.org/category/name',
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<CategoryType>(initialForm);
  const [form, setForm] = useState<CategoryType>(initialForm);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/articles/categories/${id}/edit`);
  };
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
  };
  const handleSave = async () => {
    await client.createNewsArticle({
      title: form.title,
      slug: form.slug,
    });

    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/articles/categories/${id}/view`);
    setIsOpenUnSaveModal(false);
  };

  const breadcrumbs = ['home', 'News Articles', 'Categories', 'Add New'];

  return (
    <CategoryContainer>
      <Breadcrumb redirectURL="/articles" breadcrumbs={breadcrumbs} />
      <Title>{isMobile && 'Edit'} Categories</Title>
      <Body>
        <Row spacing={40}>
          <Col sm={12} lg={6}>
            <TextField
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              readonly={readonly}
            />
          </Col>
          <Col sm={12} lg={6}>
            <TextField
              label="Slug"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              readonly={readonly}
            />
          </Col>
        </Row>
      </Body>
      <Footer>
        {mode === 'edit' && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={() => handleSave()}>
              Save changes
            </Button>
          </>
        )}
        {mode === 'create' && (
          <Button color="success" onClick={() => handleSave()}>
            Create category
          </Button>
        )}
        {mode === 'view' && (
          <>
            <Button onClick={handleEdit}>Edit category</Button>
            <Button
              color="light-danger"
              onClick={() => setIsOpenDeleteModal(true)}
            >
              Delete category
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
    </CategoryContainer>
  );
});

export default Category;
