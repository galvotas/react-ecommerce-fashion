import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  buttonStyles: {
    marginTop: "1rem",
    borderRadius: "0",
  },
  subMsg: {
    marginBottom: "1rem",
  },
});

export const HeroMessage = ({ maintext, subtext, btntext }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box maintext={maintext} subtext={subtext} btntext={btntext}>
        <Typography variant="h2" className={classes.subMsg}>
          {maintext}
        </Typography>
        <Typography variant="body2">{subtext}</Typography>
        <Button
          className={classes.buttonStyles}
          variant="outlined"
          color="secondary"
          size="large"
        >
          {btntext}
        </Button>
      </Box>
    </Container>
  );
};
