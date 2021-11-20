import { usersActionType } from "./userTypes"

import { hanndleUserSignOut, hanndleSignInWithEmailAndPassword } from "../../../firebase"

export const setUser = (isUserExist, email, password, navigator) => {
  return async (dispatch) => {
    dispatch({
      type: usersActionType.SET_USER_BEGIN,
    })

    try {
      let response = {}
      if (isUserExist) {
        response = await hanndleSignInWithEmailAndPassword(email, password)

        if (response && Object.keys(response).length > 0) {
          sessionStorage.setItem("user", JSON.stringify(response))
          navigator("/dashboard")
        }
      } else {
        await hanndleUserSignOut(navigator)
        response = {}
      }

      dispatch({
        type: usersActionType.SET_USER_SUCCESS,
        payload: response,
      })
    } catch (err) {
      dispatch({
        type: usersActionType.SET_USER_FAILURE,
        payload: {},
      })
    }
  }
}

export const fetchAllUsers = (users) => {
  return async (dispatch) => {
    dispatch({
      type: usersActionType.FETCH_ALL_USERS,
      payload: users,
    })
  }
}
export const fetchAllChats = (users) => {
  return async (dispatch) => {
    dispatch({
      type: usersActionType.FETCH_ALL_CHATS,
      payload: users,
    })
  }
}
