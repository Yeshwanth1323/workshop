const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://yeshwanthreddyganta:ganta@2000@in-aws.li1rd.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')