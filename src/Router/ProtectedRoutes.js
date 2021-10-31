import React from "react"
import { Route, Redirect } from "react-router-dom"
import PrimaryLayout from "../Layouts/PrimaryLayout/index"
const ProtectedRoutes = ({ component: Component, ...rest }) => {
  let user = JSON.parse(sessionStorage.getItem("user"))
  let isAuthenticated = user

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <PrimaryLayout {...props}>{<Component {...props} />}</PrimaryLayout>
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedRoutes
