import React, { Component } from 'react';
import PrimaryComponent from '../../components/PrimaryComponent';
import {ArticleResults, ArticleResult} from "../../components/ArticleResults";
import { Query, SearchForm } from "../../components/SearchForm";
import { SavedArticles, SavedArticle } from "../../components/SavedArticles";
import API from "../../utils/API.js";

class MainContent extends Component {
	state={
		topic: "",
		startYr: "",
		endYr: ""
	};

	handleInputChange = (ev) => {
		let { name , value } = ev.target
		this.setState({
			[name] : value
		})
	};

	handleSearchSubmit = (ev) => {
		ev.preventDefault();
		console.log(this.state);
		const query = this.state.topic;
		const startDate = this.state.startYr;
		const endDate = this.state.endDate;
		API.searchAPI(query, startDate, endDate)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	};

	usageFunction = (props) => {
		let usage = props;
    switch(usage) {
      case 'search':
        return 	<SearchForm 
			        		handleInputChange={this.handleInputChange}
			        		handleSearchSubmit={this.handleSearchSubmit} 
        				/>;
      case 'result':
        return 	<ArticleResults 
			        		handleInputChange={this.handleInputChange}
			        		handleSearchSubmit={this.handleSearchSubmit}
        				/>;
      case 'saved':
        return 	<SavedArticles
			        		handleInputChange={this.handleInputChange}
			        		handleSearchSubmit={this.handleSearchSubmit} 
        				/>;
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