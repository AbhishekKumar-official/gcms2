import React from "react"
import { NavLink as RouterLink, useRouteMatch, Switch, Route, Link } from "react-router-dom"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import CatHistory from "../Layout/CatHistory"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { HandleAddGroup } from "../../../firebase"
import { useSelector } from "react-redux"
import Modal from "@mui/material/Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}
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
    <>
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
    </>
  )
}
const Groups = ({ match }) => {
  let { path, url } = useRouteMatch()
  const { listGroup } = useSelector(({ groups }) => groups)

  const [open, setOpen] = React.useState(false)
  const [{ groupName, description }, createGroup] = React.useState({ groupName: "", description: "" })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  console.log("pathdsds: ", path, url)

  const handleCreateGroup = () => {
    HandleAddGroup(groupName, description)
  }

  console.log("listGroup: ", listGroup)
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {listGroup && Object.keys(listGroup).length > 0 && Object.values(listGroup).map((val, index) => <ListItemLink avatar="" primary={val.channelName} to={`${url}/${val.channelName}`} />)}

        {/* <Switch>
        <Route exact path={`${path}`}>
          <CatHistory />
        </Route>
        <Route exact path={`${path}/:name`}>
          <CatHistory />
        </Route>
      </Switch> */}
      </List>
      <Button onClick={handleOpen}>Start New Group</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Group
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack spacing={2} direction="column">
              <TextField id="outlined-basic" name="groupName" onChange={(e) => createGroup((prevState) => ({ ...prevState, groupName: e.target.value }))} label="Group Name" type="text" variant="outlined" />

              <TextField id="outlined-password-input" name="description" onChange={(e) => createGroup((prevState) => ({ ...prevState, description: e.target.value }))} label="Description" type="text" autoComplete="current-password" />
              <Button variant="outlined" onClick={() => handleCreateGroup()}>
                Create Group
              </Button>
            </Stack>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default Groups
