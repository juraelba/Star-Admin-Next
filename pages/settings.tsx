import React, { useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';
import Button from '../components/common/Button';
import Col from '../components/common/Col';
import Row from '../components/common/Row';
import Select from '../components/common/Select';
import Tab from '../components/common/Tab';
import TextField from '../components/common/TextField';
import { Tab as TabType } from '../types';
import styled from 'styled-components';
// import {
//   Avatar,
//   BackButton,
//   Body,
//   Description,
//   Form,
//   Header,
//   SettingsContainer,
//   SocialLinkLabel,
//   SocialLinks,
//   SocialItems,
//   TabContainer,
//   Title,
// } from './settings.styles';
import BackIcon from '../public/assets/images/icons/back.svg';
import AlertIcon from '../public/assets/images/icons/alert-circle.svg';
import EmailIcon from '../public/assets/images/icons/alternate-email-success.svg';
import DotIcon from '../public/assets/images/icons/dot.svg';
import TwitterIcon from '../public/assets/images/icons/twitter.svg';
import InstagramIcon from '../public/assets/images/icons/instagram.svg';
import AvatarUploader from '../components/AvatarUploader';

const Settings: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('profile');
  const tabs: TabType[] = [
    {
      id: 'profile',
      name: 'My Profile',
    },
    {
      id: 'payment',
      name: 'Payment Methods',
    },
    {
      id: 'subscriptions',
      name: 'Subscriptions',
    },
    {
      id: 'billingHistory',
      name: 'Billing History',
    },
  ];
  const handleChangeTab = (id: string) => setSelectedTab(id);
  const [form, setForm] = useState({
    displayName: 'Jace Bednar',
    username: 'jacebednar',
    location: 'Los Angeles, CA, USA',
    walletAddress: 'hk980io...73bz880',
    address: '90 Vine St. Los Angeles',
    address2: '',
    city: 'Los Angeles',
    country: 'CA',
    zipcode: '92337',
  });

  const options = [
    {
      value: 1,
      label: 'CV',
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target)
      setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleBackHome = () => Router.push('/');

  return (
    <SettingsContainer>
      <Header>
        <Title>Jace Bednar</Title>
        <Description>
          Update your profile info and manage your wallet
        </Description>
        <BackButton onClick={handleBackHome}>
          <Image src={BackIcon} alt=":( Not Found" />
          Back to Home
        </BackButton>
      </Header>
      <TabContainer>
        <Tab
          tabs={tabs}
          active={selectedTab}
          size="small"
          onChange={handleChangeTab}
        />
      </TabContainer>
      <Body>
        <Form>
          <Row>
            <Col>
              <TextField
                label="Display name"
                name="displayName"
                value={form.displayName}
                onChange={handleChange}
                icon={AlertIcon}
                status="error"
                helperText="Please enter a valid display name"
              />
            </Col>
            <Col>
              <TextField
                label="Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                icon={EmailIcon}
                status="success"
                helperText="Username is available"
              />
            </Col>
            <Col>
              <TextField
                label="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <TextField
                label="Wallet address"
                name="walletAddress"
                value={form.walletAddress}
                onChange={handleChange}
                icon={DotIcon}
                mb={16}
              />
              <Button
                size="sm"
                color="light-warning"
                onClick={() => {}}
                style={{ marginBottom: 40 }}
              >
                Disconnect wallet
              </Button>
            </Col>
            <Col>
              <TextField
                label="Mailing Address"
                name="address"
                value={form.address}
                onChange={handleChange}
                mb={16}
              />
            </Col>
            <Col>
              <TextField
                name="address2"
                value={form.address2}
                onChange={handleChange}
                placeholder="Address line 2"
                mb={16}
              />
            </Col>
            <Col>
              <TextField
                name="city"
                value={form.city}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Select options={options} />
            </Col>
            <Col>
              <TextField
                name="zipcode"
                value={form.zipcode}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <SocialLinks>
                <SocialLinkLabel>Social links</SocialLinkLabel>
                <SocialItems>
                  <Button>
                    <Image src={TwitterIcon} />
                    Connect twitter
                  </Button>
                  <Button color="success">
                    <Image src={InstagramIcon} />
                    @jacebednar
                  </Button>
                </SocialItems>
              </SocialLinks>
            </Col>
          </Row>
        </Form>
        <Avatar>
          <AvatarUploader />
        </Avatar>
      </Body>
    </SettingsContainer>
  );
};

export default Settings;

export const SettingsContainer = styled.div``;

export const Header = styled.div`
  position: relative;
  margin-bottom: 48px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 48px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #353945;
  border-radius: 90px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #fcfcfd;
  background: none;

  & > span {
    display: flex !important;
    margin-right: 12px !important;
  }
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 48px;
  line-height: 100%;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #7f8596;
`;

export const TabContainer = styled.div`
  padding: 10px 0;
  margin-bottom: 48px;
`;

export const Body = styled.div`
  display: flex;
  padding: 48px 0;
  border-top: 1px solid #31343f;
`;

export const Form = styled.div`
  padding-right: 90px;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 256px;
  flex-shrink: 0;
`;

export const SocialLinkLabel = styled.label`
  display: flex;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcf9;
  margin-bottom: 12px;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SocialItems = styled.div`
  display: flex;
  margin: 0 -12px;

  & > button {
    margin: 0 12px;

    & > span {
      margin-right: 8px !important;
    }
  }
`;

