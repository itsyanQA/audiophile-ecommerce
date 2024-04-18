import { z } from "zod";

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

export type Cart = {
  quantity: number;
  name: string;
  price: number;
  image: Image;
  id: number;
};

export type CartPrices = {
  totalItemPrice: number;
  vat: number;
  grandTotal: number;
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

export type TPaymentMethod = "e-Money" | "Cash on Delivery";

export const formScheme = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  phone: z.number({ invalid_type_error: "Invalid phone" }).gte(1000000, "Number is too short").lte(999999999999999, "Number is too long"),
  address: z.string({ invalid_type_error: "Invalid address" }).min(5, "Invalid address"),
  zipCode: z.string({ invalid_type_error: "Invalid zip-code" }).min(5, "Zip-code too short"),
  city: z.string().min(1, "Field is required"),
  country: z.string().min(4, "Country name is too short"),
  eMoneyNumber: z
    .number({ invalid_type_error: "Invalid money number" })
    .gte(100000000, "Number must have 9 digits")
    .lte(999999999, "Number must have 9 digits")
    .optional(),
  eMoneyPin: z
    .number({ invalid_type_error: "Invalid pin" })
    .gte(1000, "Pin must have 4 digits")
    .lte(9999, "Pin must have 4 digits")
    .optional(),
});

export type TFormScheme = z.infer<typeof formScheme>;

export type Page = "/" | "/headphones" | "/speakers" | "/earphones" | "/product" | "/checkout";

export type Device = "mobile" | "tablet" | "desktop";
