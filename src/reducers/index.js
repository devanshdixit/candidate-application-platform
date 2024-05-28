import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer,
});

export default rootReducer;
