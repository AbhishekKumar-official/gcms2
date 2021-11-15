import React from "react"
import Box from "@mui/material/Box"
import MessengerSearch from "./MessengerSearch"
const ChatList = () => {
  return (
    <>
      <div>
        <Box p={"4px 16px 12px"}>
          <MessengerSearch placeholder={"Chat search"} />
        </Box>
      </div>
    </>
  )
}

export default ChatList
