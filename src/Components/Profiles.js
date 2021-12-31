import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Badge, IconButton } from "@material-ui/core";
import { PhotoCamera, ChatBubbleOutlineRounded } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 30,
    maxWidth: 190,
    borderRadius: 10,
  },
  media: {
    height: 190,
  },
  btn: {
    position: "absolute",
    bottom: 60,
    right: 15,
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    width: 36,
    height: 36,
  },
  bottomLabel: {
    color: "white",
    backgroundColor: "#aa2229",
    position: "absolute",
    bottom: 5,
    right: -10,
    transform: "rotate(-37deg)",
    fontSize: 9,
    width: 60,
    textAlign: "center",
  },
});

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function ProfileCard({ name, city, badge, bottomLabel, imgPath }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {badge && (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            variant="dot"
            style={{ position: "absolute", top: 20, left: 20 }}
          />
        )}
        <CardMedia
          className={classes.media}
          image={imgPath}
          title="Contemplative Reptile"
        />
        <CardContent style={{ height: 60, paddingTop: 0, paddingBottom: 20 }}>
          <IconButton
            color="default"
            aria-label="upload picture"
            component="span"
            className={classes.btn}
          >
            <ChatBubbleOutlineRounded style={{ fontSize: 20 }} />
          </IconButton>
          <Typography
            gutterBottom
            style={{ fontSize: 16, marginTop: 16, marginBottom: -3 }}
          >
            {name}
          </Typography>
          <Typography
            style={{ fontSize: 13 }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {city}
          </Typography>
        </CardContent>
        {bottomLabel && (
          <Typography className={classes.bottomLabel}>NEW</Typography>
        )}
      </CardActionArea>
    </Card>
  );
}

const Profiles = () => {
  return (
    <div style={{ width: "55rem" }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <ProfileCard
            name="Sophie Poldermans"
            city="London"
            badge={true}
            imgPath="/assets/1.jpeg"
          />
        </Grid>
        <Grid item xs>
          <ProfileCard
            name="Carine Nijs"
            city="London"
            bottomLabel={true}
            imgPath="/assets/2.jpg"
          />
        </Grid>
        <Grid item xs>
          <ProfileCard
            name="Elen Ramos"
            city="London"
            badge={true}
            imgPath="/assets/3.jpg"
          />
        </Grid>
        <Grid item xs>
          <ProfileCard
            name="Sally Page"
            city="Los Angeles"
            bottomLabel={true}
            imgPath="/assets/4.jpg"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Profiles;
