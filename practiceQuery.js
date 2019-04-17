require ('./db')

const Article = require('./Article');


Article.create({
    name: 'Apple',
    founded: 'April 1, 1976',
    employees: 2,
    active: false,
    products: ['computers'],
    CEO: {
        name: 'Steve Jobs',
        age: 21,}
}, 
Article.create({
    name: 'Google',
    founded: 'September 4, 1998',
    employees: 57100,
    active: true,
    products:['search','maps','email'],
    CEO: {
        name: 'Larry Page',
        age: 43,}
},
(err, createArticle) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(createArticle);
    }
}));

// name: {type:String, required:true, unique:true},
// employees: {type:Number, required:true,},
// founded: {type:Date, default:Date.now},
// active: Boolean,
// CEO: {
//     name: String,
//     age: Number,
// }
// });