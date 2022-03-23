import { applyMiddleware } from 'redux';
import { compose } from 'redux';
import { createStore } from 'redux';
import useReducer from './userReducer';
import thunk from "redux-thunk";

const store = createStore(
  useReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
);

store.subscribe(() => console.log(store.getState()));
  
export default store;