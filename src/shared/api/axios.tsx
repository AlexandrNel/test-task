import axios from "axios";
import { API_URL } from "../lib/consts";

const instance = axios.create({
  baseURL: API_URL,
});

export { instance as axios };
