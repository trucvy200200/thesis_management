// **  Initial State
import { LOGOUT, LOGIN } from "../../actions/auth"

const initialState = {
  userData: {},
  dataLogin: {}
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action?.data,
      }
    case LOGOUT:
      const obj = { ...action }
      delete obj.type
      return { ...state, userData: {}, ...obj }

    default:
      return state
  }
}

export default authReducer
