//In article create our model
const mongoose = require('mongoose');

//create schema
const articleSchema = new mongoose.Schema({
    name: {type:String, required:true, unique:true},
    employees: {type:Number, required:true,},
    founded: {type:Date, default:Date.now},
    active: Boolean,
    CEO: {
        name: String,
        age: Number,
    }
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;