export type TProduct = {
  _id?: string;
  id?: string;
  image: string;
  title: string;
  price: string | number;
  ratings: number;
  brand: string;
  category: string;
  description: string;
  flashSale: boolean;
  createdAt: string;
  productId?: string;
  email?: string;
  quantity: number;
};

export type TReview = {
  date?: string;
  email?: string;
  image: string;
  name?: string;
  reviews: string;
  role?: string;
  _id?: string;
  productId?: string;
};
