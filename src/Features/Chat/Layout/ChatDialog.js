import React from "react"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import ChatMsg from "./ChatMsg"
import { useSelector } from "react-redux"

const AVATAR = "https://i.pravatar.cc/300?img=13"

const useStyles = makeStyles(() => ({
  date: {
    fontWeight: 500,
    color: "rgba(0,0,0,0.4)",
    margin: "12px 0",
    fontSize: 12,
    textAlign: "center",
  },
}))

const ChatDialog = ({ id }) => {
  const styles = useStyles()
  const { AllChats } = useSelector((state) => state.users)
  console.log("AllChats: ", AllChats)
  return (
    <Box p={"16px 30px 12px 10px"}>
      <Typography className={styles.date}>FRI 1:46 PM</Typography>
      <ChatMsg side={"right"} messages={AllChats} />
    </Box>
  )
}

export default ChatDialog
