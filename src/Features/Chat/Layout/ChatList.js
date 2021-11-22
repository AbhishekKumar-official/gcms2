import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import { useSelector } from "react-redux"
import { useParams, useLocation, useNavigate, Navigate } from "react-router"
import ChatListItem from "./ChatListItem"
import MessengerSearch from "./MessengerSearch"

const ChatList = () => {
  const { AllUsers } = useSelector((state) => state.users)
  console.log("AllUsers?.[0]: ", Object.values(AllUsers)?.[0]?.id)
  const { search } = useLocation()
  console.log("search: ", search)
  const navigator = useNavigate()

  useEffect(() => {
    if (search) {
      navigator(`/chat/direct-messages/${Object.values(AllUsers)?.[0]?.id ?? ""}`)
    }
  }, [search])

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
