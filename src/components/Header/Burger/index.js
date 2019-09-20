import React, { useState } from "react";
import { Box, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  burgerMenu: {
    height: "25px",
    cursor: "pointer",
    right: "10px",
    position: "relative"
  }
});

const Burger = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      component="div"
      display={{
        xs: "block",
        sm: "none"
      }}
      className={classes.burgerMenu}
    >
      <span
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={`${anchorEl ? "open-burger" : "burger"}`}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/works">Works</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/about">About us</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/contacts">Contacts</Link>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Burger;
