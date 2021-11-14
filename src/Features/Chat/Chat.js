import React from "react"
import Box from "@mui/material/Box"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import { makeStyles } from "@mui/styles"
import { useParams } from "react-router-dom"
import MessengerSearch from "./Layout/MessengerSearch"
import ChatsHeader from "./Layout/ChatsHeader"
import ChatList from "./Layout/ChatList"
import ConversationHead from "./Layout/ConversationHead"
import { useSelector } from "react-redux"
//importing compoets...
import ChatHistory from "./Component/ChatHistory"
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
  const { listGroup } = useSelector((state) => state.groups)
  let { chatID } = useParams()

  if (!chatID) {
    chatID = Object.values(listGroup).map((item) => item)?.[0]?.channelName
  }
  console.log("chatID: ", chatID)
  return (
    <div className={styles.flex}>
      <CssBaseline />
      <div>
        <div className={styles.header}>
          <Toolbar disableGutters>
            <ConversationHead chatID={chatID} />
          </Toolbar>
        </div>

        <div sidebarId={"primarySidebar"}>
          <ChatsHeader />
          <Box p={"4px 16px 12px"}>
            <MessengerSearch />
          </Box>

          <ChatList listGroup={listGroup} />
        </div>
      </div>
      <ChatHistory chatID={chatID} />
    </div>
  )
}

export default Chat
