const mongoose = require('mongoose')

mongoose.connect('//yeshwanthreddyganta:ganta@2000@in-aws.li1rd.mongodb.net/')

const connection = mongoose.connection;
 
connection.on('connected', ()=>(console.log("DB connected")))
connection.on('error', ()=>(console.log("DB error")))

module.exports = mongoose