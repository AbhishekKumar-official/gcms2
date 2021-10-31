import { groupActionType } from "./groupTypes"
const initialState = {
  listGroup: {},
  loading: false,
}

const setGroupListReducer = (state = initialState, action) => {
  switch (action.type) {
    case groupActionType.SET_GROUP_LIST_BEGIN:
      return {
        ...state,
        loading: true,
      }
    case groupActionType.SET_GROUP_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        listGroup: action.payload,
      }
    case groupActionType.SET_GROUP_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
export default setGroupListReducer
