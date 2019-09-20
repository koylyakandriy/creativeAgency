import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, makeStyles } from "@material-ui/core";

import { companyInfo } from "../../../helpers";

const useStyles = makeStyles({
  paper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "25px",
    background: "rgba(0,0,0, 0.6)",
    color: "#fff",
    padding: "9px 0"
  },
  subTitle: {
    fontSize: "16px"
  }
});

const CompanyContact = () => {
  const { address, email, phone } = companyInfo;
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <span>Address:</span>
        <span className={classes.subTitle}>{address}</span>
      </Paper>
      <Paper className={classes.paper}>
        <span>Email:</span>
        <span className={classes.subTitle}>{email}</span>
      </Paper>
      <Paper className={classes.paper}>
        <span>Phone:</span>
        <span className={classes.subTitle}>{phone}</span>
      </Paper>
    </Grid>
  );
};

CompanyContact.propTypes = {
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string
};

export default CompanyContact;
