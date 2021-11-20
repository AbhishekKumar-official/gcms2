import React, { useEffect, useState } from "react"
import { makeStyles, styled } from "@mui/styles"
import InputBase from "@mui/material/InputBase"
import InputAdornment from "@mui/material/InputAdornment"
import AddCircle from "@mui/icons-material/AddCircle"
import Gif from "@mui/icons-material/Gif"
import Image from "@mui/icons-material/Image"
import Note from "@mui/icons-material/Note"

import TagFaces from "@mui/icons-material/TagFaces"
import { handleSendMessage } from "../../../firebase"
import { useParams } from "react-router-dom"

const useStyles = makeStyles(() => ({
  icon: {
    color: "rgb(0, 153, 255)",
    width: 44,
    height: 44,
    padding: 6,
    "&:not(:first-child)": {
      marginLeft: 4,
    },
  },
  input: {
    flex: "auto",
    borderRadius: 40,
    paddingLeft: 16,
    backgroundColor: "rgba(0,0,0,0.04)",
    margin: "0 8px",
    height: 36,
    fontSize: 13,
  },
}))

const ChatBar = ({ id }) => {
  // const {params} = useParams()
  // console.log("paramsChatBar: ", params)
  const [messageDescription, setMessageDescription] = useState("")
  const [threadID, setThreadID] = useState("")

  const user = JSON.parse(sessionStorage.getItem("user"))
  console.log("Chat bar: ", user)
  const styles = useStyles()

  const sendMessageHandler = () => {
    handleSendMessage(threadID, messageDescription)
  }

  useEffect(() => {
    setThreadID(`${id > user?.uid ? id + user?.uid : id + user?.uid}`)
    return () => {
      setThreadID("")
    }
  }, [])

  useEffect(() => {
    if (id) setThreadID(`${id > user?.uid ? id + user?.uid : id + user?.uid}`)
  }, [id])

  console.log("threadID: ", threadID)
  return (
    <>
      <AddCircle className={styles.icon} />

      <Gif className={styles.icon} />
      <Note className={styles.icon} />
      <Image className={styles.icon} />

      <InputBase
        className={styles.input}
        placeholder={id}
        name="messageDescription"
        value={messageDescription}
        onChange={(e) => setMessageDescription(e.target.value)}
        endAdornment={
          <InputAdornment position={"end"}>
            <TagFaces className={styles.icon} />
          </InputAdornment>
        }
      />
      {/* <ThumbUp className={styles.icon} onnClick={() => sendMessageHandler()} /> */}
      <button onClick={() => sendMessageHandler()}>Send</button>
    </>
  )
}

export default ChatBar
