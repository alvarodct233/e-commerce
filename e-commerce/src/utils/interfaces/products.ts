export interface Product {
  id: string;
  name: string;
  image: string;
  year: string;
  author: Author;
  synopsis: string;
  rate: number;
  genre: string[];
  options: Option[];
}

export enum FilterType {
  category = 'CATEGORY',
  name = 'NAME',
}

export interface AddProduct {
  price: number;
  quantity: number;
}

export enum TypesAddProduct {
  AddProduct = 'ADDING',
  SubtractProduct = 'SUBTRACTING',
}

export interface ActionAddProduct {
  type: TypesAddProduct;
}

export interface Author {
  name: string;
  description: string;
  image: string;
}

export interface Option {
  cover: Cover;
  price: number;
}

export enum Cover {
  Ebook = 'Ebook',
  Hardcover = 'Hardcover',
  Kindle = 'Kindle',
  Paperback = 'Paperback',
}
