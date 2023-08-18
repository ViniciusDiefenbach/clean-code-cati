import axios from 'axios'
import { serverUrl } from '../../config/api-server'

export const api = axios.create({
  baseURL: serverUrl.url
})
