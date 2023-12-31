export type Challenge = {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  location: Location;
  difficulty: number;
  defaultScore: number;
};

export type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  address: string;
};
