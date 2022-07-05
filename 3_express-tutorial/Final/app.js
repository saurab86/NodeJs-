const express = require('express')
const app = express()
const path = require('path');

app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./index.html'))
})



app.all('*',(req,res)=>{
    res.status(400).send('resoure not found')
})
app.listen(5000,()=>{
   console.log('User hit the port 5000')
})


