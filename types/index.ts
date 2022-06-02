export interface Activity {
  id: number;
  title: string;
  date: string;
  status: "Completed" | "Pending";
  author: string;
}

export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  content: any;
  publishedAt: string;
}

export interface NFT {
  id: number;
  name: string;
  owner: string;
  chain: string;
  image: any;
  ranking: string;
  rarity: string;
  link: string;
}

export interface Option {
  value: number | string;
  label: string;
}

export interface Route {
  id: string;
  label: string;
  path: string;
  icon?: any;
}

export interface SpaceObject {
  id: number;
  name: string;
  constellation: string;
  image: any;
  abbreviation: string;
  rightAccession: string;
  declination: string;
  stellar: string;
  bvColor: string;
}

export interface Tab {
  id: string;
  name: string;
}

export interface Action {
  id: string | number;
  label: string;
  icon?: any;
  action: () => void;
}
