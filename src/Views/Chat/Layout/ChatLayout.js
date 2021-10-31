import React from "react"
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import TabSwitch from "./TabSwitch"
import CatHistory from "./CatHistory"

const ChatLayout = () => {
  let { path, url } = useRouteMatch()
  console.log("mm path: ", path)
  console.log("mm url: ", url)
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: "35vh",
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
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: "75vh",
              height: "80vh",
            },
          }}
        >
          <Paper variant="outlined">
            <Switch>
              <Route path={`${path}/:tab/:id`}>
                <CatHistory />
              </Route>
            </Switch>
          </Paper>
        </Box>
      </Stack>
    </>
  )
}

export default ChatLayout
