const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	title: { type: String, required: true},
	article_date: {type: Date, required: true},
	url: {type: String, required: true},
	saved_date: {type: Date, default: Date.now}
})

const Article = mongoose.model('Book', bookSchema)

module.exports = Article;