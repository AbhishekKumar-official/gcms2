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
    fetchAllChat("Pr8AmMv003cL6VNzvuKEcm33L5i2CnY0ZJnawDTmnUaeJFNqPMeu1BK2", dispatch)
  }, [dispatch])

  return <Router />
}

export default App
