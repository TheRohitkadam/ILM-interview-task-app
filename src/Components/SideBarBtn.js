import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    // color: theme.palette.secondary.main,
    "& span, & svg": {
      fontSize: "0.7rem",
    },
  },
  itemCenter: {
    fontSize: "2rem",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    color: "#aa2229",
    padding: "1.3rem 0.4rem 1rem 0.4rem",
    borderLeft: "6px solid red"
  },
  inActive: {
    color: "black",
    padding: "1.3rem 0.4rem 1rem 0.8rem",
    textDecoration: "none",
  },
}));

const SideBarBtn = ({ text, children, clickHandler, isBtnActive }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem
        button
        key={text}
        className={isBtnActive ? classes.active : classes.inActive}
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
            <ListItemText primary={text} className={classes.item} />
          </Grid>
        </Grid>
      </ListItem>
      {text === "Notification" ? "" : <Divider />}
    </>
  );
};

export default SideBarBtn
