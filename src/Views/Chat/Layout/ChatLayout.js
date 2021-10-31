import React from "react"
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"

import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import TabSwitch from "./TabSwitch"

const ChatLayout = () => {
  let { path, url } = useRouteMatch()
  console.log("mm path: ", path)
  console.log("mm url: ", url)
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          m: 1,
          width: 300,
          height: "80vh",
        },
      }}
    >
      <Paper variant="outlined">
        {" "}
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Abhishek">A</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Abhishek" secondary={<React.Fragment>{"It's you"}</React.Fragment>} />
          </ListItem>
          <Divider variant="inset" component="li" />

          <Switch>
            <Route path={path}>
              <TabSwitch />
            </Route>
          </Switch>
        </List>
      </Paper>
    </Box>
  )
}

export default ChatLayout
