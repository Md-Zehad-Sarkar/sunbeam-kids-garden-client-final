//set to local storage
export const setToLocalStorage = (token: string) => {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem("token", token);
};

//get from local storage
export const getFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem("token");
};

//remove from local storage
export const removeFromLocalStorage = () => {
  return localStorage.removeItem("token");
};
