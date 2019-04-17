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
}, (err, createArticle) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(createArticle);
    }
});

// name: {type:String, required:true, unique:true},
// employees: {type:Number, required:true,},
// founded: {type:Date, default:Date.now},
// active: Boolean,
// CEO: {
//     name: String,
//     age: Number,
// }
// });