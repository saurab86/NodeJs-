const express = require('express');
const res = require('express/lib/response');
const app = express();

const{products}= require('./data.js')


app.get('/',(req,res)=>{
    // res.json([
    //     {name:'John'},
    //     {name:'Susan'}
    // ])
 

    //  Producs json response from data.js module
    // res.json(products)  

        res.send('<h1>Home Page</h1><br><a href ="/api/products"></a>')
   
})


// Response through api end point
app.get('/api/products',(req,res)=>{
 // res.json(products)

//       OR
    const newProducts = products.map((product)=>{
        const{id,name,image}=product;
        return{id,name,image}
    })
   res.json(newProducts)
})


// Json response for particular id
app.get('/api/products/1',(req,res)=>{
    const singleProduct = products.find((product)=>product.id==`1`)
    res.json(singleProduct)
})


// json response for dynamic endpoint
app.get('/api/products/:productID',(req,res)=>{
    const {productID}=req.params
    const dynamicProduct = products.find((product)=>product.id===Number(productID))
    if(!dynamicProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(dynamicProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

// Query String 
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    res.send("Query String")
    })

// Query String with limit
 app.get('/api/v1/search/query',(req,res)=>{
     const{search,limit}=req.query
     let sortedProducts = [...products]

     if(search){
         sortedProducts = sortedProducts.filter((product)=>{
             return product.name.startsWith(search)
         })
        }
      if(limit){
          sortedProducts = sortedProducts.slice(0,Number(limit))
      }
      if(sortedProducts.length<1){
          res.status(200).send('no products matched your search')
      }
res.status(200).json(sortedProducts)
 })   
app.listen(5000,(req,res)=>{
    console.log('Server is listening on port 5000..')
})