import {
  GET_USER_INFO_BY_ID, UPDATE_USER_INFO
} from "../action"

// ** Initial State
const initialState = {
  users: [],
  userInfo: null,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_BY_ID:
      return {
        ...state,
        userInfo: action.userInfo
      }
    case UPDATE_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }
    default:
      return { ...state }
  }
}
export default users
