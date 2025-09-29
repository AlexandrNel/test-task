import axios from "axios";
import { PUBLIC_API_URL } from "../lib/consts";

const instance = axios.create({
  baseURL: PUBLIC_API_URL,
});

export { instance as axios };
