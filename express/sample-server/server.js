const express = require ('express')

const port = 3000

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(400).json("hello yesh");
})

app.listen(port,()=>{ 
    console.log('server is running in port:' + port)

    //console.log(`server is running in port: ${port}`)

})