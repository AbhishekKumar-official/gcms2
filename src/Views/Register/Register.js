import React, { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { hanndleCreateUserWithEmailAndPassword } from "../../firebase"

const Register = () => {
  const [{ firstname, email, password, confirmpassword }, setRegistrationForm] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  })

  const handleClickRegister = () => {
    console.log("Register Vals", { firstname, email, password, confirmpassword })
    hanndleCreateUserWithEmailAndPassword(email, password)
  }
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Stack spacing={2} direction="column">
        <TextField name="firstname" onChange={(e) => setRegistrationForm((prevState) => ({ ...prevState, firstname: e.target.value }))} label="Username" variant="outlined" />

        <TextField name="email" onChange={(e) => setRegistrationForm((prevState) => ({ ...prevState, email: e.target.value }))} label="Email" type="email" />
        <TextField name="password" onChange={(e) => setRegistrationForm((prevState) => ({ ...prevState, password: e.target.value }))} label="Password" type="password" autoComplete="current-password" />
        <TextField name="confirmpassword" onChange={(e) => setRegistrationForm((prevState) => ({ ...prevState, confirmpassword: e.target.value }))} label="Confirm Password" type="password" autoComplete="current-password" />
        <Button variant="outlined" onClick={() => handleClickRegister()}>
          Register
        </Button>
        <Link to="/">LOGIN</Link>
      </Stack>
    </Box>
  )
}

export default Register
