import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";
import { ListItemIcon, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, NavLink } from "react-router-dom";
import Appbar from "./Appbar";
import SlideDrawer from "./SlideDrawer";
import SideBarBtn from "./SideBarBtn";
import {
  AppsTwoTone,
  ConfirmationNumberTwoTone,
  CreditCardTwoTone,
  DashboardTwoTone,
  GroupTwoTone,
  NotificationsNoneTwoTone,
} from "@material-ui/icons";

const drawerWidth = 110;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#f1f1f1",
    height: "100vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    marginTop: 30
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(7, 3, 3, 3),
  },
  sidePadding: {
    flexGrow: 1,
    padding: theme.spacing(7, 3, 3, 36),
  },
  toolbar: {
    justifyContent: "space-between",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    fontSize: 12, //Insert your required size
  },
  item: {
    color: theme.palette.secondary.main,
    "& span, & svg": {
      fontSize: "0.7rem",
    },
  },
  itemCenter: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SideBar = ({ classes, dashBtnActive, memBtnActive, setMemBtnActive, setdashBtnActive}) => {
  return (
    <div className={classes.drawerContainer}>
      <List>
        <NavLink
          to="/"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => setdashBtnActive(isActive)}
        >
          <SideBarBtn text="Dashboard" isBtnActive={dashBtnActive}>
            <DashboardTwoTone style={{ fontSize: 34 }} />
          </SideBarBtn>
        </NavLink>
        <SideBarBtn text="Apps">
          <AppsTwoTone style={{ fontSize: 34 }} />
        </SideBarBtn>
        <NavLink
          to="/members"
          style={{ textDecoration: "none" }}
          className={({ isActive }) => setMemBtnActive(isActive)}
        >
          <SideBarBtn text="Members" isBtnActive={memBtnActive}>
            <GroupTwoTone style={{ fontSize: 34 }} />
          </SideBarBtn>
        </NavLink>
        <SideBarBtn text="Subscription">
          <CreditCardTwoTone style={{ fontSize: 34 }} />
        </SideBarBtn>
        <SideBarBtn text="Support Ticket">
          <ConfirmationNumberTwoTone style={{ fontSize: 34 }} />
        </SideBarBtn>
        <SideBarBtn text="Notification">
          <NotificationsNoneTwoTone style={{ fontSize: 34 }} />
        </SideBarBtn>
      </List>
    </div>
  );
};

export default function AppDrawer({ children }) {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [dashBtnActive, setdashBtnActive] = useState(false);
  const [memBtnActive, setMemBtnActive] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar toggle={toggle} setToggle={setToggle} />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <SideBar
          classes={classes}
          dashBtnActive={dashBtnActive}
          memBtnActive={memBtnActive}
          setdashBtnActive={setdashBtnActive}
          setMemBtnActive={setMemBtnActive}
        />
      </Drawer>
      {/* Dashboard Submenu drawer  */}
      {/*  */}
      <SlideDrawer show={toggle}>
        <List dense={dense} disablePadding>
          <ListItem>
            <ListItemIcon style={{ marginRight: -20 }}>
              <SendTwoToneIcon
                style={{ transform: "rotate(-60deg)", width: 20 }}
              />
            </ListItemIcon>
            <Typography style={{ fontSize: 14 }}>V1</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ marginRight: -20 }}>
              <SendTwoToneIcon
                style={{ transform: "rotate(-60deg)", width: 20 }}
              />
            </ListItemIcon>
            <Typography style={{ fontSize: 14 }}>V2</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ marginRight: -20 }}>
              <SendTwoToneIcon
                style={{ transform: "rotate(-60deg)", width: 20 }}
              />
            </ListItemIcon>
            <Typography style={{ fontSize: 14 }}>V3</Typography>
          </ListItem>
        </List>
      </SlideDrawer>
      <main className={toggle ? classes.sidePadding : classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}
