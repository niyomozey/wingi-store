import { Product } from "./ProductType";

export enum ProductActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  LOAD_PRODUCTS = "LOAD_PRODUCTS"
}

export interface AddProductAction {
  type: typeof ProductActionTypes.ADD_PRODUCT;
  payload: Product;
}

export interface UpdateProductAction {
  type: typeof ProductActionTypes.UPDATE_PRODUCT;
  payload: Product | any;
}

export interface DeleteProductAction {
  type: typeof ProductActionTypes.DELETE_PRODUCT;
  payload: number;
}

export interface LoadProductsAction {
  type: typeof ProductActionTypes.LOAD_PRODUCTS;
  payload: Product[];
}


export type ProductAction = AddProductAction | UpdateProductAction | DeleteProductAction | LoadProductsAction;
