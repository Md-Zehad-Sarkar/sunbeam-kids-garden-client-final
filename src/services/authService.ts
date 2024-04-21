import { decodeJwtToken } from "@/utls/jwt-decoded";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utls/localStorage/local-storage";

export const authService = (token: string) => {
  return setToLocalStorage(token);
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage();
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage();
};

//get user info
export const authInfo = () => {
  const userToken: any = getFromLocalStorage();
  if (userToken) {
    const userInfo: any = decodeJwtToken(userToken);
    return { ...userInfo };
  } else {
    return {};
  }
};
