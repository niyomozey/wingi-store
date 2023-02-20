export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_FILTER = 'SET_FILTER';

interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

interface SetFilterAction {
  type: typeof SET_FILTER;
  payload: string;
}

export type FilterActionTypes = SetSearchTermAction | SetFilterAction;
