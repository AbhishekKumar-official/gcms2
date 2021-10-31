import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import Routes from "./Router/Routes"
import { fetchAllGroups } from "./firebase"
import { useDispatch } from "react-redux"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchAllGroups(dispatch)
  }, [])
  return <Routes />
}

export default withRouter(App)
