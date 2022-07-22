import React, { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import DeleteModal from '../DeleteModal';
import Button from '../common/Button';
import { Category as CategoryProps } from '../../types';
import {
  ActionContainer,
  Body,
  ButtonContainer,
  DeleteButton,
  EditButton,
  FormItem,
  Header,
  Label,
  CategoryContainer,
  Title,
  Value,
} from './styles';
import useIsMobile from '../../hooks/useIsMobile';

const Category: React.FC<CategoryProps> = (props) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = () => {
    Router.push(`/articles/categories/${props.slug}/view`);
  };
  const handleEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    Router.push(`/articles/categories/${props.slug}/edit`);
  };
  const handleDelete = () => setIsOpen(true);
  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  return (
    <CategoryContainer onClick={handleRedirect}>
      <Header>
        <Title>{props.title}</Title>
        <ActionContainer>
          {isMobile ? (
            <>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleEdit(e)
                  }
                  fullWidth
                >
                  Edit card
                </Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  size="sm"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleOpen(e)
                  }
                  fullWidth
                  color="light-danger"
                >
                  Remove card
                </Button>
              </ButtonContainer>
            </>
          ) : (
            <>
              <EditButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleEdit(e)
                }
              >
                <Image
                  src="/assets/images/icons/edit.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </EditButton>
              <DeleteButton
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleOpen(e)
                }
              >
                <Image
                  src="/assets/images/icons/trash.svg"
                  width={24}
                  height={24}
                  alt=":( Not Found"
                />
              </DeleteButton>
            </>
          )}
        </ActionContainer>
      </Header>
      <Body>
        <FormItem>
          <Label>Slug</Label>
          <Value>{props.slug}</Value>
        </FormItem>
      </Body>
      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleDelete}
      />
    </CategoryContainer>
  );
};

export default Category;
