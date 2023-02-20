import { ProductAction, ProductActionTypes as action } from "./ProductAction";

export interface Product {
    id: number;
    name: string;
    price: number | string;
    description: string;
    productOwner: string;
    category: string;
    imageUrl: string;
}
export interface addProduct {
    type: typeof action.ADD_PRODUCT;
    payload: Product;
}

export interface updateProduct {
    type: typeof action.UPDATE_PRODUCT;
    payload: {
        id: number;
        product: Product;
    };
}
export interface deleteProduct {
    type: typeof action.DELETE_PRODUCT;
    payload: number ;
}

export const updateProduct = (id: number, product: Product): ProductActionTypes => {
    return {
        type: action.UPDATE_PRODUCT,
        payload: { id, product },
    };
};
export const addProduct = (product: Product): ProductActionTypes => {
    return {
        type: action.ADD_PRODUCT,
        payload: product,
    };
};
export const deleteProduct = (id: number): ProductActionTypes => {
    return {
        type: action.DELETE_PRODUCT,
        payload: id
    };
};



export type ProductActionTypes = addProduct | updateProduct | deleteProduct;

