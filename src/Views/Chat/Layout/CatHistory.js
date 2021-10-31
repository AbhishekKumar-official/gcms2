import React from "react"
import List from "@mui/material/List"
import { useParams } from "react-router-dom"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import ListItemAvatar from "@mui/material/ListItemAvatar"
const CatHistory = () => {
  const { id } = useParams()
  console.log("id: ", id)
  console.log("ONme")
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Abhishek">{id?.substring(0, 2)}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={id} secondary={<React.Fragment>{"It's you"}</React.Fragment>} />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  )
}

export default CatHistory
