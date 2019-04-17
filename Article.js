//In article create our model
const mongoose = require('mongoose');

//create schema
const articleSchema = new mongoose.Schema({
    name: {type:String, required:true},
    founded: Date,
    employees: {type:Number},
    active: Boolean,
    products: [String],
    CEO: {
        name: String,
        age: Number,
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;