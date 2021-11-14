import React from "react"
import { makeStyles } from "@mui/styles"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Phone from "@mui/icons-material/Phone"
import Videocam from "@mui/icons-material/Videocam"
import Info from "@mui/icons-material/Info"

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
  },
  root: {
    padding: "8px 8px 8px 16px",
  },
  primary: {
    fontWeight: "bold",
  },
  secondary: {
    fontSize: 12,
  },
  iconBtn: {
    "& svg": {
      color: "rgb(0, 153, 255)",
    },
  },
  flecolumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}))

const ConversationHead = ({ chatID }) => {
  const styles = useStyles()
  return (
    <ListItem ContainerComponent={"div"} ContainerProps={{ className: styles.container }} className={styles.root}>
      <ListItemAvatar>
        <Avatar src={"https://i.pravatar.cc/300?img=13"} />
      </ListItemAvatar>
      <div className={styles.flecolumn}>
        <div>
          <ListItemText primary={chatID} secondary={"active 17m ago"} classes={{ primary: styles.primary, secondary: styles.secondary }} />
        </div>
        <div>
          <IconButton className={styles.iconBtn}>
            <Phone />
          </IconButton>
          <IconButton className={styles.iconBtn}>
            <Videocam />
          </IconButton>
          <IconButton className={styles.iconBtn}>
            <Info />
          </IconButton>
        </div>
      </div>
    </ListItem>
  )
}

export default ConversationHead
