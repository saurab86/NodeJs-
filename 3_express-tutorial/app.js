const { text } = require('express')
const http = require('http')
const {readFileSync, readFile} = require('fs')

//get all files
const homePage = readFileSync('./3_express-tutorial/HTML-FILES/index.html')
const cssFile = readFileSync('./3_express-tutorial/HTML-FILES/packages/css/styles.css')
const swipeBundle = readFileSync('./3_express-tutorial/HTML-FILES/packages/css/swiper-bundle.min.css')
const forPic = readFileSync('./3_express-tutorial/HTML-FILES/packages/images/pic1.jpg')
const mainJS = readFileSync('./3_express-tutorial/HTML-FILES/packages/js/main.js')
const swipe_bindler = readFileSync('./3_express-tutorial/HTML-FILES/packages/js/swiper-bundle.min.js')

const server = http.createServer((req,res)=>{
    const url = req.url
// request objects
    console.log(req.method)
    console.log(req.url)

// home page
    if(url==='/'){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
// OR
    // res.end('<h1>Home Page</h1>')
    }

  // about page
    else if(url === '/about'){
            res.writeHead(200,{'content-type':'text/html'})
            res.write('<h1>About Page</h1>')
            res.end()
    }

    else if(url === '/packages/css/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(cssFile)
        res.end()
}

else if(url === '/packages/css/swiper-bundle.min.css'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(swipeBundle)
    res.end()
}
else if(url === '/packages/images/pic1.jpg'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(forPic)
    res.end()
}
else if(url === '/packages/js/main.js'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(mainJS)
    res.end()
}
else if(url === '/packages/js/swiper-bundle.min.js'){
    res.writeHead(200,{'content-type':'text/css'})
    res.write(swipe_bindler)
    res.end()
}
    else{
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>Page not found</h1>')
    res.end()
    }
})

server.listen(5000)