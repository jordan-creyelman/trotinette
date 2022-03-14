import { createContext } from "react";
import { useContext } from "react";


export const UserContext = createContext(null);

export function useUserContext() {
    return useContext(UserContext);
}