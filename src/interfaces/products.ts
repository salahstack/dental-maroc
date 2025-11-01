export interface ProductProps {
  id: number;
  image: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  newArrival?: boolean;
  bestSeller?: boolean;
};