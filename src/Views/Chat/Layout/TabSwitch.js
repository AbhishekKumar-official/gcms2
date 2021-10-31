import React, { useState, useEffect } from "react"
import { Link, useRouteMatch, Switch, Route, MemoryRouter, useLocation } from "react-router-dom"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import DMS from "../DirectMessages/DMS"

import Groups from "../Groups/Groups"
const TabSwitch = () => {
  let { path, url } = useRouteMatch()
  const location = useLocation()
  console.log("amd url: ", url)
  console.log("amd path: ", path, location)
  const [currentTab, setcurrentTab] = useState(`${url}/dm`)

  useEffect(() => {
    if (location?.pathname) setcurrentTab(location?.pathname)
  }, [location])

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Tabs value={currentTab}>
        <Tab label="Direct Messages" value={`${url}/dm`} to={`${url}/dm`} onClick={(e) => setcurrentTab(`${url}/dm`)} component={Link} />
        <Tab label="Groups" value={`${url}/group`} to={`${url}/group`} onClick={(e) => setcurrentTab(`${url}/group`)} component={Link} />
      </Tabs>

      <Switch>
        <Route path={`${path}/dm`}>
          <DMS />
        </Route>
        <Route path={`${path}/group`}>
          <Groups />
        </Route>
      </Switch>
    </List>
  )
}

export default TabSwitch
