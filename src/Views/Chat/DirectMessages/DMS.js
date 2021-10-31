import React from "react"
import { NavLink as RouterLink, useRouteMatch, Switch, Route } from "react-router-dom"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import CatHistory from "../Layout/CatHistory"
function ListItemLink(props) {
  const { avatar, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} activeClassName="sel" ref={ref} {...itemProps} role={undefined} />
      }),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {avatar ? (
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
        ) : (
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
        )}
        <ListItemText
          primary={primary}
          secondary={
            <React.Fragment>
              <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </li>
  )
}
const DMS = ({ match }) => {
  let { path, url } = useRouteMatch()
  console.log("pathdsds: ", path, url)
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItemLink avatar="" primary="Albrto" to={`${url}/Albrto`} />
      <ListItemLink avatar="" primary="freddy" to={`${url}/freddy`} />
      <ListItemLink avatar="" primary="Geeks" to={`${url}/Geeks`} />
      <ListItemLink avatar="" primary="Normn" to={`${url}/Normn`} />
      {/* <Switch>
        <Route exact path={`${path}`}>
          <CatHistory />
        </Route>
        <Route exact path={`${path}/:name`}>
          <CatHistory />
        </Route>
      </Switch> */}
    </List>
  )
}

export default DMS
