import React from 'react';
import { NavLink } from "react-router-dom";
import {
	AppBar,
	Typography,
	Toolbar, Box,
	ListItem
} from '@material-ui/core';

import './Header.scss';

const Header = () => {
	return (
		<AppBar position="static" className="Header">
			<Toolbar>
				<Typography variant="h6">
					Creative Agency
				</Typography>
				
				<Box component="ul" display="flex">
					<ListItem><NavLink to="/">Works</NavLink></ListItem>
					<ListItem><NavLink to="/studio">Studio</NavLink></ListItem>
					<ListItem><NavLink to="/contacts">Contacts</NavLink></ListItem>
				</Box>
			</Toolbar>
		</AppBar>
	)
		;
};

export default Header;