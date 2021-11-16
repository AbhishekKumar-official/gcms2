import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import { useSelector } from "react-redux"
import { useParams, useLocation, useNavigate } from "react-router"
import ChatListItem from "./ChatListItem"
import MessengerSearch from "./MessengerSearch"

const ChatList = () => {
  const { AllUsers } = useSelector((state) => state.users)
  const { search } = useLocation()
  const navigator = useNavigate()
  useEffect(() => {
    let abc = new URLSearchParams(search)
    if (abc.get("isDefault")) {
      navigator(`/chat/direct-messages/${Object.values(AllUsers).map((item, index) => item)?.[0]?.username ?? ""}`)
    }
  }, [])

  return (
    <>
      <div>
        <Box p={"4px 16px 12px"}>
          <MessengerSearch placeholder={"Chat search"} />
        </Box>
      </div>
      {Object.values(AllUsers).map((item, index) => (
        <ChatListItem key={index} {...item} />
      ))}
    </>
  )
}

export default ChatList
