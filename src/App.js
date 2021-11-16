import React, { useEffect } from "react"

import Router from "./Router/Router"
import { fetchAllGroups, fetchAllPeople } from "./firebase"
import { useDispatch } from "react-redux"
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchAllGroups(dispatch)
    fetchAllPeople(dispatch)
  }, [dispatch])

  return <Router />
}

export default App
