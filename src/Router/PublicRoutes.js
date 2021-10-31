import React from "react"
import { Route, Redirect } from "react-router-dom"

const PublicRoutes = ({ component: Component, ...rest }) => {
  let user = JSON.parse(sessionStorage.getItem("user"))
  let isAuthenticated = user
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        } else {
          return <Component {...props} />
        }
      }}
    />
  )
}

export default PublicRoutes
