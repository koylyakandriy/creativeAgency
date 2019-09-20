import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

import CardItem from "./CardItem";
import { listOfCards } from "../../helpers";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "13vh",
    fontSize: "4em"
  },
  root: {
    marginBottom: "20px"
  }
});

const Works = () => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>Our works</h1>
      <Grid container className={classes.root}>
        {listOfCards.map(card => (
          <CardItem key={card.id} card={card} />
        ))}
      </Grid>
    </>
  );
};

export default Works;
