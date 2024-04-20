import {
  getFromLocalStorage,
  getNewToken,
  setToLocalStorage,
} from "@/utls/localStorage/local-storage";
import axios from "axios";

export const axiosInstance = axios.create();
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getFromLocalStorage();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    const responseObj = {
      data: response?.data?.data,
    };
    return responseObj;
  },

  async function (error) {
    console.log("error", error);
    const config = error.config;
    // console.log("config", config);

    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;
      const response = await getNewToken();
      console.log("res token", response);

      const token = response?.data?.token;

      config.headers["Authorization"] = token;

      setToLocalStorage(token);
      return axiosInstance(config);
    } else {
      const errorResponseObject = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.message,
      };

      return errorResponseObject;
    }
  }
);
