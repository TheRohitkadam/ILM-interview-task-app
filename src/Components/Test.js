import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import SlideDrawer from "./SlideDrawer";

const useStyles = makeStyles((theme) => ({
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

const MenuBtn = ({ title, clickHandler, children, toggle }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        style={{ padding: "2.3rem 0.4rem 1.3rem 0.4rem" }}
        onClick={clickHandler}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{
            textAlign: "center",
          }}
        >
          <Grid container item className={classes.itemCenter}>
            {children}
          </Grid>
          <Grid container item xs={12}>
            <ListItemText primary={title} className={classes.item} />
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};

export default function Sidebar({toggle, setToggle}) {
//   const [toggle, setToggle] = useState(false);

  return (
    <>
      <List>
        <MenuBtn title="Dashboard" clickHandler={(e) => setToggle(!toggle)}>
          <InboxIcon />
        </MenuBtn>
        <MenuBtn title="Apps">
          <InboxIcon />
        </MenuBtn>
        <MenuBtn title="Members">
          <InboxIcon />
        </MenuBtn>
        <MenuBtn title="Subscription">
          <InboxIcon />
        </MenuBtn>
        <MenuBtn title="Support Ticket">
          <InboxIcon />
        </MenuBtn>
        <MenuBtn title="Notification">
          <InboxIcon />
        </MenuBtn>
      </List>
      <SlideDrawer show={toggle}>
        <Button>Click</Button>
      </SlideDrawer>
    </>
  );
}
