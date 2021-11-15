import React from "react"
import { useSelector } from "react-redux"
import ChatListItem from "./ChatListItem"
import Box from "@mui/material/Box"
import MessengerSearch from "./MessengerSearch"
const GroupList = () => {
  const { listGroup } = useSelector((state) => state.groups)
  return (
    <>
      <div>
        <Box p={"4px 16px 12px"}>
          <MessengerSearch placeholder={"Group search"} />
        </Box>
      </div>
      {Object.values(listGroup).map((item, index) => (
        <ChatListItem key={index} {...item} />
      ))}
    </>
  )
}

export default GroupList
