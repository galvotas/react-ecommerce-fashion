import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Grow,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  Button,
  ClickAwayListener,
  Badge,
  IconButton,
  Container,
} from "@material-ui/core";
import { BsFillPersonFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { TemporaryDrawer } from "./TemporaryDrawer";
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useFavoriteProducts } from "../contexts/FavoritesContext";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  navWrapper: {
    backgroundColor: "#fff",
    minHeight: "8vh",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.longest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { cartItems } = useCart();
  const { favprods } = useFavoriteProducts();

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar position="static" className={classes.navWrapper}>
      <Container>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Link to="/">
                <Typography color="primary" variant="h5">
                  LOGO
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/products">
                <Button color="secondary" size="medium" variant="outlined">
                  Products
                </Button>
              </Link>
              <IconButton onClick={handleDrawer}>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <FaShoppingCart size={20} color="primary" />
                </Badge>
              </IconButton>
              <Link to="/favourite products">
                <IconButton>
                  <Badge badgeContent={favprods.length} color="secondary">
                    <MdFavorite size={20} color="primary" />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <BsFillPersonFill size={20} color="primary" />
                <MdExpandMore
                  size={10}
                  className={open ? classes.expandOpen : classes.expand}
                />
              </IconButton>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ zIndex: 30 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>Login</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
      <TemporaryDrawer handleDrawer={handleDrawer} openDrawer={openDrawer} />
    </AppBar>
  );
};
