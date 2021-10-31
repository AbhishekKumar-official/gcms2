import React from "react"
import { useRouteMatch } from "react-router-dom"
const Groups = ({ match }) => {
  let { path, url } = useRouteMatch()
  console.log("match: ::", path, url)
  return <div>Groups</div>
}

export default Groups
