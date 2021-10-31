import React from "react"
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"
import ProtectedRoutes from "../../Router/ProtectedRoutes"
import ChatLayout from "./Layout/ChatLayout"
const Chat = () => {
  let { path, url } = useRouteMatch()
  return (
    <Switch>
      <Route path={path}>
        <ChatLayout />
      </Route>
    </Switch>
  )
}

export default Chat
