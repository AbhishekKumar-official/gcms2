import React from "react"
import PropTypes from "prop-types"
import cx from "clsx"
import { makeStyles } from "@mui/styles"
import Grid from "@mui/material/Grid"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import TagFaces from "@mui/icons-material/TagFaces"
import Reply from "@mui/icons-material/Reply"
import MoreHoriz from "@mui/icons-material/MoreHoriz"

const useStyles = makeStyles(() => {
  const radius = 15
  const size = 30
  const rightBgColor = "#09f"
  // if you want the same as facebook messenger, use this color '#09f'
  return {
    avatar: {
      width: size,
      height: size,
    },
    rightRow: {
      marginLeft: "auto",
    },
    msgBox: {
      display: "flex",
      alignItems: "center",
      marginBottom: 4,
      "&:hover $iconBtn": {
        opacity: 1,
      },
    },
    leftMsgBox: {
      textAlign: "left",
    },
    rightMsgBox: {
      textAlign: "right",
      flexDirection: "row-reverse",
    },
    msg: {
      maxWidth: "70%",
      padding: 5,
      borderRadius: 4,
      display: "inline-block",
      wordBreak: "break-word",
      fontFamily:
        // eslint-disable-next-line max-len
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontSize: "14px",
    },
    left: {
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
      backgroundColor: "#eee",
    },
    right: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      backgroundColor: rightBgColor,
      color: "#fff",
    },
    leftFirst: {
      borderTopLeftRadius: radius,
    },
    leftLast: {
      borderBottomLeftRadius: radius,
    },
    rightFirst: {
      borderTopRightRadius: radius,
    },
    rightLast: {
      borderBottomRightRadius: radius,
    },
    iconBtn: {
      opacity: 0,
      padding: 6,
      color: "rgba(0,0,0,0.34)",
      "&:hover": {
        color: "rgba(0,0,0,0.87)",
      },
      margin: "0 4px",
      "& svg": {
        fontSize: 20,
      },
    },
    image: {
      maxWidth: 120,
      maxHeight: 120,
    },
  }
})

const ChatMsg = ({ avatar, messages, side }) => {
  const styles = useStyles()
  const attachClass = (index) => {
    if (index === 0) {
      return styles[`${side}First`]
    }
    if (index === messages.length - 1) {
      return styles[`${side}Last`]
    }
    return ""
  }
  return (
    <Grid container spacing={2} justify={side === "right" ? "flex-end" : "flex-start"}>
      {side === "left" && (
        <Grid item>
          <Avatar src={avatar} className={cx(styles.avatar)} />
        </Grid>
      )}
      <Grid item xs>
        {messages.map((msg, i) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={msg.id || i} className={cx(styles.row, styles[`${side}Row`])}>
              <div className={cx(styles.msgBox, styles[`${side}MsgBox`])}>
                {typeof msg === "string" && (
                  <Typography align={"left"} className={cx(styles.msg, styles[side], attachClass(i))}>
                    {msg}
                  </Typography>
                )}
                {typeof msg === "object" && msg.type === "image" && <img className={styles.image} alt={msg.alt} {...msg} />}
                <IconButton className={styles.iconBtn}>
                  <TagFaces />
                </IconButton>
                <IconButton className={styles.iconBtn}>
                  <Reply />
                </IconButton>
                <IconButton className={styles.iconBtn}>
                  <MoreHoriz />
                </IconButton>
              </div>
            </div>
          )
        })}
      </Grid>
    </Grid>
  )
}

ChatMsg.propTypes = {
  avatar: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  side: PropTypes.oneOf(["left", "right"]),
}
ChatMsg.defaultProps = {
  avatar: "",
  messages: [],
  side: "left",
}

export default ChatMsg