import React, { useEffect } from "react"

import Router from "./Router/Router"
import { fetchAllGroups, fetchAllPeople, hasParticularPerson, fetchAllChat } from "./firebase"
import { useDispatch } from "react-redux"
const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchAllGroups(dispatch)
    fetchAllPeople(dispatch)
    hasParticularPerson("-MnMAwTcBsuJJ58_7kVb")
    fetchAllChat("Ashu40giw1CLs8h7uSoZgLfhJHK1Ccv1", dispatch)
  }, [dispatch])

  return <Router />
}

export default App
