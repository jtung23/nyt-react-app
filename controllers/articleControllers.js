const db = require('../models');

module.exports = {
	findAll: function(req, res) {
		db.Article
			.find(req.query)
			.then(dbModel => res.json(dbModel))
	};
};