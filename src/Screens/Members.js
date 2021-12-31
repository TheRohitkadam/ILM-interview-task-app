import React from "react";
import { Breadcrumbs, Divider, Link, Typography, Box } from "@material-ui/core";
import Profiles from "../Components/Profiles";

const Members = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}>
        <Typography variant="h5" color="textPrimary">
          Members
        </Typography>
        <Breadcrumbs
          separator="|"
          aria-label="breadcrumb"
          style={{ marginLeft: 13, paddingTop: 8 }}
        >
          <Link
            color="inherit"
            href="/welcome"
            onClick={(e) => {
              e.preventDefault();
              console.info("You clicked a breadcrumb.");
            }}
          >
            <Typography style={{ fontSize: 12 }}>Home</Typography>
          </Link>
          <Link
            color="inherit"
            href="/members"
            onClick={(e) => {
              e.preventDefault();
              console.info("You clicked a breadcrumb.");
            }}
          >
            <Typography style={{ fontSize: 12 }}>Members</Typography>
          </Link>
        </Breadcrumbs>
      </div>
      <Divider />
      <div style={{ height: "70vh" }}>
        <Profiles />
      </div>
      <Divider />
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "darkgrey",
          }}
        >
          Global Woman Lounge 2021
        </p>
        <Breadcrumbs
          separator="|"
          aria-label="breadcrumb"
          style={{ marginLeft: 13, paddingTop: 8 }}
        >
          <Link
            color="inherit"
            href="/welcome"
            onClick={(e) => {
              e.preventDefault();
              console.info("You clicked a breadcrumb.");
            }}
          >
            <Typography style={{ fontSize: 12, color: "maroon" }}>
              Terms & Conditions
            </Typography>
          </Link>
          <Link
            color="inherit"
            href="/members"
            onClick={(e) => {
              e.preventDefault();
              console.info("You clicked a breadcrumb.");
            }}
          >
            <Typography style={{ fontSize: 12, color: "maroon" }}>
              Privacy Policy
            </Typography>
          </Link>
        </Breadcrumbs>
      </footer>
    </div>
  );
};

export default Members;
