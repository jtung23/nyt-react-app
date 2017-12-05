import React, { Component } from 'react';
import PrimaryComponent from '../PrimaryComponent';
import ArticleResults from "../ArticleResults";
import SearchForm from "../SearchForm";
import SavedArticles from "../SavedArticles";

class MainContent extends Component {
	state={
		topic: "",
		startYr: "",
		endYr: ""
	}
	handleSearchSubmit = (ev) => {
		ev.preventDefault();
		console.log('clicky');

	};

	usageFunction = (props) => {
		let usage = props;
		console.log(usage)
    switch(usage) {
      case 'search':
        return <SearchForm handleSearchSubmit={this.handleSearchSubmit} />;
        break;
      case 'result':
        return <ArticleResults />;
        break;
      case 'saved':
        return <SavedArticles />;
        break;
      default:
        return null;
    }
	};

	render() {
		return(
			<div>
				<PrimaryComponent usage="search" usageFunc={this.usageFunction} />
				<PrimaryComponent usage="result" usageFunc={this.usageFunction} />
				<PrimaryComponent usage="saved" usageFunc={this.usageFunction} />
			</div>
		)
	}
}

export default MainContent;