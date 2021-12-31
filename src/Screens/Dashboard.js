import React from "react";
import { Divider } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../Components/MediaCard";
import BootstrapButton from "../Components/BootstrapButton";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Profiles from "../Components/Profiles";

function Dashboard() {
  return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography variant="h5" color="textPrimary">
            V1
          </Typography>
          <Breadcrumbs
            separator="|"
            aria-label="breadcrumb"
            style={{ marginLeft: 13, paddingTop: 8 }}
          >
            <Link
              color="inherit"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                console.info("You clicked a breadcrumb.");
              }}
            >
              <Typography style={{ fontSize: 12 }}>Home</Typography>
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={(e) => {
                e.preventDefault();
                console.info("You clicked a breadcrumb.");
              }}
            >
              <Typography style={{ fontSize: 12 }}>Dashboard</Typography>
            </Link>
            <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={(e) => {
                e.preventDefault();
                console.info("You clicked a breadcrumb.");
              }}
            >
              <Typography style={{ fontSize: 12 }}>V1</Typography>
            </Link>
          </Breadcrumbs>
        </div>
        <Divider style={{ marginTop: 17 }} />
        <MediaCard />
        <div style={{ marginTop: 20, display: "flex" }}>
          <Typography style={{ marginTop: 10 }}>Premium Members</Typography>
          <BootstrapButton
            style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }}
          >
            View All
            <ArrowRightAltIcon style={{ marginTop: 0 }} />
          </BootstrapButton>
        </div>
        <Divider />
        <Profiles />
      </>
  );
}

export default Dashboard;
