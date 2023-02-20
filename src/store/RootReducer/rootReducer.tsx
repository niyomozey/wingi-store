import { combineReducers } from "redux";
import productReducer from "../../reducers/productReducer";
import userReducer from "../../reducers/userReducer";
import filtersReducer from "../filters/filtersReducer"

const rootReducer = combineReducers({
	productReducer,
	userReducer,
	filters: filtersReducer
})

export default rootReducer;