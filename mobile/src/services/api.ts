import axios from "axios";
import { API_SERVER } from "../../constants/api-server";

export const api = axios.create({
  baseURL: API_SERVER.URL,
});
