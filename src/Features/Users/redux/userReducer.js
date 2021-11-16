import { usersActionType } from "./userTypes"
const initialState = {
  currentUser: {},
  loading: false,
  AllUsers: [],
}

const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActionType.SET_USER_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case usersActionType.SET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      }
    case usersActionType.SET_USER_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case usersActionType.FETCH_ALL_USERS:
      return {
        ...state,
        loading: false,
        AllUsers: action.payload,
      }

    default:
      return state
  }
}
export default setUserReducer
