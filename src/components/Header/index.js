import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  ListItem,
  Grid
} from "@material-ui/core";

import Burger from "./Burger";

import "./Header.scss";

const useStyles = makeStyles({
  header: {
    position: "fixed",
    top: "0",
    height: "10vh",
    zIndex: "1",
    background: "rgba(43,43,43, 0.7)",
    flexDirection: "row"
  },
  toolbar: {
    justifyContent: "space-between",
    margin: "0 auto",
    flexWrap: "wrap",
    height: "100%",
    maxWidth: "1200px",
    width: "100%"
  },
  listItem: {
    color: "#fff"
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <Grid>
      <AppBar position="static" className={`${classes.header} Header`}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            <Link to="/" className="title-link">
              Creative Agency
            </Link>
          </Typography>
          <Box component="ul" display={{ xs: "none", sm: "flex" }}>
            <ListItem>
              <Link className={classes.listItem} to="/works">
                Works
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.listItem} to="/about">
                About us
              </Link>
            </ListItem>
            <ListItem>
              <Link className={classes.listItem} to="/contacts">
                Contacts
              </Link>
            </ListItem>
          </Box>
          <Burger />
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
