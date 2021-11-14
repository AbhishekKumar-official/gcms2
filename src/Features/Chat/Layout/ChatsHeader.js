import React from "react"
import { makeStyles } from "@mui/styles"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import SettingsApplications from "@mui/icons-material/SettingsApplications"
import Edit from "@mui/icons-material/Edit"

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
}))

const ChatsHeader = () => {
  const styles = useStyles()
  return (
    <Box minWidth={"300px"} p={"16px 0px 8px 0px"}>
      <Typography variant={"h5"} className={styles.middle}>
        <b>Chats</b>
      </Typography>
    </Box>
  )
}

export default ChatsHeader
