import React, { Fragment } from 'react';

import './About.scss'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import TeamItem from "./TeamItem";

import { ourTeam } from './TeamItem/data';


const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
});

const Studio = () => {
	const classes = useStyles();
	
	return (
		<Fragment>
			<div className="shadow"/>
			<div className="About">
				<h2 className="title">Our team</h2>
				<div className={ classes.root }>
					{ ourTeam.map(item => (
						<TeamItem key={ item.id } item={ item }/>
					)) }
				</div>
			</div>
		</Fragment>
	)
};

export default Studio;