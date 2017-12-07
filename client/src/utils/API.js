import axios from "axios";
import querystring from 'querystring';

export default {
	searchAPI: function(queryParams) {
		return axios.get(
			"https://api.nytimes.com/svc/search/v2/articlesearch.json",
				{
					params: queryParams
				}
			)
	}


}