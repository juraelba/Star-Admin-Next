import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import SendCrypto from "./SendCrypto";
import Logo from "../../../assets/images/logo.svg";
import { Route } from "../../../types";
import {
  SidebarContainer,
  LogoContainer,
  Menu,
  SendCryptoContainer,
} from "./styles";
import HomeIcon from "../../../assets/images/icons/home-warning.svg";
import StarIcon from "../../../assets/images/icons/star-warning.svg";
import ImageIcon from "../../../assets/images/icons/image-warning.svg";
import PaperIcon from "../../../assets/images/icons/paper-warning.svg";
import SettingsIcon from "../../../assets/images/icons/settings-warning.svg";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const routes: Route[] = [
    { id: "home", label: "Home", path: "/", icon: HomeIcon },
    {
      id: "spaceobjs",
      label: "Space Objects",
      path: "/objects",
      icon: StarIcon,
    },
    { id: "nfts", label: "NFT’s", path: "/nfts", icon: ImageIcon },
    {
      id: "articles",
      label: "News Articles",
      path: "/articles",
      icon: PaperIcon,
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
        <Image src={Logo} width={178} height={32} alt=":( Not Found" />
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
