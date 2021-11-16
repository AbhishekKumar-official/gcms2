import React from "react"
import ChatSettings from "../Layout/ChatSettings"
import ChatBar from "../Layout/ChatBar"
import ChatDialog from "../Layout/ChatDialog"
import Box from "@mui/material/Box"
import { makeStyles } from "@mui/styles"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
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
const ChatHistory = () => {
  const styles = useStyles()
  let { chatID, groupID } = useParams()
  const { listGroup } = useSelector((state) => state.groups)
  const { AllUsers } = useSelector((state) => state.users)
  console.log("aa chatID: ", chatID)
  console.log("aa groupID: ", groupID)

  // if (!chatID) {
  //   chatID = Object.values(listGroup).map((item) => item)?.[0]?.channelName
  // }
  return chatID || groupID ? (
    <div className={styles.flex}>
      <div>
        <div>
          <ChatDialog id={chatID ? chatID : groupID} />
        </div>

        <div ContainerProps={{ disableGutters: true }}>
          <Box display={"flex"} alignItems={"center"} p={1}>
            <ChatBar id={chatID ? chatID : groupID} />
          </Box>
        </div>
      </div>
      <div sidebarId={"secondarySidebar"} classes={{ paper: styles.insetBody }}>
        <ChatSettings id={chatID ? chatID : groupID} />
      </div>
    </div>
  ) : (
    <div className={styles.flex}>
      <h1>Chat History</h1>
    </div>
  )
}

export default ChatHistory
