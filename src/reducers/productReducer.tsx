import { ProductAction, ProductActionTypes } from "../components/Product/ProductAction";
import { Product } from "../components/Product/ProductType";
import products from "../service/products";

export interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: products
};

const productReducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case ProductActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product => product.id === action.payload.id ? action.payload.product : product)
      };
    case ProductActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case ProductActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
