import axios from "axios";
import querystring from 'querystring';

export default {
	searchAPI: function(query, begin, end) {
		return axios.get(
			"https://api.nytimes.com/svc/search/v2/articlesearch.json",
				{
					"api-key": "f0f27ef90a834d6989d3ed94b6714223",
					q: query,
					begin_date: begin,
					end_date: end,
					sort: 'newest'
				}
			);
	}
}