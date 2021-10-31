import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import setUserReducer from "../Features/Users/redux/userReducer"
const persistConfig = {
  key: "root", // from wher to start the pwersist
  storage, // accesing the local or session which ever imported
  whitelist: [], //reducers we want to persist eg : "cart"
}

const rootReducer = combineReducers({
  users: setUserReducer,
})

export default persistReducer(persistConfig, rootReducer)
