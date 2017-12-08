import React, {Component} from 'react';
import {ArticleResults} from "../../components/ArticleResults";
import API from "../../utils/API.js";

class Saved extends Component { 
	state = {
		dbArticles: []
	}
	componentWillMount() {
		this.loadArticles()
	};

	loadArticles = () => {
		console.log('loadarticles runs')
		API.getArticles()
			.then(res =>
				this.setState({dbArticles: res.data})
			)
			.catch(err => console.log(err))
	};

	deleteArticle = (ev) => {
		const id = ev.currentTarget.dataset.id;
		API.deleteArticle(id)
			.then(res =>
					this.loadArticles()
				)
			.catch(err => console.log(err))
	};

	render() {
		return(
			<div>
				<h4>
					Saved Articles
				</h4>
				<ArticleResults> 
					{this.state.dbArticles.map(article => (
						<div key={article._id}>
							<h1>
								<a href={article.url} target="_blank"
								>
								{article.headline}
								</a>
					 		</h1>
					 		<p className="articleSnippet"
					 		>
						 		{article.snippet}
						 	</p>
						 	<p className="articlePubDate"
						 	>
					 			{article.pub_date}
					 		</p>
					 		<button
					 			onClick={this.deleteArticle}
					 			data-id={article._id}
					 		>
					 			Delete
					 		</button>
					 	</div>
					))}
				</ArticleResults>
			</div>

		)
	}

}

export default Saved;