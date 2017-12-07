import React, {Component} from 'react';
import {Query, SearchForm} from '../../components/SearchForm';
import {ArticleResults, ArticleResult} from "../../components/ArticleResults";
import API from "../../utils/API.js";

class Search extends Component {
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

	render() {
		return(
			<div>
				<SearchForm 
      		handleInputChange={this.handleInputChange}
      		handleSearchSubmit={this.handleSearchSubmit} 
				/>
				<ArticleResults />
			</div>
		)
	}
}

export default Search;