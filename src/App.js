import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from "@material-ui/core/Container";

import Header from "./components/loyouts/Header/Header";
import Work from "./components/loyouts/Works/Work";
import Footer from "./components/loyouts/Footer/Footer";
import Studio from "./components/loyouts/Studio";
import Contacts from "./components/loyouts/Contacts";

import './style.scss'

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header/>
				<Container component="main" maxWidth="md">
					<Switch>
						<Route exact path="/" component={ Work }/>
						<Route exact path="/studio" component={ Studio }/>
						<Route exact path="/contacts" component={ Contacts }/>
					</Switch>
				</Container>
				
				<Footer/>
			
			</Fragment>
		</Router>
	
	);
};

export default App;
