import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Navigation } from "./Navigation";
import { Grid, Hidden } from "@material-ui/core";
import { HeroMessage } from "./HeroMessage";
import HeroImage from "../utils/images/karsten-winegeart-4bC1Ef88OYI-unsplash-min.jpg";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  fullHeight: {
    minHeight: "92vh",
  },
  heroImage: {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#151515",
  },
});

export const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navigation />
      <Grid container className={classes.fullHeight}>
        <Grid
          container
          alignItems="center"
          justify="center"
          item
          md={12}
          lg={6}
        >
          <HeroMessage
            maintext="Fall-Winter Clearance Sales"
            subtext="All Sale Items are Final Sale / Free Shipping on All Orders"
            btntext="See Products"
          />
        </Grid>
        <Hidden mdDown>
          <Grid container item lg={6} className={classes.heroImage} />
        </Hidden>
      </Grid>
    </div>
  );
};
