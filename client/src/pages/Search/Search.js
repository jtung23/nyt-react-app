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
		
		headline: "",
		pub_date: "",
		snippet: "",
		url: ""
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

	saveArticle = (ev) => {
		const articleUrl = ev.currentTarget.getAttribute('url');
		const articleHeadline = ev.currentTarget.getAttribute('headline');
		const articleSnippet = ev.currentTarget.getAttribute('snippet');
		const articlePubDate = ev.currentTarget.getAttribute('pubdate');

		const articleData = {
			headline: articleHeadline,
			pub_date: articlePubDate,
			snippet: articleSnippet,
			url: articleUrl,
		};

		API.saveArticle(articleData)
			.then(res => console.log(res))
			.catch(err => console.log(err))
		
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
								>
								{item.headline}
								</a>
					 		</h1>
					 		<p className="articleSnippet"
					 		>
						 		{item.snippet}
						 	</p>
						 	<p className="articlePubDate"
						 	>
					 			{item.pub_date}
					 		</p>
							<button 
								onClick={(ev) => this.saveArticle(ev)}
								headline={item.headline}
								url={item.url}
								snippet={item.snippet}
								pubdate={item.pub_date}
							>
							Save
							</button>
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