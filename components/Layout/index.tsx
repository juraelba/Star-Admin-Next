import React from "react";
import Sidebar from "./Sidebar";
import { LayoutContainer, MainContainer, PageContent } from "./styles";
import Topbar from "./Topbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContainer>
        <Topbar />
        <PageContent>{children}</PageContent>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
