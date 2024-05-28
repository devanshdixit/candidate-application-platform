import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import jobReducer from '../reducers/jobReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
    jobs: jobReducer,
    filters: filterReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
