import axios from "axios";
import { API_URL } from "../util/constant";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
