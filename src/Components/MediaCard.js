import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ReactPlayer from "react-player";
import BootstrapButton from "./BootstrapButton";

const useStyles = makeStyles((theme) => ({
  cardstyle: {
    borderRadius: 3,
    display: "flex",
    flexDirection: "row",
    width: "78%",
    marginTop: 20,
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
}));

function MediaCard() {
  const classes = useStyles();
  const url =
    "https://globalwomanlive-logsbucket-b8t5h1d5b5io.s3.eu-west-2.amazonaws.com/events/Welcome+to+the+Global+Woman+Lounge.mp4";

  return (
    <div className={classes.cardstyle}>
      <ReactPlayer
        url={url}
        controls
        height="13.5rem"
        width="24.5rem"
        style={{ borderRadius: 3, paddingTop: 0 }}
        light="/assets/video-banner.jpg"
      />
      <div style={{ width: "72%", padding: 20 }}>
        <Grid container direction="column" justifyContent="flex-start">
          <Grid style={{ height: 140 }}>
            <Typography variant="h6" style={{ marginBottom: 10 }}>
              Welcome To The Global Woman Lounge
            </Typography>
            <Typography variant="p" >
              Congratulations my darling: You have been upgraded from the lobby
              to the lounge! This is your 5 Star treatment, all inclusive, from
              Global Woman. Are you ready to take yourself in a new journey?
              Here is the place where you can rediscover yourself. meet new
              people, learn new things and become the best version of yourself.
            </Typography>
          </Grid>
          <Grid justifyContent="flex-end">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <BootstrapButton style={{ fontSize: 14 }}>
                View more <ArrowRightAltIcon style={{ marginTop: 0 }} />
              </BootstrapButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default MediaCard;
