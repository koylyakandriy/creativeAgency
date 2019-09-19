import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";


import CardItem from "./CardItem";
import listOfCards from "./CardItem/data";

const useStyles = makeStyles({
	root: {
		marginTop: '110px',
		marginBottom: '20px',
	},
});

const Works = () => {
	const classes = useStyles();
	
	return (
		<Grid container className={ classes.root }>
			{ listOfCards.map(card => (
				<CardItem key={ card.id } card={ card }/>
			)) }
		</Grid>
	)
		;
};

export default Works;