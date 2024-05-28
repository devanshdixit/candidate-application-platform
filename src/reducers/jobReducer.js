import {
    FETCH_JOBS_REQUEST,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAILURE,
  } from '../actions/jobActions';
  
  const initialState = {
    jobs: [],
    loading: false,
    error: null,
    page: 1,
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOBS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_JOBS_SUCCESS:
        return {
          ...state,
          loading: false,
          jobs: action.payload.page === 1 ? action.payload.jobs : [...state.jobs, ...action.payload.jobs],
          page: action.payload.page,
        };
      case FETCH_JOBS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  