import React, { Component } from "react"

import { Switch } from "react-router-dom"

//importing routes...
import ProtectedRoutes from "./ProtectedRoutes"
import PublicRoutes from "./PublicRoutes"
//importing all views
import Dashboard from "../Views/Dashboard/index"
import Login from "../Views/Login/index"
import Statistic from "../Views/Widgets/Statistic"
import Data from "../Views/Widgets/Data"
import Chart from "../Views/Widgets/Chart"
import Register from "../Views/Register/Register"
import Chat from "../Views/Chat/Chat"

class Routes extends Component {
  render() {
    return (
      <Switch>
        <PublicRoutes path="/" component={Login} exact />
        <PublicRoutes path="/register" component={Register} exact />
        <ProtectedRoutes path="/dashboard" component={Dashboard} exact />
        <ProtectedRoutes path="/widget/statistic" component={Statistic} exact />
        <ProtectedRoutes path="/widget/data" component={Data} exact />
        <ProtectedRoutes path="/widget/chart" component={Chart} exact />
        <ProtectedRoutes path="/chat" component={Chat} />
      </Switch>
    )
  }
}

export default Routes
