import React from "react"

import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"

import { makeStyles } from "@mui/styles"

import MessengerSearch from "./Layout/MessengerSearch"
import ChatsHeader from "./Layout/ChatsHeader"
import ChatList from "./Layout/ChatList"
import ConversationHead from "./Layout/ConversationHead"
import ChatSettings from "./Layout/ChatSettings"
import ChatBar from "./Layout/ChatBar"
import ChatDialog from "./Layout/ChatDialog"

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

const Chat = () => {
  const styles = useStyles()

  return (
    <div className={styles.flex}>
      <CssBaseline />
      <div>
        <div className={styles.header}>
          <Toolbar disableGutters>
            <ConversationHead />
          </Toolbar>
        </div>
        <div sidebarId={"primarySidebar"}>
          <>
            <ChatsHeader />
            <Box p={"4px 16px 12px"}>
              <MessengerSearch />
            </Box>
          </>

          <ChatList />
        </div>
      </div>

      <div>
        <div>
          <div
            disableGutters
            rightSidebar={
              <div sidebarId={"secondarySidebar"} classes={{ paper: styles.insetBody }}>
                <ChatSettings />
              </div>
            }
          >
            <ChatDialog />
          </div>
        </div>
        <div ContainerProps={{ disableGutters: true }}>
          <Box display={"flex"} alignItems={"center"} p={1}>
            <ChatBar />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Chat
