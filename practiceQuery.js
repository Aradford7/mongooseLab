require ('./db')

const Article = require('./Article');


// Article.create({
//     name: 'Apple',
//     founded: 'April 1, 1976',
//     employees: 2,
//     active: false,
//     products: ['computers'],
//     CEO: {
//         name: 'Steve Jobs',
//         age: 21,}
// }, 
// Article.create({
//     name: 'Google',
//     founded: 'September 4, 1998',
//     employees: 57100,
//     active: true,
//     products:['search','maps','email'],
//     CEO: {
//         name: 'Larry Page',
//         age: 43,}
// },
// (err, createArticle) => {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(createArticle);
//     }
// }));

// name: {type:String, required:true, unique:true},
// employees: {type:Number, required:true,},
// founded: {type:Date, default:Date.now},
// active: Boolean,
// CEO: {
//     name: String,
//     age: Number,
// }
// });
//node practiceQuery.js

//in mongo
//db.articles.find().pretty()

//find the first argument empty objects in whole collection
// Article.find({name: 'Apple'}, (err, foundArticle) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(foundArticle);
//     }
// });
Article.updateOne(
// { name: 'Apple'},                      //replace these
// { $set : {name: 'Apple Inc'}},
// { employees: 2},
// { $set : {employees: 66000} },
{ active: false},
{ $set : {active: true}},

    (err, response) =>{
        console.log(response);//if action was sucessful
    }
);
    
   
    // { products: ['computers']},
    // { $set : {products:['computers', 'phones', 'tablets']}},
    // { CEO:{name:'Steve Jobs', age:21}},
    // { $set : {CEO:{name: 'Time Cook', age:56}},
    
// Article.find({employees: 'Apple Inc', employees:'Google'},
//  (err, foundArticle) =>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(foundArticle);
//     }
// });
// Article.remove(
//     { name: 'Apple Inc'},
//     { name: 'Google'},
//     (err, response) =>{
//         console.log(response); //if it worked
//     }
// );