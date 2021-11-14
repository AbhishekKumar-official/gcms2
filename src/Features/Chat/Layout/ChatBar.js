import React from "react"
import { makeStyles, styled } from "@mui/styles"
import InputBase from "@mui/material/InputBase"
import InputAdornment from "@mui/material/InputAdornment"
import AddCircle from "@mui/icons-material/AddCircle"
import Gif from "@mui/icons-material/Gif"
import Image from "@mui/icons-material/Image"
import Note from "@mui/icons-material/Note"
import ThumbUp from "@mui/icons-material/ThumbUp"
import TagFaces from "@mui/icons-material/TagFaces"

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

const ChatBar = ({ chatID }) => {
  const styles = useStyles()
  return (
    <>
      <AddCircle className={styles.icon} />

      <Gif className={styles.icon} />
      <Note className={styles.icon} />
      <Image className={styles.icon} />

      <InputBase
        className={styles.input}
        placeholder={chatID}
        endAdornment={
          <InputAdornment position={"end"}>
            <TagFaces className={styles.icon} />
          </InputAdornment>
        }
      />
      <ThumbUp className={styles.icon} />
    </>
  )
}

export default ChatBar
