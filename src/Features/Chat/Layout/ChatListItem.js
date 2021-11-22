import React from "react"
import cx from "clsx"
import { makeStyles } from "@mui/styles"
import { NavLink as RouterLink } from "react-router-dom"
import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Avatar from "@mui/material/Avatar"
import MoreHoriz from "@mui/icons-material/MoreHoriz"

const useStyles = makeStyles(() => ({
  root: ({ active }) => ({
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    ...(active && {
      backgroundColor: "rgba(0, 0, 0, .05)",
    }),
  }),
  rootHover: {
    "&:hover": {
      "& $dot": {
        display: "none",
      },
      "& $responded": {
        display: "none",
      },
      "& $more": {
        visibility: "visible",
      },
    },
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  primary: ({ bold }) => ({
    ...(bold && { fontWeight: "bold" }),
  }),
  secondary: ({ bold }) => ({
    fontSize: 13,
    color: "#999",
    ...(bold && { fontWeight: "bold", color: "#f4f4f4" }),
  }),
  float: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  dot: {
    width: 12,
    height: 12,
    backgroundColor: "#09f",
    borderRadius: "50%",
  },
  more: {
    visibility: "hidden",
    fontSize: 20,
  },
  responded: {
    width: 16,
    height: 16,
  },
}))

const ListItemLink = (props) => {
  const styles = useStyles()
  const { channelName, profile_picture, id } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => {
        return <RouterLink to={id ? id : channelName} className={(metaData) => (metaData.isActive ? "sel" : "")} ref={ref} {...itemProps} role={undefined} />
      }),
    [channelName]
  )

  return (
    <ListItem button component={renderLink} className={cx(styles.root, styles.rootHover)}>
      <Avatar src={profile_picture ? profile_picture : channelName} className={styles.avatar} />

      <ListItemText primary={id ? id : channelName} secondary={id ? id : channelName} primaryTypographyProps={{ noWrap: true }} secondaryTypographyProps={{ noWrap: true }} classes={{ primary: styles.primary, secondary: styles.secondary }} />
      <Box position={"relative"}>
        <MoreHoriz className={styles.more} />
      </Box>
    </ListItem>
  )
}
const ChatListItem = (props) => {
  return (
    <Box px={1}>
      <ListItemLink {...props} />
    </Box>
  )
}

export default ChatListItem
