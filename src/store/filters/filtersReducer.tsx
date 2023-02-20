import { SET_SEARCH_TERM, SET_FILTER, FilterActionTypes } from './filterType';

interface FiltersState {
  searchTerm: string;
  filter: string;
}

const initialState: FiltersState = {
  searchTerm: '',
  filter: 'all',
};

const filtersReducer = (state = initialState, action: FilterActionTypes): FiltersState => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
