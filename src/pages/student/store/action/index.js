// import axios from 'axios'
import { configHeader } from "../../../../@core/plugin/configHeader"
import axios from "axios"
export const GET_USER_INFO_BY_ID = "GET_USER_INFO_BY_ID"
export const UPDATE_USER_INFO = "UPDATE_USER_INFO"
export const getUserInfoById = (id, handleError) => {
  return async (dispatch) => {
    await axios.post(`/api/personal`, { id: id }, configHeader).then((response) => {
      dispatch({
        type: GET_USER_INFO_BY_ID,
        userInfo: response?.data?.userData,
      })
    })
      .catch(e => {
        if (e.response.status === 403) {
          console.log(1)
          handleError()
        }
      })

  }
}

export const updateUserInfo = (id, handleError) => {
  return async (dispatch) => {
    await axios.post(`/api/update-by-id`, { id: id }, configHeader).then((response) => {
      dispatch({
        type: UPDATE_USER_INFO,
        userInfo: response?.data?.userData,
      })
    })
      .catch(e => {
        if (e.response.status === 403) {
          console.log(1)
          handleError()
        }
      })

  }
}