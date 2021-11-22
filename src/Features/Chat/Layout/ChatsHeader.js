import React, { useEffect, useState } from "react"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import { useSelector } from "react-redux"
import Typography from "@mui/material/Typography"
import { NavLink } from "react-router-dom"

import { Outlet } from "react-router-dom"

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
  const styles = useStyles()
  const { AllUsers } = useSelector((state) => state.users)
  // const { listGroup } = useSelector((state) => state.groups)

  const [chatID, setChatID] = useState(Object.values(AllUsers)?.[0]?.id ?? "")
  // const [groupID, setGroupID] = useState(Object.values(listGroup)?.[0]?.channelName ?? "")

  return (
    <>
      <Box minWidth={"300px"} p={"16px 0px 8px 0px"}>
        <div className={styles.flex}>
          <Typography variant={"h5"} className={styles.middle}>
            <NavLink to={`direct-messages/${chatID}`}>Chats</NavLink>
          </Typography>
          {/* <Typography variant={"h5"} className={styles.middle}>
            <NavLink to={`group-messages/${groupID}`}>Groups</NavLink>
          </Typography> */}
        </div>
      </Box>

      <Outlet />
    </>
  )
}

export default ChatsHeader
