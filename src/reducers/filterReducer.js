import { CLEAR_FILTERS, SET_FILTERS, UPDATE_FILTERS } from '../actions/filterActions';

const initialState = {
  role: '',
  numberOfEmployees: '',
  experience: '',
  location: '',
  minBasePay: '',
  companyName: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case CLEAR_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;
