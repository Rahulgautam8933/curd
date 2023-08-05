const mongoose = require('mongoose');

// const DB = 'mongodb+srv://rg3427gr:Rahul@123@cluster0.hteigdr.mongodb.net/users?retryWrites=true&w=majority'
const DB = 'mongodb+srv://rohan8933:Rahulgautam8933@cluster0.1s3qk9i.mongodb.net/collections?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
    console.log('connection done');
}).catch((error)=>{
    console.log('error')
})