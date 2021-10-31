import { loaderActionType } from "./loaderTypes"
const initialState = {
  loading: false,
}

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case loaderActionType.SET_LOADER:
      return { loading: action.payload }

    default:
      return state
  }
}
export default loadingReducer
