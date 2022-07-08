const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res

// app.use(logger) for single middleware file
app.use([authorize,logger   ])

// Instead of using logger in every callback we can simply use app.use and invoke middleware file i.e logger
app.get('/',(req,res)=>{
    res.send('Home')

})

app.get('/about',logger, (req,res)=>{
    res.send('About')
}) 

app.get('/api/products', (req,res)=>{
    res.send('Products')
})

app.get('/api/items', (req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>
{
    console.log('Server hit the port 500....')
})