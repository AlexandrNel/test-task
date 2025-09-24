import axios from "axios";

const BASE_API = process.env.PUBLIC_API_URL;

const instance = axios.create({
  baseURL: BASE_API,
});

export default instance;
