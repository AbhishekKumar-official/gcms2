import React from "react"

import ChatListItem from "./ChatListItem"

const ChatList = ({ listGroup }) => {
  return Object.values(listGroup).map((item, index) => <ChatListItem key={index} {...item} />)
}

export default ChatList
