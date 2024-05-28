export const SET_FILTERS = 'SET_FILTERS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const updateFilters = (filter) => ({
  type: UPDATE_FILTERS,
  payload: filter,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
