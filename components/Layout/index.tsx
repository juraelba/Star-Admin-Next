import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import { LayoutContainer, MainContainer, PageContent } from "./styles";
import Topbar from "./Topbar";
import MobileTopbar from "./MobileTopbar";
import useIsMobile from "../../hooks/useIsMobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleRouteChange = () => {
      if (isMobile) setIsOpen(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <LayoutContainer>
      <Sidebar
        isOpen={!isMobile || (isMobile && isOpen)}
        onClose={() => setIsOpen(false)}
      />
      <MainContainer>
        {isMobile ? (
          <MobileTopbar onOpen={() => setIsOpen(true)} />
        ) : (
          <Topbar />
        )}
        <PageContent>{children}</PageContent>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
