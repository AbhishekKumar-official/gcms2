import React from "react"
import { NavLink as RouterLink } from "react-router-dom"

import { ListItem, ListItemIcon, ListItemText } from "@mui/material"
import { makeStyles } from "@mui/styles"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const useStyles = makeStyles((theme) => ({
  listIcon: {
    minWidth: "25px",
  },
  listItem: {
    borderRadius: "5px",
    marginBottom: "5px",
  },

  listItemNoBack: {
    backgroundColor: "transparent !important",
    paddingTop: "8px",
    paddingBottom: "8px",
    borderRadius: "5px",
  },
  errorChip: {
    color: "#ffcdr2",
    backgroundColor: "#ffcdd2",
    marginRight: "20px",
  },
}))

function ListItemLink(props) {
  const { icon, primary, to } = props

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
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

const NavItem = (props) => {
  const classes = useStyles()

  const { item, level } = props

  const Icon = item.icon
  const itemIcon = item.icon ? <Icon className={classes.listCustomIcon} color="inherit" /> : <ArrowForwardIcon className={classes.listCustomIcon} color="inherit" fontSize={level > 0 ? "inherit" : "default"} />

  return <ListItemLink to={item.url} primary={item.title} icon={itemIcon} />
}

export default NavItem
