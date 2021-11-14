import React from "react"
import ChatSettings from "../Layout/ChatSettings"
import ChatBar from "../Layout/ChatBar"
import ChatDialog from "../Layout/ChatDialog"
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles"
const useStyles = makeStyles(() => ({
  header: {
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, .10)",
    backgroundColor: "#ffffff",
  },
  insetBody: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.08)",
    overflowY: "auto",
    backgroundColor: "#fff",
  },
  edit: {
    backgroundColor: "rgba(0,0,0,0.04)",
  },
  flex: {
    display: "flex",
  },
}))
const ChatHistory = ({ chatID }) => {
  const styles = useStyles()
  return chatID ? (
    <div className={styles.flex}>
      <div>
        <div>
          <ChatDialog chatID={chatID} />
        </div>

        <div ContainerProps={{ disableGutters: true }}>
          <Box display={"flex"} alignItems={"center"} p={1}>
            <ChatBar chatID={chatID} />
          </Box>
        </div>
      </div>
      <div sidebarId={"secondarySidebar"} classes={{ paper: styles.insetBody }}>
        <ChatSettings chatID={chatID} />
      </div>
    </div>
  ) : (
    <div className={styles.flex}>
      <h1>Chat History</h1>
    </div>
  )
}

export default ChatHistory
