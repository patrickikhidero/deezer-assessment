/* eslint-disable no-param-reassign */
import axios from "axios";

/** Base Url for api */
const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

/** axios API configuration for sending internal requests */
const deezerApi = axios.create({
  baseURL: apiUrl,
});
deezerApi.interceptors.request.use(async (config) => {
  // config.headers["Content-Type"] = "application/json";
  config.headers["Content-Type"] = "application/x-www-form-urlencoded";
  // config.headers.Authorization = `Bearer ${TOKEN}`;
  return config;
});

export { deezerApi };
