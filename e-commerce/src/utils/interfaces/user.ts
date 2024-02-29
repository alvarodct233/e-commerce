export interface User {
  id: number;
  name: string;
  password: string;
  username: string;
  email: string;
  cart: ProductCart[];
  wishlist: number[];
}

export interface ProductCart {
  id: number;
  quantity: number;
  option: number;
}

export interface UserOptions {
  price: number;
  quantity: number;
}
