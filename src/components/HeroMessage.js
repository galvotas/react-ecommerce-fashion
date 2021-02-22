import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const animateSubText = useSpring({
    from: { opacity: 0, transform: "translateX(-400px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: {
      duration: 200,
    },
    delay: 100,
  });
  const animateMainText = useSpring({
    from: { opacity: 0, transform: "translateY(-400px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: {
      duration: 200,
    },
    delay: 500,
  });

  const fadeBtn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 550,
    config: {
      duration: 1000,
    },
  });

  return (
    <Container maxWidth="lg">
      <Box>
        <animated.div style={animateMainText}>
          <Typography variant="h2" className={classes.subMsg}>
            {maintext}
          </Typography>
        </animated.div>
        <animated.div style={animateSubText}>
          <Typography variant="body2">{subtext}</Typography>
        </animated.div>
        <animated.div style={fadeBtn}>
          <Button
            onClick={() => history.push("/products")}
            className={classes.buttonStyles}
            variant="outlined"
            color="secondary"
            size="medium"
          >
            {btntext}
          </Button>
        </animated.div>
      </Box>
    </Container>
  );
};
