import { LOGIN, LOGOUT } from "./userTypes"

const logIn = (userID) => {
    return {
        type: LOGIN,
        userID
    };
};

const logOut = () => {
    return {
        type: LOGOUT
    };
};

export { logIn, logOut };