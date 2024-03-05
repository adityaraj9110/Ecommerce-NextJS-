export type ApiResponseType <T>= {
  limit: number;
  products:T[]; // it will be generic type
  skip: number; 
  total: number;
};

export type DataType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ResponseType = {
  products: DataType[];
};

export enum LocalStorageKeys {
  CART_ITEMS = "cartItems",
  PAGE_NUMBER = "pageNumber",
  REGISTER_USERS = "registeredUsers",
  CURRENT_USER = "currentuser",
  OFFSET = "offset"
}

export type FormValues = {
  username: string;
  contact: string;
  email: string;
  pin: string;
  address: string;
  state: string;
  password: string;
  confirmPassword: string;
};

export type FormValuesForLogin = {
  email: string;
  password: string;
};