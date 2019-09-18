import React from 'react';
import Grid from "@material-ui/core/Grid";

import CardItem from "./CardItem";

import './Works.scss';

const Work = () => {
	return (
		<Grid container="div" spacing={ 2 } className="Works">
			<CardItem/>
		</Grid>
	)
		;
};

export default Work;