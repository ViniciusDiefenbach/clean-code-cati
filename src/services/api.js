import axios from 'axios'
import { apiServer } from '../../config/api-server'

export const api = axios.create({
  baseURL: apiServer.url
})
