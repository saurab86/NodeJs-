const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(400).send('<h1>resource not found</h1>') 
 })



app.listen(5000,(req,res)=>{
    console.log('server hit the 5000 port..')
})