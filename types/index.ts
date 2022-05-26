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
