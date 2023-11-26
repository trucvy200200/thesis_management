// ** Redux Imports
import { combineReducers } from "redux"
// import user from "../../pages/user/store/reducer"
// ** Reducers Imports
import authReducer from "./auth"

const rootReducer = combineReducers({
    authReducer,
    // user,

})

export default rootReducer
