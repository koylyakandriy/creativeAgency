import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./components/loyouts/Header";
import Works from "./components/loyouts/Works";
import Footer from "./components/loyouts/Footer";
import About from "./components/loyouts/About";
import Contacts from "./components/loyouts/Contacts";
import Landing from "./components/loyouts/Lending";

import './style.scss'

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header/>
				<main>
					<Switch>
						<Route exact path="/" component={ Landing }/>
						<Route exact path="/works" component={ Works }/>
						<Route exact path="/studio" component={ About }/>
						<Route exact path="/contacts" component={ Contacts }/>
					
					</Switch>
				</main>
				<Footer/>
			</Fragment>
		
		</Router>
	);
};

export default App;
