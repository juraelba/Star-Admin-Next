import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import SendCrypto from "./SendCrypto";
import { Route } from "../../../types";
import {
  SidebarContainer,
  LogoContainer,
  Menu,
  SendCryptoContainer,
} from "./styles";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const routes: Route[] = [
    {
      id: "home",
      label: "Home",
      path: "/",
      icon: "/assets/images/icons/home-warning.svg",
    },
    {
      id: "spaceobjs",
      label: "Space Objects",
      path: "/objects",
      icon: "/assets/images/icons/star-warning.svg",
    },
    {
      id: "nfts",
      label: "NFT’s",
      path: "/nfts",
      icon: "/assets/images/icons/image-warning.svg",
    },
    {
      id: "articles",
      label: "News Articles",
      path: "/articles",
      icon: "/assets/images/icons/paper-warning.svg",
    },
    {
      id: "trivia",
      label: "Trivia",
      path: "/trivia",
      icon: "/assets/images/icons/game-warning.svg",
    },
    // {
    //   id: "settings",
    //   label: "Settings",
    //   path: "/settings",
    //   icon: SettingsIcon,
    // },
  ];

  const isActive = (path: string) => {
    if (path === "/") return router.pathname === path;
    return router.pathname.indexOf(path) > -1;
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <Image src="/assets/images/logo.svg" width={178} height={32} alt=":( Not Found" />
      </LogoContainer>
      <Menu>
        {routes.map((route: Route) => (
          <MenuItem key={route.id} active={isActive(route.path)} {...route} />
        ))}
      </Menu>
      <SendCryptoContainer>
        <SendCrypto />
      </SendCryptoContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
