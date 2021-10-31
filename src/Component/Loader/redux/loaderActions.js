import { loaderActionType } from "./loaderTypes"

export const setLoading = (isLoading) => ({
  type: loaderActionType.SET_LOADER,
  payload: isLoading,
})
