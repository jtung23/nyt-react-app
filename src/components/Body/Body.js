import React, { Component } from 'react';
import Header from '../Header';
import MainContent from '../MainContent';


class Body extends Component {
	state={
		something:0
	}

	render() {
		return (
      <div className="body">
      	<Header />
      	<MainContent />
      </div>	
		)
	}
}

export default Body;