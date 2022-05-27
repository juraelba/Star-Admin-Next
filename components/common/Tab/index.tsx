import React from "react";
import { TabContainer, TabItem } from "./styles";
import { Tab as TabType } from "../../../types";

interface TabProps {
  tabs: TabType[];
  active: string;
  onChange: (id: string) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, active, onChange }) => {
  return (
    <TabContainer>
      {tabs.map((tab: TabType) => (
        <TabItem
          active={active === tab.id}
          key={tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.name}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default Tab;
