import { LOGIN, LOGOUT } from "./userTypes";
import Cookies from 'js-cookie';


const initialState = {
    token: Cookies.get('token') || null,
    id: Cookies.get('id') || null,
    isLoggedIn: Cookies.get('isLoggedIn') || false
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.userToken,
        id: action.userID,
        isLoggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        id: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
}

export default userReducer;