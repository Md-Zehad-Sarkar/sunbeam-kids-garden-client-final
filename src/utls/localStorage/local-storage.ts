//set to local storage
export const setToLocalStorage = (token: string) => {
  localStorage.setItem("accessToken", token);
};

//get from local storage
export const getFromLocalStorage = () => {
  localStorage.getItem("accessToken");
};

//remove from local storage
export const removeFromLocalStorage = () => {
  localStorage.getItem("accessToken");
};
