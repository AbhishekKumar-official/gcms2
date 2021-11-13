import { useLocation, Navigate } from "react-router-dom"

const AuthRemover = ({ children }) => {
  const location = useLocation()
  let user = JSON.parse(sessionStorage.getItem("user"))
  let isAuthenticated = user

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" state={{ from: location }} />
  }

  return children
}
export default AuthRemover
