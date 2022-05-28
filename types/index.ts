export interface Activity {
  id: number;
  title: string;
  date: string;
  status: "Complete" | "Pending";
  author: string;
}

export interface Route {
  id: string;
  label: string;
  path: string;
  icon: any;
}

export interface Tab {
  id: string;
  name: string;
}

export interface SpaceObject {
  id: number;
  name: string;
  constellation: string;
  image: any;
  appreviation: string;
  rightAccession: string;
  declination: string;
  stellarConstellation: string;
  bvColor: string;
}
