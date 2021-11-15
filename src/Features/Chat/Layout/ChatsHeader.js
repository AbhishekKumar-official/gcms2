import React from "react"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import { NavLink } from "react-router-dom"
import MessengerSearch from "./MessengerSearch"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import ChatList from "./ChatList"
const useStyles = makeStyles(() => ({
  middle: {
    flex: "auto",
    marginLeft: 16,
  },
  iconBtn: {
    padding: 8,
    backgroundColor: "rgba(0, 0, 0, .04)",
    "&:not(:last-child)": {
      marginRight: 16,
    },
  },
  flex: {
    display: "flex",
  },
}))

const ChatsHeader = () => {
  const { listGroup } = useSelector((state) => state.groups)
  const styles = useStyles()
  return (
    <>
      <Box minWidth={"300px"} p={"16px 0px 8px 0px"}>
        <div className={styles.flex}>
          <Typography variant={"h5"} className={styles.middle}>
            <NavLink to="direct-messages">Chats</NavLink>
          </Typography>
          <Typography variant={"h5"} className={styles.middle}>
            <NavLink to="group-messages">Groups</NavLink>
          </Typography>
        </div>
      </Box>
      <Box p={"4px 16px 12px"}>
        <MessengerSearch />
      </Box>

      {/* <ChatList listGroup={listGroup} /> */}
      <Outlet />
    </>
  )
}

export default ChatsHeader
