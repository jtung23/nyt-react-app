import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../../components/Header';
import MainContent from '../MainContent';
import Search from '../Search';
import Saved from '../Saved';


class Body extends Component {

	render() {
		return (
			<Router>
      	<div className="body">
					<Header />
      		<Switch>
		      	<Route 
		      		exact path="/" 
		      		component={MainContent}
		      	/>
		      	<Route
		      		exact path="/search"
		      		component={Search}
		      	/>

		      	<Route
		      		exact path="/saved"
		      		component={Saved}
		      	/>
	      	</Switch>
      	</div>
      </Router>
		)
	}
}

export default Body;