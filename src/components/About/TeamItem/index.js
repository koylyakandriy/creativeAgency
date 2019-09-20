import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Paper,
  Grid,
  ButtonBase,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paperLeft: {
    marginLeft: "0",
    marginTop: "20px",
    padding: "15px",
    maxWidth: 500,
    opacity: "0.8"
  },
  paperRight: {
    marginRight: "0",
    marginLeft: "auto",
    marginTop: "20px",
    padding: "15px",
    maxWidth: 500,
    opacity: "0.8"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      justifyContent: "center"
    }
  }
}));

const TeamItem = ({
  item: { img, firstName, lastName, description, position }
}) => {
  const classes = useStyles();

  const paperClass =
    position === "left" ? classes.paperLeft : classes.paperRight;

  return (
    <Fragment>
      <Paper className={paperClass}>
        <Grid container spacing={2} className={classes.container}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {firstName} {lastName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

TeamItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TeamItem;
