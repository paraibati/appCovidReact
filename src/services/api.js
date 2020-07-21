import axios from 'axios'
require("dotenv").config()

// http://localhost:3000/api
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL_ONLINE || process.env.REACT_APP_API_URL_LOCALHOST })

export default api