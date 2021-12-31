import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  alpha,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import logo from "../logo.svg";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "white",
      height: 90,
      paddingTop: 10
    },
    toolbar: {
      justifyContent: "space-between",
    },
    logo: {
      height: "4.6rem",
    },
    menuButton: {
      color: "#9E9E9E",
    },
    search: {
      position: "relative",
      borderRadius: 50,
      backgroundColor: "#F5F5F5",
      "&:hover": {
        backgroundColor: "#F5F5F5",
      },
      paddingRight: 0,
      marginLeft: 0,
      marginTop: 8,
      width: "80%",
      height: "80%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0),
      height: "100%",
      position: "absolute",
      top: 0,
      right: 10,
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#BDBDBD",
      fontSize: 12,
    },
    inputRoot: {
      color: "inherit",
      "& $placeholder": {
        fontSize: "50px",
        lineHeight: "50px",
      },
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `1em`,
      paddingRight: `calc(1em + ${theme.spacing(2)}px)`,
      transition: theme.transitions.create("width"),
      height: "1rem",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "25ch",
        },
      },
    },
  })
);

export default function Appbar({toggle, setToggle}) {
  const classes = useStyles();

  return (
    <AppBar color="default" position="fixed" className={classes.appBar} elevation={3}>
      <Toolbar classes={{ root: classes.toolbar }}>
        <div style={{ display: "flex", width: "20ch", marginLeft: 14 }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={(e) => setToggle(!toggle)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{fontSize: 13}}
              inputProps={{ "aria-label": "search" }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon style={{ fontSize: 24, paddingRight: 0 }} />
            </div>
          </div>
        </div>
        <img src={logo} alt="Kitty Katty!" className={classes.logo} />
        <div
          color="inherit"
          style={{
            fontSize: 12,
            display: "flex",
            width: "25ch",
            paddingLeft: 20,
            color: "#9E9E9E",
          }}
        >
          Sarah Kortney
          <Avatar
            style={{ position: "absolute", right: 40, top: 16 }}
            alt="Remy Sharp"
            src="https://randomuser.me/api/portraits/women/67.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
