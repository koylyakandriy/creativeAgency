import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Avatar,
  CardHeader
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "15px"
  },
  card: {
    maxWidth: 345,
    margin: "0 auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  }
});

const CardItem = ({ card: { avatar, title, subheader, img, description } }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
      <Card raised className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">{avatar}</Avatar>}
          title={title}
          subheader={subheader}
        />
        <CardMedia
          className={classes.media}
          elementtype="img"
          image={img}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

CardItem.propTypes = {
  card: PropTypes.object
};

export default CardItem;
