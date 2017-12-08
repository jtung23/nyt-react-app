import axios from "axios";
import querystring from 'querystring';

export default {

	getArticles: function() {
		return axios.get("/api/articles")
	},

	saveArticle: function(articleData) {
		return axios.post('/api/articles', articleData);
	},

	deleteArticle: function(id) {
		return axios.delete('/api/articles/' + id);
	},

	searchAPI: function(queryParams) {
		return axios.get(
			"https://api.nytimes.com/svc/search/v2/articlesearch.json",
				{
					params: queryParams
				}
			)
	}


}