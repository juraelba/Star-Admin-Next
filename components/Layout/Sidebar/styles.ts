import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 256px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(228, 228, 228, 0.1);
  padding-top: 48px;
  padding-bottom: 20px;
`;

export const LogoContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 36px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  padding: 0 20px;
  margin: -4px 0;
`;

export const SendCryptoContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;
