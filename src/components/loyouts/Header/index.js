import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from "react-router-dom";
import {
	AppBar,
	Typography,
	Toolbar, Box,
	ListItem
} from '@material-ui/core';

import './Header.scss'

const useStyles = makeStyles({
	header: {
		position: 'fixed',
		top: '0',
		height: '10vh',
		zIndex: '1',
		background: 'rgba(43,43,43, 0.7)',
	},
	toolbar: {
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		height: '100%',
		maxWidth: '1200px',
		width: '100%',
	},
	listItem: {
		color: '#fff'
	}
});

const Header = () => {
	const classes = useStyles();
	return (
		<AppBar position="static" className={ classes.header }>
			<Toolbar className={ classes.toolbar }>
				<Typography variant="h6">
					<Link to="/" className="title-link">Creative Agency</Link>
				</Typography>
				<Box component="ul" display="flex">
					<ListItem><NavLink className={ classes.listItem }
					                   to="/works">Works</NavLink></ListItem>
					<ListItem><NavLink className={ classes.listItem }
					                   to="/studio">About us</NavLink></ListItem>
					<ListItem><NavLink className={ classes.listItem }
					                   to="/contacts">Contacts</NavLink></ListItem>
				</Box>
			</Toolbar>
		</AppBar>
	)
		;
};

export default Header;