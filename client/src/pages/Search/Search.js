import React, {Component} from 'react';
import {SearchForm} from '../../components/SearchForm';
import {ArticleResults, ArticleResult} from "../../components/ArticleResults";
import API from "../../utils/API.js";

class Search extends Component {
	state={
		topic: "",
		startYr: "",
		endYr: "",

		articles: [],
		test: 'test'
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
		const startDate = this.state.startYr + "0101";
		const endDate = this.state.endYr + "1231";

		API.searchAPI({
			"api-key": "f0f27ef90a834d6989d3ed94b6714223",
			'q': query,
			'begin_date': startDate,
			'end_date': endDate,
			'sort': 'newest'
		})
			.then(res => {
				console.log(res);
				this.loadSearchResults(res);
			})
			.catch(err => console.log(err))
	};

	loadSearchResults = (res) => {
		const results = res.data.response.docs;
		let articleArr = [];
		// let pubDateArr = [];
		// let snippetArr = [];
		results.map(item => (
			articleArr.push({
				headline: item.headline.main,
				pub_date: item.pub_date,
				snippet: item.snippet,
				id: item._id,
				url: item.web_url
			})
		))
		this.setState({
			articles: articleArr
		});
		console.log(this.state.articles)
	};

	saveArticle = () => {

		const articleUrl = this.articleHeadline.getAttribute('href');
		const articleHeadline = this.articleHeadline.textContent;
		const articleSnippet = this.articleSnippet.textContent;
		const articlePubDate = this.articlePubDate.textContent;
		const articleId = this.articleHeadline.getAttribute('id');

		
	}

	render() {
		return(
			<div>
				<SearchForm 
      		handleInputChange={this.handleInputChange}
      		handleSearchSubmit={this.handleSearchSubmit} 
				/>

				<ArticleResults>
				{this.state.articles.length ? (
					<div>
					{this.state.articles.map(item => (
						<div key={item.id}>
							<h1>
								<a href={item.url} target="_blank"
									ref={(a) => { this.articleHeadline = a}}
									id={item.id}
								>
								{item.headline}
								</a>
					 		</h1>
					 		<p className="articleSnippet"
								ref={(p) => { this.articleSnippet = p}}
					 		>
						 		{item.snippet}
						 	</p>
						 	<p className="articlePubDate"
								ref={(p) => { this.articlePubDate = p}}
						 	>
					 			{item.pub_date}
					 		</p>
							<button onClick={this.saveArticle}>Save</button>
					 	</div>

						))}
					</div>
					) : (
					<h4> No articles </h4>
					)
				}
				</ArticleResults>
			</div>
		)
	}
}

export default Search;