import React, { useEffect } from "react"

import Router from "./Router/Router"
import { fetchAllGroups } from "./firebase"
import { useDispatch } from "react-redux"
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchAllGroups(dispatch)
  }, [])
  return <Router />
}

export default App
