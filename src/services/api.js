import axios from "axios";
import { serverUrl } from "../../config/server-url";

export const api = axios.create({
  baseURL: serverUrl.url,
});
