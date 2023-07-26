declare interface Product {
  _id: string;
  name: string;
  category: string | Category;
  price: number;
  imageCover: string;
  images: string[];
  brand?: string;
  stock: number;
  characteristics:
    | {
        name: string;
        parameter: string;
      }[]
    | [];
  slug: string;
}
