import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { setUser } from "../../Features/Users/redux/usersActions"
const Login = ({ history }) => {
  const dispatch = useDispatch()

  const [{ email, password }, setLoginForm] = useState({
    email: "",
    password: "",
  })

  const handleClickLogin = async () => {
    dispatch(setUser(true, email, password, history))
  }

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Stack spacing={2} direction="column">
        <TextField id="outlined-basic" name="email" onChange={(e) => setLoginForm((prevState) => ({ ...prevState, email: e.target.value }))} label="Username" variant="outlined" />

        <TextField id="outlined-password-input" name="password" onChange={(e) => setLoginForm((prevState) => ({ ...prevState, password: e.target.value }))} label="Password" type="password" autoComplete="current-password" />
        <Button variant="outlined" onClick={() => handleClickLogin()}>
          Login
        </Button>
        <Link to="/register">REGISTER</Link>
      </Stack>
    </Box>
  )
}

export default Login
