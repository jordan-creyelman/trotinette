import { createStore } from 'redux';
import useReducer from './userReducer';


const store = createStore(useReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;