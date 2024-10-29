const express = require('express')
const app = express ()
const port = 3000
app.use(express.json())
const db = require('./configs/db')

app.get('/',(req,res)=> res.status(200).json({ message: "welcome"}))

app.listen(port,(()=> console.log(`listening on port ${port}`)))