import { useLocation, Navigate } from "react-router-dom"

const AuthProvider = ({ children }) => {
  const location = useLocation()
  let user = JSON.parse(sessionStorage.getItem("user"))
  let isAuthenticated = user

  if (!isAuthenticated) {
    //use replace inorder to redirect complet;y els eit will just push
    return <Navigate replace to="/" state={{ from: location }} />
  }

  return children
}
export default AuthProvider
