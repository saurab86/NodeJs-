const http  = require('http');

const server = http.createServer((req,res)=>{
    console.log(req)
// res.write("Welcome to our homepage")
// res.end()
if(req.url == '/'){
    res.end("Welcome to our Home Page.")
}
 if(req.url == "/about"){
     res.end("About Us")
  }
  res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for.</p>
      <a href="/">Back to home.</a>`
  )

});

server.listen(5000)
