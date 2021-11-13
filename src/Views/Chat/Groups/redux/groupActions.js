import { groupActionType } from "./groupTypes"

export const setGroupList = (data) => {
  return async (dispatch) => {
    dispatch({
      type: groupActionType.SET_GROUP_LIST_BEGIN,
    })

    try {
      dispatch({
        type: groupActionType.SET_GROUP_LIST_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: groupActionType.SET_GROUP_LIST_FAILURE,
        payload: {},
      })
    }
  }
}
