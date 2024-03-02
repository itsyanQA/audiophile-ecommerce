type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type Gallery = {
  first: Image;
  second: Image;
  third: Image;
};

type Other = {
  slug: string;
  name: string;
  image: Image;
};

export type IncludedItem = {
  quantity: number;
  item: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: Other[];
};

export type Category = "HEADPHONES" | "SPEAKERS" | "EARPHONES";
