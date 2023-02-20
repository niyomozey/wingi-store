import { SET_SEARCH_TERM, SET_FILTER, FilterActionTypes } from './filterType';

export const setSearchTerm = (searchTerm: string): FilterActionTypes => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});

export const setFilter = (filter: string): FilterActionTypes => ({
  type: SET_FILTER,
  payload: filter,
});
