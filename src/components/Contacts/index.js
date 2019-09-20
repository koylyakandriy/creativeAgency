import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  makeStyles,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Icon,
  Container
} from "@material-ui/core";

import CompanyContact from "./CompanyContact";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "15vh",
    marginBottom: "8vh",
    textAlign: "center",
    fontSize: "30px"
  },
  title: {
    marginBottom: "10px"
  },
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
  },
  formControl: {
    margin: theme.spacing(1)
  },
  button: {
    marginTop: "23px",
    background: "rgba(73, 197, 182, 0.8)"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  }
}));

const Contacts = ({ history }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });
  const { name, phone } = formData;
  const labelRef = React.useRef(null);
  const classes = useStyles();

  useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);

  const handleChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    alert(`Your name: ${name} \n Your phone: ${phone}`);
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Contact with us:</h2>
      <Container maxWidth="xs">
        <CompanyContact />

        <h3>We call you back</h3>
        <form className={classes.form} onSubmit={onSubmit}>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel ref={labelRef} htmlFor="component-name">
              Name
            </InputLabel>
            <OutlinedInput
              id="component-name"
              type="text"
              name="name"
              value={name}
              onChange={e => handleChange(e)}
              labelWidth={labelWidth}
              placeholder="Your Name"
            />
          </FormControl>

          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel ref={labelRef} htmlFor="component-phone">
              Phone
            </InputLabel>
            <OutlinedInput
              id="component-phone"
              type="number"
              name="phone"
              value={phone}
              onChange={e => handleChange(e)}
              labelWidth={labelWidth}
              placeholder="Phone Number"
            />
          </FormControl>

          <Button variant="contained" className={classes.button} type="submit">
            Send <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default withRouter(Contacts);
