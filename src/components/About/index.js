import React, { Fragment } from "react";
import makeStyles from "@material-ui/styles/makeStyles";

import TeamItem from "./TeamItem";
import { ourTeam } from "../../helpers";

import "./About.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "1200px",
    margin: "0 auto"
  }
});

const Studio = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="About">
        <div className="shadow" />
        <h2 className="title">Our team</h2>
        <div className={classes.root}>
          {ourTeam.map(item => (
            <TeamItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Studio;
