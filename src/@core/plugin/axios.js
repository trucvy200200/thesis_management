import axios from "axios"
import jwtDefaultConfig from "../auth/jwt/jwtDefaultConfig"
import { BASE_CONSTANT } from "../../constants/base-constant"

const instances = axios.create({
  baseURL: BASE_CONSTANT.BASE_URL
})

instances.interceptors.request.use(
  (config) => {
    // ** Get token from localStorage
    const accessToken = localStorage.getItem(jwtDefaultConfig.storageTokenKeyName)

    // ** If token is present add it to request's Authorization Header
    if (accessToken) {
      // ** eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ** Add request/response interceptor
instances.interceptors.response.use(
  (response) => response,
  async (error) => {
    try {
      if (error.response) {
        // Request made and server responded
        const { response } = error
        if (response && response.status === 401) {
          // ** Remove user, accessToken & refreshToken from localStorage
          localStorage.removeItem(jwtDefaultConfig.storageUserData)
          localStorage.removeItem(jwtDefaultConfig.storageTokenKeyName)
          window.location.href = "/login"
        } else {
          return Promise.reject(error)
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message)
      }
    } catch (e) {
      if (e?.response?.data?.error?.statusCode === 401) {
        // ** Remove user, accessToken & refreshToken from localStorage
        localStorage.removeItem(jwtDefaultConfig.storageUserData)
        localStorage.removeItem(jwtDefaultConfig.storageTokenKeyName)
        window.location.href = "/login"
      }
    }
  }
)
export default instances