import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../../components/common/Breadcrumb';
import Col from '../../../components/common/Col';
import Dropzone from '../../../components/common/Dropzone';
import Row from '../../../components/common/Row';
import TextField from '../../../components/common/TextField';
import Button from '../../../components/common/Button';
import UnSavedModal from '../../../components/UnSavedModal';
import DeleteModal from '../../../components/DeleteModal';
import styled from 'styled-components';
// import {
//   Body,
//   Footer,
//   DetailContainer,
//   DropzoneContainer,
//   NFTContainer,
//   Title,
// } from './nft.styles';
import { NFT as NFTType } from '../../../types';
import useIsMobile from '../../../hooks/useIsMobile';
import { client } from './../../../utils/client';
import { SpinnerCircular } from 'spinners-react';

const NFT: React.FC = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  const { id, mode } = router.query;
  const readonly = !(mode === 'create' || mode === 'edit');
  const initialForm: NFTType =
    mode === 'create'
      ? {
          id: 1,
          name: '',
          owner: '',
          chain: '',
          ranking: '',
          rarity: '',
          link: '',
          image: null,
        }
      : {
          id: 1,
          name: 'Antares',
          owner: '12e45dee8po9ed5...',
          chain: 'Ethereum',
          ranking: '#10',
          rarity: '#10',
          link: 'https://member.starledger.org/d245jdk/',
          image: '/assets/images/star.png',
        };
  const [isOpenUnSaveModal, setIsOpenUnSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [pastForm, setPastForm] = useState<NFTType>({
    id: 1,
    name: '',
    owner: '',
    chain: '',
    ranking: '',
    rarity: '',
    link: '',
    image: null,
  });
  const [form, setForm] = useState<NFTType>(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id && id !== 'new')
      setIsLoading(true);
      // @ts-ignore
      client.getNft({ hip:  parseInt(id)}).then((res) => {
        console.log(res);
        setIsLoading(false)
        // setForm({
        //   id: res.hip.toString(),
        //   name: res.name,
        //   owner: "",
        //   chain: "",
        //   image: '/assets/images/material.png',
        //   ranking: res.ranking.toString(),
        //   rarity: res.rarity,
        //   link: ""
        // });
      })
      .catch(err => console.log(err)
      );
  }, [router]);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChangeFile = (file: string | null) => {
    setForm({ ...form, image: file });
  };

  const handleEdit = () => {
    setPastForm(form);
    router.push(`/nfts/${id}/edit`);
  };
  const handleDelete = () => {
    setIsOpenDeleteModal(false);
  };
  const handleSave = () => {
    router.push(`/nfts/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const handleCancelSave = () => {
    setForm(pastForm);
    router.push(`/nfts/${id}/view`);
    setIsOpenUnSaveModal(false);
  };
  const breadcrumbs = ['Home', 'NFT’s', 'Add New'];

  return (
    <NFTContainer>
      <Breadcrumb redirectURL="/nfts" breadcrumbs={breadcrumbs} />
      <Title>{isMobile && 'Edit'} NFTs</Title>
      <Body>
      {isLoading && <SpinnerCircular style={{  position: "fixed", top: "50%", left:"50%", marginTop:"-80px"}} size={100} thickness={60} speed={121} color="black" secondaryColor="white" />}
        <DropzoneContainer>
          <Dropzone
            label="Star Image"
            value={form.image}
            readonly={readonly}
            onChange={(file) => handleChangeFile(file)}
          />
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
            <Col>
              <TextField
                label="Owner"
                name="owner"
                icon="/assets/images/icons/alternate-email.svg"
                value={form.owner}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col lg={6} sm={12}>
              <TextField
                label="Ranking"
                name="ranking"
                value={form.ranking}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col lg={6} sm={12}>
              <TextField
                label="Rarity"
                name="rarity"
                value={form.rarity}
                onChange={handleChange}
                readonly={readonly}
              />
            </Col>
            <Col>
              <TextField
                label="Link to related Space Object"
                name="link"
                value={form.link}
                onChange={handleChange}
                readonly={readonly}
                icon="/assets/images/icons/link.svg"
              />
            </Col>
          </Row>
        </DetailContainer>
      </Body>
      <Footer>
        {mode === 'edit' && (
          <>
            <Button onClick={() => setIsOpenUnSaveModal(true)}>
              Cancel changes
            </Button>
            <Button color="success" onClick={handleSave}>
              Save changes
            </Button>
          </>
        )}
        {mode === 'create' && (
          <Button color="success" onClick={handleSave}>
            Create NFT
          </Button>
        )}
        {mode === 'view' && (
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
        pageName='NFT'
        isOpen={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
    </NFTContainer>
  );
};

export default NFT;

export const NFTContainer = styled.div`
  padding-top: 32px;
  color: #fff;
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  line-height: 100%;
  color: #fcfcfd;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid #31343f;
  }
`;

export const Body = styled.div`
  display: flex;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;
export const DropzoneContainer = styled.div`
  width: 364px;
  flex-shrink: 0;

  @media (max-width: 1280px) {
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const DetailContainer = styled.div`
  width: 100%;
  padding-left: 60px;

  @media (max-width: 1280px) {
    padding-left: 0;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button {
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    & > button {
      width: 100%;
      margin-left: 0;
      margin-bottom: 16px;
    }
  }
`;

