const mongoose = require ('mongoose');

const connectionString = 'mongodb://localhost/test';

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useCreateIndex:true,
    //useUpdateIndex:true,   //callback?
});

mongoose.connection.on('connected', ()=>{
    console.log(`Mongoose connected to ${connectionString}`);
});
mongoose.connection.on('disconnected',()=>{
    console.log(`Mongoose disconnected to ${connectionString}`);
});
mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});