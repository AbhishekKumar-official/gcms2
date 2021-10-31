import { usersActionType } from "./userTypes"
import { hanndleUserSignOut, hanndleSignInWithEmailAndPassword } from "../../../firebase"

export const setUser = (isUserExist, email, password, history) => {
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
          history.push("/dashboard")
        }
      } else {
        await hanndleUserSignOut(history)
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
